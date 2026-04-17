import Link from "next/link";
import { MoveRight } from 'lucide-react'

const featuredProjects = [
    {
        slug: "ivy-payment-gateway",
        title: "Ivy Payment Gateway",
        date: "2025",
        excerpt: "A B2B payment system built with an ACID-compliant ledger engine. Handles transaction orchestration, reconciliation, and settlement flows using FastAPI, Celery, and Redis. Designed for reliability at scale with idempotent operations and double-entry bookkeeping.",
        stack: "FastAPI · Celery · Redis · PostgreSQL",
    },
    {
        slug: "vantage",
        title: "Vantage",
        date: "2024",
        excerpt: "A university-level community platform focused on data science, quantitative finance, and trading. Built to connect students with shared interests in computational economics, market microstructure, and applied machine learning.",
        stack: "Python · Next.js · PostgreSQL",
    },
    {
        slug: "data-pipeline-framework",
        title: "Pipeline Orchestration Framework",
        date: "2024",
        excerpt: "An internal framework for building and scheduling ETL pipelines with dependency resolution, retry logic, and observability. Designed for teams managing complex data workflows across multiple sources and sinks.",
        stack: "Python · FastAPI · PostgreSQL · Redis",
    },
]

function PostList() {
    const length = featuredProjects.length;

    return (
        <div className="p-6 md:p-10">
            <h2 className="tracking-tighter text-4xl md:text-6xl font-medium text-heading-text-color">Featured Projects<sup className="text-theme-lime text-2xl">({length})</sup></h2>
            <div className="grid md:grid-cols-6 gap-10 mt-20">
                <div className="col-span-1 md:col-span-2">
                    <h3 className=" font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Stack</h3>
                </div>

                <div className="md:col-span-4">
                    <h3 className="font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Projects</h3>

                    {featuredProjects.map((post) => (
                        <div key={post.slug} className=" border-b border-section-label py-6 gap-12">
                            <div className="md:col-span-4">
                                <h2 className="font-heading font-medium text-3xl tracking-tighter mb-4 text-heading-text-color ">
                                    <Link href={`/projects#${post.slug}`} className="post-card-title">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className=" text-section-label font-mono uppercase text-xs">{post.stack}</p>
                            </div>
                            <div className="md:col-span-6">
                                <p className="font-body text-body-text-color mt-6 text-lg tracking-tight">{post.excerpt}</p>
                            </div>
                            <div className="md:col-span-2 flex md:justify-center items-center">
                                <Link href={`/projects#${post.slug}`} className="font-bold">
                                    <MoveRight strokeWidth={1} size={24} className="inline-block" />
                                </Link>
                            </div>

                            {/* <p className="post-date">{post.date}</p> */}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default PostList;