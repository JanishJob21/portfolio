import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Grocery Store Management System',
            duration: 'Dec 2024 - Feb 2025',
            description: 'Developed an online grocery store website with product listings, category filtering, cart management, and billing features using modern web technologies.',
            tech: ['React.js', 'Node.js', 'Express.js', 'Payment Gateway'],
            github: 'https://github.com/nellairehoboth/NRDS-FRONTEND',
            link: 'https://nrdsstore.vercel.app/'
        },
        {
            title: 'Chess Game',
            duration: 'Feb 2024 - Mar 2024',
            description: 'Built a full-featured chess game that supports real-time gameplay, legal move validation, and an intuitive board interface. The project focuses on performance, user experience, and accurate implementation of chess rules.',
            tech: ['React.js', 'Node.js', 'Chess.js', 'Authentication'],
            github: 'https://github.com/JanishJob21/chess.git',
            link: '#'
        },
        {
            title: 'Garden Scheduler',
            duration: 'Mar 2024 - Apr 2024',
            description: 'Built a full-stack garden plot scheduling application with user authentication, plot booking, and schedule management. Integrated a responsive UI.',
            tech: ['React.js', 'Node.js', 'Express.js', 'Plot Logic'],
            github: 'https://github.com/JanishJob21/garden',
            link: '#'
        }
    ];

    return (
        <section id="work" className="container">
            <div style={{ position: 'relative' }}>
                <motion.h2
                    initial={{ opacity: 0, filter: 'blur(5px)', y: 20 }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                >
                    MY&nbsp;&nbsp;Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <Folder size={36} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><Github size={18} /></a>
                                    <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={18} /></a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', opacity: 0.6 }}>
                                <Calendar size={14} style={{ color: 'var(--accent)' }} />
                                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{project.duration}</span>
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                {project.tech.map((t) => (
                                    <span key={t} style={{
                                        fontSize: '0.7rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--accent)',
                                        background: 'rgba(56, 189, 248, 0.05)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
