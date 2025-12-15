import Layout from '@/components/Layout';

const experiences = [
    {
        title: 'Full Stack Developer (REMOTE)',
        company: 'READYTO TEK',
        period: 'Apr 2025 - Nov 2025',
        description: [
            'Designing and developing backend services following a microservices architecture using Spring Boot.',
            'Developing and maintaining RESTful APIs with a focus on clean architecture and performance.',
            'Implementing authentication and authorization using Spring Security and JWT to secure endpoints and manage access.',
            'Integrating external payment services to enable secure online transactions and automated billing processes.',
            'Creating and deploying Azure Function Apps to create scalable backend services in production.',
            'Developing frontend interfaces using React, ensuring efficient communication with APIs.',
        ],
    },
    {
        title: 'Full Stack Developer (Freelance)',
        company: 'Italian Dream',
        period: 'Sep 2024 - Nov 2024',
        description: [
            'Built a website for an agency, improving user interaction and promoting the agency’s services effectively.',
            'Created a client portal for document and payment tracking, enhancing operational efficiency for users.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Telnet Holding',
        period: 'Feb 2024 - Aug 2024',
        description: [
            'Developed a real-time web app for system visualization and remote control, improving system management.',
            'Improved disease detection with live streaming from an embedded camera for real-time crop management insights.',
            'Built an embedded system to provide 24/7 real-time data, enhancing accuracy and plant care efficiency.',
            'Improved firmware updates using OTA technology, reducing downtime by 60% for efficient remote operations.',
        ],
    },
    {
        title: 'Software Engineer Intern',
        company: 'Badiaa',
        period: 'Jul 2023 - Sep 2023',
        description: [
            'Created an order placement feature, simplifying purchasing and improving user experience.',
            'Built a desktop application for inventory management, improving stock tracking and simplifying operations.',
        ],
    },
    {
        title: 'Full Stack Developer Intern',
        company: 'Sagemcom',
        period: 'Feb 2021 - Jun 2021',
        description: [
            'Developed a shipment management web application, integrating SAP ME with SOAP microservices to enhance logistics processes and data synchronization.',
            'Integrated user authentication with Active Directory, enhancing security and simplifying access management.',
        ],
    },
];

const Experience = () => {
    return (
        <Layout>
            <div className="min-h-screen py-24 px-8 flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-primary text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}> Experience </h2>

                        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 md:pl-12">
                                    {/* Timeline Dot */}
                                    <span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full border-4 border-background bg-primary shadow-sm ring-4 ring-primary/20"></span>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {exp.title}
                                        </h3>
                                        <span className="text-sm text-primary/80 font-medium whitespace-nowrap mt-1 sm:mt-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="mb-4 text-primary font-semibold tracking-wide text-sm uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {exp.company}
                                    </div>

                                    <ul className="list-disc ml-4 space-y-2 text-foreground/80 leading-relaxed">
                                        {exp.description.map((item, i) => (
                                            <li key={i} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Experience;
