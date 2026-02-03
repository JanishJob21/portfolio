import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gamepad2 } from 'lucide-react';
import '../hybrid-welcome.css';

const WelcomeScreen = ({ onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showLine, setShowLine] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isRevealing, setIsRevealing] = useState(false);
    const fullName = 'JANISH JOB';

    // Typewriter effect
    useEffect(() => {
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setDisplayedText(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => setShowLine(true), 300);
                setTimeout(() => setShowContent(true), 500);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, []);

    // Loader status
    useEffect(() => {
        if (showContent) {
            const timer = setTimeout(() => {
                setIsLoaded(true);
            }, 2000); // 2s for progress bar
            return () => clearTimeout(timer);
        }
    }, [showContent]);

    // Parallax mouse tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleEnter = () => {
        setIsRevealing(true);
        setTimeout(onComplete, 2500); // Extended wait for slow animation
    };

    // Gaming console shapes
    const consoleShapes = [
        { x: -160, y: -20, rotation: -15, size: 40, delay: 0 },
        { x: 160, y: -20, rotation: 15, size: 50, delay: 0.1 },
        { x: -180, y: 80, rotation: 10, size: 35, delay: 0.2 },
        { x: 180, y: 80, rotation: -10, size: 45, delay: 0.3 },
    ];

    return (
        <motion.div
            className="hybrid-welcome-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            {/* Background Blobs */}
            <div className="welcome-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            {/* Floating Gaming Console Shapes with Parallax */}
            <div className="shapes-container">
                {consoleShapes.map((shape, index) => (
                    <motion.div
                        key={index}
                        className="console-shape"
                        initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        animate={{
                            opacity: isRevealing ? 0 : 0.3,
                            scale: 1, // Keep scale constant or slightly larger
                            rotate: shape.rotation,
                            // Fly out to the sides like a gate
                            x: isRevealing
                                ? (shape.x < 0 ? -window.innerWidth / 1.5 : window.innerWidth / 1.5)
                                : shape.x + mousePosition.x * (index + 1) * 0.3,
                            y: shape.y + mousePosition.y * (index + 1) * 0.3,
                        }}
                        transition={{
                            delay: isRevealing ? index * 0.4 : shape.delay, // Slow staggered delay
                            duration: isRevealing ? 1.5 : 0.8, // Slow flight duration
                            ease: isRevealing ? [0.22, 1, 0.36, 1] : "easeInOut"
                        }}
                    >
                        <Gamepad2 size={shape.size} strokeWidth={1.5} />
                    </motion.div>
                ))}
            </div>

            {/* Main Content - Glassmorphism Card */}
            <motion.div
                className="welcome-glass-card"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: isRevealing ? 0 : 1, y: isRevealing ? -50 : 0, scale: isRevealing ? 0.9 : 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hybrid-content">
                    {/* Dynamic Greeting */}
                    <motion.div
                        className="greeting-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="greeting-line" />
                        <span className="greeting-text">
                            {(() => {
                                const hour = new Date().getHours();
                                if (hour >= 16 || hour < 6) return 'Good Evening';
                                if (hour >= 12) return 'Good Afternoon';
                                return 'Good Morning';
                            })()}
                        </span>
                        <span className="greeting-line" />
                    </motion.div>

                    {/* Typewriter Name */}
                    <div className="typewriter-container">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '0.2rem',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Hi, I am
                        </motion.p>
                        <motion.h1
                            className="typewriter-name"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {displayedText}
                            <span className="typewriter-cursor">|</span>
                        </motion.h1>
                    </div>

                    {/* Elegant Line */}
                    {showLine && (
                        <motion.div
                            className="elegant-line"
                            initial={{ width: 0 }}
                            animate={{ width: isRevealing ? 0 : '300px' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                    )}

                    {/* Subtitle Content */}
                    {showContent && (
                        <>
                            <motion.p
                                className="hybrid-subtitle"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isRevealing ? 0 : 1, y: isRevealing ? -20 : 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Full Stack Developer
                            </motion.p>

                            <motion.p
                                className="hybrid-tagline"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isRevealing ? 0 : 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Crafting elegant digital solutions
                            </motion.p>

                            {/* Dynamic Loader */}
                            <div className="welcome-loader-wrapper">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="loader-status"
                                    style={{
                                        color: isLoaded ? 'var(--accent)' : 'inherit',
                                        opacity: isLoaded ? 1 : 0.6
                                    }}
                                >
                                    {isLoaded ? 'System Ready' : 'Initializing System...'}
                                </motion.div>
                                <div className="welcome-loader">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 0.4, duration: 2, ease: "easeInOut" }}
                                        className="loader-fill"
                                    />
                                </div>
                            </div>

                            <motion.button
                                className="hybrid-enter-btn"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleEnter}
                            >
                                <span>Enter Portfolio</span>
                                <Sparkles size={18} />
                            </motion.button>
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeScreen;
