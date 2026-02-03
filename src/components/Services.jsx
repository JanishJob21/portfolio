import { motion } from 'framer-motion';
import { Layout, Server, Database, Smartphone, Globe, PenTool } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Full Stack Development',
            description: 'Building robust and scalable web applications from front-to-back using the MERN stack.',
            icon: <Globe size={32} />,
            features: ['React.js', 'Node.js', 'Express.js', 'APIs']
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive, user-centric interfaces with a focus on modern aesthetics and responsiveness.',
            icon: <PenTool size={32} />,
            features: ['Glassmorphism', 'Framer Motion', 'Responsive Design']
        },
        {
            title: 'Backend Systems',
            description: 'Designing efficient database schemas and server-side logic for high-performance apps.',
            icon: <Server size={32} />,
            features: ['MongoDB', 'MySQL', 'System Architecture']
        },
        {
            title: 'Frontend Architecture',
            description: 'Building maintainable and modular frontend systems with modern best practices.',
            icon: <Layout size={32} />,
            features: ['Clean Code', 'Modular CSS', 'State Management']
        }
    ];

    return (
        <section id="services" className="container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7 }}
            >
                What&nbsp;&nbsp;I&nbsp;&nbsp;Do
            </motion.h2>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="glass service-card"
                    >
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <div className="service-tags">
                            {service.features.map((feature, idx) => (
                                <span key={idx} className="service-tag">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
