'use client'

export function FancyBackground() {
  return (
    <div className="fancy-background">
      {/* Animated Gradient Blob 1 - Pink (#FF0080) */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 128, 0.6) 0%, rgba(255, 0, 128, 0.4) 40%, rgba(255, 0, 128, 0.2) 70%, transparent 100%)',
          top: '10%',
          left: '10%',
          opacity: 0.5,
          animation: 'floatUp 20s ease-in-out infinite, floatSide 25s ease-in-out infinite',
        }}
      />

      {/* Animated Gradient Blob 2 - Purple (#7928CA) */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(121, 40, 202, 0.6) 0%, rgba(121, 40, 202, 0.4) 40%, rgba(121, 40, 202, 0.2) 70%, transparent 100%)',
          top: '60%',
          right: '15%',
          opacity: 0.5,
          animation: 'floatUp 25s ease-in-out infinite reverse, rotateSlow 30s linear infinite',
        }}
      />

      {/* Animated Gradient Blob 3 - Cyan (#2AFADF) */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(42, 250, 223, 0.6) 0%, rgba(42, 250, 223, 0.4) 40%, rgba(42, 250, 223, 0.2) 70%, transparent 100%)',
          bottom: '15%',
          left: '20%',
          opacity: 0.5,
          animation: 'floatUp 22s ease-in-out infinite, floatSide 28s ease-in-out infinite reverse',
        }}
      />

      {/* Animated Gradient Blob 4 - Mint (#00F5A0) */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 160, 0.6) 0%, rgba(0, 245, 160, 0.4) 40%, rgba(0, 245, 160, 0.2) 70%, transparent 100%)',
          top: '30%',
          right: '30%',
          opacity: 0.5,
          animation: 'floatUp 18s ease-in-out infinite, rotateSlow 35s linear infinite reverse',
        }}
      />

      {/* Animated Gradient Blob 5 - Orange (#FF9A00) */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 154, 0, 0.6) 0%, rgba(255, 154, 0, 0.4) 40%, rgba(255, 154, 0, 0.2) 70%, transparent 100%)',
          bottom: '40%',
          left: '50%',
          opacity: 0.4,
          animation: 'floatUp 24s ease-in-out infinite, rotateSlow 32s linear infinite',
        }}
      />

      {/* Moving Light Rays Overlay - Vibrant Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, 
              rgba(255, 0, 128, 0.3) 0%, 
              rgba(121, 40, 202, 0.25) 20%, 
              rgba(42, 250, 223, 0.2) 40%, 
              rgba(0, 245, 160, 0.15) 60%, 
              rgba(255, 154, 0, 0.1) 80%, 
              transparent 100%
            )
          `,
          opacity: 0.3,
          animation: 'rotateSlow 40s linear infinite',
          mixBlendMode: 'screen',
        }}
      />

      {/* Additional Light Ray Layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 80% at 30% 70%, 
              rgba(255, 0, 128, 0.2) 0%, 
              rgba(42, 250, 223, 0.15) 40%, 
              rgba(0, 245, 160, 0.1) 70%, 
              transparent 100%
            )
          `,
          opacity: 0.2,
          animation: 'rotateSlow 50s linear infinite reverse',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
