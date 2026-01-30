import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const triggerSheen = (e, dir) => {
        const el = e.currentTarget;
        el.classList.remove('sheen-animate--ltr', 'sheen-animate--rtl');
        void el.offsetWidth;
        const cls = dir === 'rtl' ? 'sheen-animate--rtl' : 'sheen-animate--ltr';
        el.classList.add(cls);
        setTimeout(() => el.classList.remove(cls), 1000);
    };

    const handleCopyEmail = (e) => {
        // Copy to clipboard
        navigator.clipboard.writeText('janishjob90@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // We allow the default mailto behavior to proceed (no e.preventDefault()),
        // so it attempts to open the mail client AND copies the email.
    };

    return (
        <section id="contact" className="container" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.h3
                    style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '1.5rem', textAlign: 'center', display: 'block' }}
                    initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    Get In Touch
                </motion.h3>
                <motion.p
                    style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3.5rem' }}
                    initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    I am currently seeking opportunities to contribute to modern web development projects.
                    Feel free to reach out for collaborations or just a friendly tech chat!
                </motion.p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

                    <motion.div
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}
                    >
                        <motion.a
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 100 }}
                            href="mailto:janishjob90@gmail.com?subject=Hello%20Janish!&body=Hi%20Janish,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0D%0A%0D%0ABest%20regards,"
                            onClick={handleCopyEmail}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none', cursor: 'pointer' }}
                            className="nav-link"
                        >
                            <Mail size={20} style={{ color: 'var(--accent)' }} />
                            <span>janishjob90@gmail.com</span>
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.1 }}
                            href="tel:+918525830540"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', textDecoration: 'none' }}
                            className="nav-link"
                        >
                            <Phone size={20} style={{ color: 'var(--accent)' }} />
                            <span>+91 8525830540</span>
                        </motion.a>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
                        href="mailto:janishjob90@gmail.com?subject=Hello%20Janish!&body=Hi%20Janish,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0D%0A%0D%0ABest%20regards,"
                        onClick={handleCopyEmail}
                        className="btn-primary"
                        style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}
                        onMouseEnter={(e) => triggerSheen(e, 'ltr')}
                        onMouseLeave={(e) => triggerSheen(e, 'rtl')}
                    >
                        Say Hello
                    </motion.a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
