'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
          <h2 className="text-2xl font-bold text-foreground mb-4">Something went wrong!</h2>
          <button
            onClick={reset}
            className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
