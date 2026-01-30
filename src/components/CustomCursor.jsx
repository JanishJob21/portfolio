import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const lastPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const currentX = e.clientX;
            const currentY = e.clientY;

            // Calculate movement vector
            const dx = currentX - lastPos.current.x;
            const dy = currentY - lastPos.current.y;

            // Only update rotation if there's significant movement to avoid flickering
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);
                setRotation(angle + 90); // Add 90 because the arrow points up by default
            }

            setPosition({ x: currentX, y: currentY });
            lastPos.current = { x: currentX, y: currentY };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Return null if on touch device (to avoid invisible cursor issues)
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return null;

    return (
        <div className="arrow-cursor-container">
            <div
                className="arrow-cursor"
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ overflow: 'visible' }}
                >
                    <path
                        d="M12 2 L2 22 L12 18 L22 22 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
};

export default CustomCursor;
