import React from 'react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const experience = [
    {
        role: "Securities Analyst, Sales & Trading Division",
        company: "The Investment Society, University of Lagos",
        period: "11/2025 – Present",
        points: [
            "Conducting commodity market research across gold, silver, FX, and the NGX, analyzing macroeconomic and geopolitical drivers of price movements.",
            "Building the analytical case for asset class positions and stress-testing assumptions against historical market data.",
        ],
    },
    {
        role: "Data Science Intern",
        company: "Charvet Group",
        period: "09/2025 – 11/2025",
        points: [
            "Engineered a platform with Role-Based Access Control to secure sensitive time-series sales data between Admins and Superadmins.",
            "Built a bulk data ingestion pipeline using SQLAlchemy to parse and validate Excel-based sales records into PostgreSQL, automating 80% of manual reporting.",
        ],
    },
]

const leadership = [
    {
        role: "Co-Founder",
        company: "Vantage",
        period: "2024 – Present",
        points: [
            "Co-founded a university-level community around data science, quantitative finance, and algorithmic trading.",
            "Building a platform that connects students with shared interests in computational economics, market microstructure, and applied ML.",
        ],
    },
    {
        role: "Co-Founder & Research Lead",
        company: "Economics Research Collective, University of Lagos",
        period: "07/2025 – 11/2025",
        points: [
            "Led a team of 3 in researching and publishing economics analysis on Substack, covering Nigerian monetary policy and financial markets.",
            "Produced 9 long-form articles analyzing both the global and regional economy, reaching 25+ subscribers worldwide.",
        ],
    },
    {
        role: "Member & Student Volunteer",
        company: "Notion Community",
        period: "04/2025 – Present",
        points: [
            "Co-organized \"Make with Notion\" workshop attracting 85+ attendees, increasing student engagement by 10%.",
            "Collaborated with local ambassadors on inaugural program launch and community-building initiatives.",
        ],
    },
]

const education = [
    {
        degree: "Bachelor of Science in Economics (In Progress)",
        institution: "University of Lagos, Nigeria",
        period: "09/2023 – 07/2027",
        detail: "",
        coursework: "Econometrics, Mathematical Statistics, Linear Algebra, Financial Risk Management, Derivatives, Optimization Methods",
    },
    {
        degree: "Software Engineering Diploma",
        institution: "AltSchool Africa (ASIC Accredited)",
        period: "03/2025 – 03/2026",
        detail: "Best Learner Award",
        coursework: "Python, PostgreSQL, FastAPI, Docker, Git, RESTful APIs, Database Design, Software Architecture",
    },
]

const awards = [
    {
        title: "Susilo Business+Ethics Global Case Competition Finalist",
        org: "Boston University (2026)",
        description: "Selected as 1 of 6 finalists from 44+ teams across 20 universities and 12 countries to present in-person strategic business solutions to company executives in São Paulo, Brazil.",
    },
    {
        title: "The Bridge Fellowship",
        org: "2025",
        description: "Accepted into a highly selective leadership fellowship program (<5%), recognizing academic excellence and potential in economics and emerging technology.",
    },
    {
        title: "Best Learner Award",
        org: "AltSchool Africa, 2026",
        description: "Awarded for outstanding academic performance across the Software Engineering diploma program.",
    },
    {
        title: "Certified Data Scientist & Data Engineer Associate",
        org: "DataCamp",
        description: "Certified Data Scientist and Data Engineer Associate from DataCamp.",
    },
]

function Home() {
    return (
        <div className='mt-14 md:mt-20'>
            <div className='p-6 md:p-10 text-heading-text-color'>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                    {/* Hero Intro */}
                    <div className='md:col-span-4 flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-6'>
                        <div className='md:w-[65%]'>
                            <h1 className='font-heading text-heading-text-color font-medium text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tighter leading-[0.95]'>Hi, I&apos;m<br />Uzoukwu Divine</h1>
                            <p className='font-body text-lg md:text-2xl mt-4 text-body-text-color leading-relaxed'>Software engineer building data pipelines, distributed systems, and intelligent infrastructure.</p>

                            <p className='text-heading-text-color mt-6 text-base md:text-lg'>I build infrastructure that moves data reliably — pipelines, payment ledgers, ingestion services, and the connective tissue between systems that need to talk to each other without losing anything along the way. My work sits at the intersection of backend engineering, data platform design, and computational economics.
                            </p>

                            <div className='mt-6'>
                                <Link href="mailto:divineuzoukwu3@gmail.com" className='font-mono text-terminal-highlight hover:text-theme-lime transition-colors text-sm uppercase tracking-tighter'>
                                    divineuzoukwu3@gmail.com →
                                </Link>
                            </div>
                        </div>

                        <div className='mb-4 md:mb-0 md:mt-4'>
                            <Image src="/images/my-notion-face-transparent.png" alt="Uzoukwu Divine"
                                width={320}
                                height={320}
                                className='opacity-[0.85] mix-blend-screen drop-shadow-sm w-[260px] md:w-[320px] h-auto'
                                priority
                            />
                        </div>
                    </div>

                    {/* Experience */}
                    <div className='md:col-span-4 mt-10'>
                        <h2 className='tracking-tighter text-4xl md:text-5xl font-medium text-heading-text-color mb-8'>Experience</h2>
                        <div className='grid md:grid-cols-6 gap-4 md:gap-6'>
                            <div className='md:col-span-2'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Work</h3>
                            </div>
                            <div className='md:col-span-4'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Roles</h3>
                                {experience.map((job, i) => (
                                    <div key={i} className='border-b border-section-label py-6'>
                                        <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                            <h3 className='font-heading font-medium text-xl md:text-2xl tracking-tighter text-heading-text-color'>{job.role}</h3>
                                            <span className='font-mono text-xs uppercase text-section-label mt-1 md:mt-0 whitespace-nowrap'>{job.period}</span>
                                        </div>
                                        <p className='font-mono text-terminal-highlight uppercase text-xs mb-3'>{job.company}</p>
                                        <ul className='space-y-2 pl-4'>
                                            {job.points.map((point, j) => (
                                                <li key={j} className='font-body text-body-text-color text-sm md:text-base list-disc'>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Leadership & Community */}
                    <div className='md:col-span-4 mt-6'>
                        <div className='grid md:grid-cols-6 gap-4 md:gap-6'>
                            <div className='md:col-span-2'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Leadership</h3>
                            </div>
                            <div className='md:col-span-4'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Community</h3>
                                {leadership.map((role, i) => (
                                    <div key={i} className='border-b border-section-label py-6'>
                                        <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
                                            <h3 className='font-heading font-medium text-xl md:text-2xl tracking-tighter text-heading-text-color'>{role.role}</h3>
                                            <span className='font-mono text-xs uppercase text-section-label mt-1 md:mt-0 whitespace-nowrap'>{role.period}</span>
                                        </div>
                                        <p className='font-mono text-terminal-highlight uppercase text-xs mb-3'>{role.company}</p>
                                        <ul className='space-y-2 pl-4'>
                                            {role.points.map((point, j) => (
                                                <li key={j} className='font-body text-body-text-color text-sm md:text-base list-disc'>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className='md:col-span-4 mt-10'>
                        <h2 className='tracking-tighter text-4xl md:text-5xl font-medium text-heading-text-color mb-8'>Education</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {education.map((edu, i) => (
                                <Card key={i} className='flex flex-col justify-center gap-3 p-6'>
                                    <h3 className='font-heading font-medium text-lg md:text-xl tracking-tighter text-heading-text-color'>{edu.degree}</h3>
                                    <p className='font-mono text-terminal-highlight uppercase text-xs'>{edu.institution}</p>
                                    <p className='font-mono text-section-label text-xs'>{edu.period}</p>
                                    {edu.detail && <p className='font-mono text-theme-lime text-sm font-medium'>{edu.detail}</p>}
                                    <p className='font-body text-body-text-color text-sm mt-2'>Coursework: {edu.coursework}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Awards & Certifications */}
                    <div className='md:col-span-4 mt-10'>
                        <h2 className='tracking-tighter text-4xl md:text-5xl font-medium text-heading-text-color mb-8'>Awards &amp; Certifications</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {awards.map((award, i) => (
                                <Card key={i} className='flex flex-col justify-center gap-3 p-6'>
                                    <h3 className='font-heading font-medium text-lg md:text-xl tracking-tighter text-heading-text-color'>{award.title}</h3>
                                    <p className='font-mono text-terminal-highlight uppercase text-xs'>{award.org}</p>
                                    <p className='font-body text-body-text-color text-sm mt-1'>{award.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Core Stack */}
                    <div className='md:col-span-4 mt-10 md:mt-16'>
                        <h2 className='tracking-tighter text-4xl md:text-5xl font-medium text-heading-text-color mb-8'>Stack</h2>
                        <div className='grid md:grid-cols-6 gap-4 md:gap-6'>
                            <div className='md:col-span-2'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Languages</h3>
                            </div>
                            <div className='md:col-span-4 md:mb-6 border-b border-section-label pb-6'>
                                <div className='flex flex-wrap gap-2'>
                                    {['Python', 'C++', 'SQL', 'JavaScript (React)'].map(item => <span key={item} className='font-mono text-xs uppercase text-terminal-highlight bg-white/5 border border-white/10 px-2 py-1 rounded'>{item}</span>)}
                                </div>
                            </div>
                            
                            <div className='md:col-span-2'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Infrastructure & Tools</h3>
                            </div>
                            <div className='md:col-span-4 md:mb-6 border-b border-section-label pb-6'>
                                <div className='flex flex-wrap gap-2'>
                                    {['Docker', 'Redis', 'Celery', 'PostgreSQL', 'AWS', 'Git/GitHub', 'Linux/Unix'].map(item => <span key={item} className='font-mono text-xs uppercase text-terminal-highlight bg-white/5 border border-white/10 px-2 py-1 rounded'>{item}</span>)}
                                </div>
                            </div>

                            <div className='md:col-span-2'>
                                <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Data & Quantitative</h3>
                            </div>
                            <div className='md:col-span-4 md:mb-6 border-b border-section-label pb-6'>
                                <div className='flex flex-wrap gap-2'>
                                    {['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebooks'].map(item => <span key={item} className='font-mono text-xs uppercase text-terminal-highlight bg-white/5 border border-white/10 px-2 py-1 rounded'>{item}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interests & Currently Combined */}
                    <div className='md:col-span-4 mt-6 md:mt-10'>
                        <Card className='flex flex-col justify-center p-6 gap-4'>
                            <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl'>Interests &amp; Current Focus</h2>
                            <div className='space-y-4'>
                                <p className='text-body-text-color text-sm md:text-base'>
                                    <span className='font-mono text-terminal-highlight uppercase text-xs mr-2 border border-white/10 px-1 rounded'>Currently</span>
                                    Undergraduate student of Economics at the University of Lagos. Recently graduated from AltSchool Africa&apos;s Software Engineering diploma with the Best Learner award. Building production-grade payment infrastructure, writing data pipelines, and conducting commodity market research. I maintain an Obsidian knowledge base and write technical articles on Substack.
                                </p>
                                <p className='text-body-text-color text-sm md:text-base'>
                                    <span className='font-mono text-terminal-highlight uppercase text-xs mr-2 border border-white/10 px-1 rounded'>Interests</span>
                                    Data engineering, computational economics, quantitative finance, distributed systems, algorithmic trading, and financial technology. I think about market microstructure, how exchanges process order flow, and how you build analytics infrastructure that handles tick-level data at volume.
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Hobbies / Human side */}
                    <div className='md:col-span-4 mt-6'>
                        <Card className='flex flex-col md:flex-row gap-6 p-6'>
                            <div className='flex-1'>
                                <h2 className='font-mono text-theme-lime uppercase tracking-tighter text-xl mb-4'>Off the Clock</h2>
                                <p className='text-body-text-color text-sm md:text-base'>When I&apos;m not writing code or reading market data, you&apos;ll find me playing chess, reading literature, or exploring new cities. I believe the best engineers are curious about everything — not just systems. Travel teaches you about different models of coordination. Literature teaches you about people. Chess teaches you about patience and the cost of premature optimization.</p>
                                <p className='text-body-text-color text-sm md:text-base mt-4'>I also speak English and Igbo.</p>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
