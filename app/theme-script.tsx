import Script from 'next/script'

export function ThemeScript() {
    return (
        <Script
            id="theme-init"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    (function() {
                        try {
                            // Always default to 'dark' theme
                            // Only use 'light' if explicitly stored in localStorage
                            const storedTheme = localStorage.getItem('portfolio-theme');
                            const theme = storedTheme === 'light' ? 'light' : 'dark';
                            
                            // Apply dark class by default, remove only if light is explicitly set
                            if (theme === 'dark') {
                                document.documentElement.classList.add('dark');
                            } else {
                                document.documentElement.classList.remove('dark');
                            }
                            
                            // Set the theme attribute for next-themes
                            document.documentElement.setAttribute('data-theme', theme);
                            
                            // Also set color-scheme for browser UI
                            document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light';
                        } catch (e) {
                            // Default to dark on any error
                            document.documentElement.classList.add('dark');
                            document.documentElement.style.colorScheme = 'dark';
                            console.error('Theme script error:', e);
                        }
                    })();
                `,
            }}
        />
    )
}
