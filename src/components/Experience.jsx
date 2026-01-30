import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Experience = () => {
    const education = [
        {
            year: "2023 – 2027",
            degree: "B.Tech in Information Technology",
            org: "KONGU ENGINEERING COLLEGE, PERUNDURAI",
            score: "GPA: 7.19"
        },
        {
            year: "2022 – 2023",
            degree: "Higher Secondary Schooling",
            org: "KONGU NATIONAL SCHOOL, PERUNDURAI",
            score: "Percentage: 73%"
        },
        {
            year: "2021 – 2022",
            degree: "Secondary Schooling",
            org: "SAGAR INTERNATIONAL SCHOOL, PERUNDURAI",
            score: "Percentage: 67.2%"
        }
    ];

    return (
        <section id="experience" className="container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Education Journey
            </motion.h2>

            <div className="timeline-container">
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="timeline-dot" />
                        <div className="timeline-content glass">
                            <span className="timeline-date">{item.year}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
                                <h3 className="timeline-title">{item.degree}</h3>
                            </div>
                            <p className="timeline-org">{item.org}</p>
                            <p style={{ opacity: 0.9, fontSize: '1rem', lineHeight: '1.6', color: 'var(--accent)', fontWeight: '600' }}>{item.score}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
