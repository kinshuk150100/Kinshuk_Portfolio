export function smoothScrollTo(elementId: string) {
  const element = document.querySelector(elementId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    // Use smooth scroll with easing
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

// Enhanced smooth scroll with animation
export function smoothScrollToElement(element: HTMLElement | null) {
  if (!element) return

  const headerOffset = 80
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  // Use requestAnimationFrame for smoother animation
  const startPosition = window.pageYOffset
  const distance = offsetPosition - startPosition
  const duration = 800
  let start: number | null = null

  function step(timestamp: number) {
    if (!start) start = timestamp
    const progress = timestamp - start
    const progressPercent = Math.min(progress / duration, 1)

    // Easing function (ease-in-out-cubic)
    const ease = progressPercent < 0.5
      ? 4 * progressPercent * progressPercent * progressPercent
      : 1 - Math.pow(-2 * progressPercent + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * ease)

    if (progress < duration) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
