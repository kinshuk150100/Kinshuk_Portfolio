'use client'

import { Suspense, useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Html } from '@react-three/drei'
import * as THREE from 'three'

interface TechLogoProps {
  position: [number, number, number]
  name: string
  index: number
  color: string
}

function TechLogo({ position, name, index, color }: TechLogoProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Logo plane with gradient */}
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Tech name text */}
      <Text
        position={[0, -1.8, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {name}
      </Text>
    </group>
  )
}

function TechOrbit() {
  const groupRef = useRef<THREE.Group>(null)
  const orbitRadius = 5
  const techLogos = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Git', color: '#F05032' },
  ]

  const positions = useMemo(() => {
    return techLogos.map((_, index) => {
      const angle = (index / techLogos.length) * Math.PI * 2
      return [
        Math.cos(angle) * orbitRadius,
        Math.sin(angle * 0.5) * 1.5,
        Math.sin(angle) * orbitRadius,
      ] as [number, number, number]
    })
  }, [])

  // Rotate the entire group
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {techLogos.map((tech, index) => (
        <TechLogo
          key={tech.name}
          position={positions[index]}
          name={tech.name}
          index={index}
          color={tech.color}
        />
      ))}
    </group>
  )
}

function SceneContent() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const { camera } = useThree()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (camera) {
      camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.05
      camera.position.y += (mouseRef.current.y * 0.3 + 2 - camera.position.y) * 0.05
    }
  })

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[0, 0, 0]} intensity={0.6} color="#FF0080" />
      <pointLight position={[0, 0, 0]} intensity={0.4} color="#2AFADF" />

      {/* Soft glow effect below center */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[4, 32]} />
        <meshStandardMaterial
          color="#FF0080"
          transparent
          opacity={0.25}
          emissive="#FF0080"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Additional glow layers */}
      <mesh position={[0, -2.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial
          color="#2AFADF"
          transparent
          opacity={0.15}
          emissive="#2AFADF"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Tech Orbit */}
      <TechOrbit />

      {/* Center point with glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#2AFADF"
          emissive="#2AFADF"
          emissiveIntensity={1.5}
        />
      </mesh>
    </>
  )
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background/50">
      <div className="text-foreground/40 text-sm">Loading 3D Scene...</div>
    </div>
  )
}

export function TechOrbitScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="w-full h-[600px] md:h-[800px] relative overflow-hidden bg-background">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 50 }}
          gl={{ alpha: true, antialias: !isMobile }}
          dpr={isMobile ? 1 : 2}
          className="w-full h-full"
        >
          <SceneContent />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </Suspense>
    </section>
  )
}
