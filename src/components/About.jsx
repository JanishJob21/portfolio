import { motion } from 'framer-motion';
import { Award, BookOpen, Code2, Sparkles } from 'lucide-react';

const About = () => {
    const skills = [
        { category: 'Programming', items: ['Java', 'Python'] },
        { category: 'Frontend', items: ['React.js', 'HTML', 'CSS', 'UI Design'] },
        { category: 'Backend', items: ['Node.js', 'Express.js'] },
        { category: 'Data & Databases', items: ['MongoDB', 'MySQL'] },
        { category: 'Tools', items: ['Git', 'GitHub'] }
    ];

    return (
        <section id="about" className="container">
            <div style={{ position: 'relative' }}>
                <motion.h2
                    initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    Expertise & Background
                </motion.h2>

                <div className="about-grid">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.7 }}
                            style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}
                        >
                            I am a motivated <strong style={{ color: 'var(--accent)' }}>Information Technology</strong> undergraduate at Kongu Engineering College.
                            My focus lies in building innovative full-stack solutions and solving complex engineering problems.
                        </motion.p>

                        <div style={{ marginBottom: '2.5rem' }}>
                            <motion.div
                                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}
                                initial={{ opacity: 0, filter: 'blur(4px)', x: -25 }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <Sparkles size={20} style={{ color: 'var(--accent)' }} />
                                <h4 style={{ fontSize: '1.1rem' }}>Interests & Goals</h4>
                            </motion.div>
                            <div style={{ paddingLeft: '1.75rem', borderLeft: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Innovation & Scaling</h5>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                        Focused on building scalable web applications and exploring modern architectural patterns.
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h5 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Playing Games</h5>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                        Enjoying the challenge and strategy involved in various video games.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <div className="inner-grid">
                            <motion.div
                                className="glass"
                                style={{ padding: '1.5rem' }}
                                initial={{ opacity: 0, filter: 'blur(5px)', scale: 0.9 }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <Award size={22} style={{ color: 'var(--accent)', marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Achievements</h4>
                                <ul style={{ fontSize: '0.85rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                                    <li>I have particapted in Hackatohns in collenge level</li>
                                </ul>
                            </motion.div>
                            <motion.div
                                className="glass"
                                style={{ padding: '1.5rem' }}
                                initial={{ opacity: 0, filter: 'blur(6px)', scale: 0.9 }}
                                whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                            >
                                <BookOpen size={22} style={{ color: 'var(--accent)', marginBottom: '0.5rem' }} />
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Certifications</h4>
                                <ul style={{ fontSize: '0.85rem', opacity: 0.8, listStyle: 'none', padding: 0 }}>
                                    <li>Java and C Provided by IDM Tech Park Erode</li>
                                    <li>Full Stack Provided by IDM Tech Park Erode</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="glass"
                        style={{ padding: '2rem' }}
                        initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                            <Code2 size={26} style={{ color: 'var(--accent)' }} />
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Technical Stack</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {skills.map((group) => (
                                <motion.div
                                    key={group.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h4 style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '0.75rem',
                                        fontWeight: 500,
                                        opacity: 0.9
                                    }}>
                                        {group.category}
                                    </h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                        {group.items.map(item => (
                                            <motion.span
                                                key={item}
                                                className="skill-tag"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default About;
