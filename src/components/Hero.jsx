import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    const triggerSheen = (e, dir) => {
        const el = e.currentTarget;
        // remove any sheen classes then re-add the requested one to retrigger
        el.classList.remove('sheen-animate--ltr', 'sheen-animate--rtl');
        void el.offsetWidth; // force reflow
        const cls = dir === 'rtl' ? 'sheen-animate--rtl' : 'sheen-animate--ltr';
        el.classList.add(cls);
        // cleanup after animation finishes so it can be replayed
        setTimeout(() => el.classList.remove(cls), 1000);
    };
    return (
        <section id="hero" className="container">
            <div className="hero-grid">
                <div>
                    <motion.h1
                        className="animate-gradient no-wrap"
                        initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            fontSize: 'clamp(38px, 8vw, 72px)',
                            lineHeight: 1.1,
                            marginBottom: '1rem',
                            fontWeight: 800,
                            paddingBottom: '0.2em'
                        }}
                    >
                        JANISH JOB P
                    </motion.h1>
                    <motion.h1
                        className="animate-gradient"
                        initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(32px, 8vw, 64px)',
                            lineHeight: 1.1,
                            marginBottom: '2rem',
                            fontWeight: 700,
                            opacity: 0.9
                        }}
                    >
                        Full Stack Developer
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        style={{
                            marginBottom: '3.5rem',
                            maxWidth: '650px',
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            margin: '0 auto 3.5rem'
                        }}
                    >
                        Motivated IT undergraduate with hands-on experience in full-stack web development,
                        problem-solving, and software engineering projects. Experienced in building innovative
                        projects and eager to contribute technical expertise to real-world solutions.
                    </motion.p>

                    <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <motion.a
                            href="#work"
                            className="btn-primary"
                            initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.9 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={(e) => triggerSheen(e, 'ltr')}
                                onMouseLeave={(e) => triggerSheen(e, 'rtl')}
                                style={{ padding: '0.85rem 2rem' }}
                        >
                            See My Projects <ArrowRight size={18} />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="btn-primary"
                            initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.9 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseEnter={(e) => triggerSheen(e, 'ltr')}
                            onMouseLeave={(e) => triggerSheen(e, 'rtl')}
                            style={{ padding: '0.85rem 2rem' }}
                        >
                            Get In Touch <Mail size={18} />
                        </motion.a>
                    </div>
                </div>

                <motion.div
                    className="profile-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid var(--accent)',
                        boxShadow: '0 0 30px var(--accent-glow)',
                        position: 'relative'
                    }}>
                        <img
                            src="/images/profile.jpeg"
                            alt="JANISH JOB P"
                            className="profile-img-primary"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.5s ease',
                                opacity: 1,
                                zIndex: 2
                            }}
                        />
                        <img
                            src="/images/profile-hover.jpg"
                            alt="JANISH JOB P Hover"
                            className="profile-img-secondary"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center center',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 0.5s ease',
                                opacity: 0,
                                zIndex: 2
                            }}
                        />

                        <style>{`
                            .profile-container:hover .profile-img-primary {
                                opacity: 0 !important;
                            }
                            .profile-container:hover .profile-img-secondary {
                                opacity: 1 !important;
                            }
                        `}</style>

                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'radial-gradient(circle, transparent 60%, var(--bg-primary) 100%)',
                            pointerEvents: 'none',
                            opacity: 0.4,
                            zIndex: 3
                        }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
