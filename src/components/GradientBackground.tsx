import { useEffect, useState } from 'react';

const GradientBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let ticking = false;
        const handleMouseMove = (event: MouseEvent) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setMousePosition({
                        x: event.clientX,
                        y: event.clientY,
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const { x, y } = mousePosition;
    // Fallback for server-side rendering or initial load
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

    // Damping factor - higher number means less movement (more subtle)
    const damping = 40;
    const moveX = (x - centerX) / damping;
    const moveY = (y - centerY) / damping;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
            {/* Mesh Gradient Blobs */}

            {/* Blob 1: Primary Teal - Top Left */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter opacity-20 animate-blob"
                style={{
                    background: `radial-gradient(circle, hsl(168, 76%, 42%) 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    transform: `translate(${moveX}px, ${moveY}px)`,
                    transition: 'transform 0.4s ease-out',
                }}
            />

            {/* Blob 2: Secondary Dark Blue - Bottom Right */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter opacity-30 animate-blob animation-delay-2000"
                style={{
                    background: `radial-gradient(circle, hsl(214, 50%, 18%) 0%, transparent 70%)`,
                    filter: 'blur(80px)',
                    transform: `translate(${moveX * -1}px, ${moveY * -1}px)`,
                    transition: 'transform 0.4s ease-out',
                }}
            />

            {/* Blob 3: Accent/Highlight - Center Area */}
            <div
                className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter opacity-15 animate-blob animation-delay-4000"
                style={{
                    background: `radial-gradient(circle, hsl(168, 76%, 55%) 0%, transparent 70%)`,
                    filter: 'blur(100px)',
                    transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`,
                    transition: 'transform 0.4s ease-out',
                }}
            />

            {/* Subtle overlay to unify contrast if needed, ensuring deep black feel at edges */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
    );
};

export default GradientBackground;
