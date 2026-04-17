import React from 'react'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const projects = [
    {
        id: "ivy-payment-gateway",
        title: "Ivy Payment Gateway",
        year: "2025",
        status: "In Production",
        description: "A B2B payment system built around an ACID-compliant double-entry ledger. Handles the full transaction lifecycle — from initiation through orchestration, reconciliation, and settlement. Every mutation is idempotent, every balance change is auditable, and every failure is recoverable.",
        stack: "FastAPI · Celery · Redis · PostgreSQL · Docker",
        highlights: [
            "Double-entry bookkeeping with strict ACID guarantees",
            "Idempotent transaction processing with deduplication",
            "Async task orchestration via Celery with Redis broker",
            "Reconciliation engine for multi-provider settlement",
        ],
    },
    {
        id: "time-machine",
        title: "Time Machine — Market Data Backtester",
        year: "2025",
        status: "Active",
        description: "A tick-level ETL pipeline that ingests, cleanses, and normalizes raw OHLCV market data from multiple exchange APIs into a structured PostgreSQL store. Includes a replay engine that streams historical data chronologically to simulate real-time market conditions for strategy validation.",
        stack: "Python · Pandas · PostgreSQL",
        highlights: [
            "Multi-exchange data ingestion with normalisation layer",
            "Tick-level granularity with chronological replay",
            "Strategy validation against historical market conditions",
            "Structured PostgreSQL storage optimised for time-series queries",
        ],
    },
    {
        id: "fraud-detection-api",
        title: "Fraud Detection API",
        year: "2024",
        status: "Deployed",
        description: "A containerized ML API for real-time credit card fraud detection, achieving ~85% precision. Handles batch prediction endpoints with strict Pydantic validation for high-volume transaction processing.",
        stack: "Python · Scikit-learn · FastAPI · Docker",
        highlights: [
            "Real-time inference with ~85% precision on fraud classification",
            "Batch prediction endpoints for high-volume processing",
            "Strict Pydantic validation for transaction payloads",
            "Containerized deployment for consistent environments",
        ],
    },
]

function ProjectsPage() {
    return (
        <div className='mt-20'>
            {/* Hero with philosophical header */}
            <div className='p-6 md:p-10'>
                <div className='md:w-[70%]'>
                    <p className='font-mono text-terminal-highlight uppercase tracking-tighter text-sm mb-4'>/Projects</p>
                    <h1 className='font-heading text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-heading-text-color leading-none'>&ldquo;A little knowledge that acts is worth infinitely more than much knowledge that is idle.&rdquo;</h1>
                    <p className='font-mono text-section-label text-sm mt-4'>— Khalil Gibran</p>
                    <p className='font-body text-base md:text-xl mt-8 text-body-text-color'>Systems I have built — payment infrastructure, data pipelines, community platforms, and tooling for quantitative workflows. Each one grounded in a real operational problem.</p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className='p-6 md:p-10'>
                <div className='grid md:grid-cols-6 gap-6 md:gap-10'>
                    <div className='col-span-1 md:col-span-2'>
                        <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Overview</h3>
                        <div className='mt-6'>
                            <p className='font-body text-body-text-color text-lg tracking-tight'>Each project reflects a real engineering challenge. The focus is always on correctness, observability, and operational resilience.</p>
                            {/* <div className='mt-8'>
                                <h4 className='font-mono text-terminal-highlight uppercase tracking-tighter text-sm mb-2'>Core Technologies</h4>
                                <p className='font-mono text-body-text-color text-sm'>Python · FastAPI · PostgreSQL · SQL · Redis · Celery · Docker</p>
                            </div> */}
                        </div>
                    </div>

                    <div className='md:col-span-4'>
                        <h3 className='font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label'>/Projects</h3>

                        {projects.map((project) => (
                            <div key={project.id} id={project.id} className='border-b border-section-label py-8'>
                                <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                                    <h2 className='font-heading font-medium text-2xl md:text-3xl tracking-tighter text-heading-text-color'>{project.title}</h2>
                                    <div className='flex items-center gap-3 mt-1 md:mt-0'>
                                        <span className='font-mono text-xs uppercase text-terminal-highlight'>{project.status}</span>
                                        <span className='font-mono text-xs uppercase text-section-label'>{project.year}</span>
                                    </div>
                                </div>
                                <p className='text-section-label font-mono uppercase text-xs mb-4'>{project.stack}</p>
                                <p className='font-body text-body-text-color text-base md:text-lg tracking-tight'>{project.description}</p>

                                <div className='mt-6'>
                                    <ul className='space-y-2 pl-4'>
                                        {project.highlights.map((highlight, index) => (
                                            <li key={index} className='font-body text-body-text-color text-sm md:text-base list-disc'>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
