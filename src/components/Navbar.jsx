import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github, Linkedin, Code2 } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when hash changes
    useEffect(() => {
        const handleHashChange = () => setIsOpen(false);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#experience' },
        { name: 'Projects', href: '#work' },
        { name: 'Contact', href: '#contact' },

    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: scrolled ? '1rem 0' : '1.25rem 0',
                backgroundColor: scrolled ? 'var(--glass)' : 'var(--bg-primary)',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: '1px solid var(--glass-border)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Left - Navigation Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '0.9rem',
                                fontWeight: 400,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'color 0.3s ease'
                            }}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Center - Logo (Absolutely positioned for perfect centering) */}
                <motion.div
                    className="logo-gradient"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 900,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        zIndex: 10
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    JJ
                </motion.div>

                {/* Right - Icon Buttons */}
                <div className="desktop-menu" style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    <motion.a
                        href="https://github.com/JanishJob21"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <img
                            src="https://img.icons8.com/?size=96&id=63777&format=png"
                            alt="GitHub"
                            style={{
                                width: '26px',
                                height: '26px',
                                filter: 'grayscale(1) brightness(1.5)',
                                transition: 'filter 0.3s'
                            }}
                            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                        />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/janish-job-4a8570320"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <img
                            src="https://img.icons8.com/?size=96&id=13930&format=png"
                            alt="LinkedIn"
                            style={{
                                width: '26px',
                                height: '26px',
                                filter: 'grayscale(1) brightness(1.5)',
                                transition: 'filter 0.3s'
                            }}
                            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                        />
                    </motion.a>
                    <motion.a
                        href="https://leetcode.com/u/Hb9zj8ou7c/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        style={{
                            color: 'var(--text-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <img
                            src="https://img.icons8.com/?size=160&id=9L16NypUzu38&format=png"
                            alt="LeetCode"
                            style={{
                                width: '26px',
                                height: '26px',
                                filter: 'grayscale(1) brightness(1.5)',
                                transition: 'filter 0.3s'
                            }}
                            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                        />
                    </motion.a>
                    <motion.button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            padding: 0
                        }}
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', zIndex: 101, gridColumn: '3', justifySelf: 'end' }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 100,
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <a href="https://github.com/JanishJob21" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://img.icons8.com/?size=96&id=63777&format=png"
                                    alt="GitHub"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        filter: 'grayscale(1) brightness(1.5)',
                                        transition: 'filter 0.3s'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                                    onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/janish-job-4a8570320" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://img.icons8.com/?size=96&id=13930&format=png"
                                    alt="LinkedIn"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        filter: 'grayscale(1) brightness(1.5)',
                                        transition: 'filter 0.3s'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                                    onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                                />
                            </a>
                            <a href="https://leetcode.com/u/Hb9zj8ou7c/" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://img.icons8.com/?size=160&id=9L16NypUzu38&format=png"
                                    alt="LeetCode"
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        filter: 'grayscale(1) brightness(1.5)',
                                        transition: 'filter 0.3s'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0) brightness(1)'}
                                    onMouseOut={e => e.currentTarget.style.filter = 'grayscale(1) brightness(1.5)'}
                                />
                            </a>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label="Toggle Theme"
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                {theme === 'dark' ? <Sun size={32} style={{ color: 'var(--text-primary)' }} /> : <Moon size={32} style={{ color: 'var(--text-primary)' }} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
