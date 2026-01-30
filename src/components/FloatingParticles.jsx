import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 20 : 60; // Reduced count for better performance

        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: isMobile ? Math.random() * 8 + 8 : Math.random() * 15 + 15,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * -20,
            color: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? '#818cf8' : '#ec4899',
            opacity: isMobile ? 0.08 : 0.12
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    animate={{
                        x: [
                            `${p.x}vw`,
                            `${p.x + 20}vw`,
                            `${p.x - 20}vw`,
                            `${p.x}vw`
                        ],
                        y: [
                            `${p.y}vh`,
                            `${p.y - 20}vh`,
                            `${p.y + 20}vh`,
                            `${p.y}vh`
                        ],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                    style={{
                        position: 'absolute',
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: p.color,
                        filter: 'blur(1.5px)', // Sharper but still soft
                        left: -10,
                        top: -10,
                        opacity: p.opacity,
                        mixBlendMode: 'screen',
                        willChange: 'transform'
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
