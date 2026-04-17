import SnippetTable from "@/components/SnippetTable";
import Link from "next/link";

const substackArticles = [
    {
        title: "Designing ACID-Compliant Ledgers for Payment Systems",
        date: "2025",
        url: "#substack",
        description: "How to build a double-entry ledger that survives concurrent writes, network partitions, and human error.",
    },
    {
        title: "ETL Pipelines That Actually Work in Production",
        date: "2025",
        url: "#substack",
        description: "Lessons from building data pipelines that don't silently lose records at 3am on a Saturday.",
    },
    {
        title: "Market Microstructure for Engineers",
        date: "2024",
        url: "#substack",
        description: "An engineer's guide to order books, matching engines, and the data infrastructure behind exchanges.",
    },
]


export default function NotesPage() {
    return (


        <div className="">
            {/* Hero */}
            <div className='p-6 md:p-10 mt-20'>
                <div className='md:w-[70%]'>
                    <h1 className='font-heading text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-heading-text-color leading-none'>Evergreen Notes</h1>
                    <p className='font-body text-base md:text-xl mt-6 text-body-text-color'>Published from my Obsidian knowledge base. Notes on distributed systems, data engineering patterns, computational economics, and things I&apos;m learning in the open. These are living documents — they evolve as my understanding does.</p>
                </div>
            </div>

            {/* Substack Articles */}
            <div className="p-6 md:p-10">
                <h2 className="tracking-tighter text-4xl md:text-5xl font-medium text-heading-text-color">Technical Articles<sup className="text-theme-lime text-2xl">({substackArticles.length})</sup></h2>
                <p className="font-body text-body-text-color text-base md:text-lg mt-4 mb-10">Longer-form writing published on Substack. Deep dives into engineering problems worth a proper treatment.</p>
                <div className="grid md:grid-cols-6 gap-6 md:gap-10">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className=" font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Source</h3>
                        <div className="mt-4">
                            <Link href="#substack" className="font-mono text-terminal-highlight hover:text-theme-lime transition-colors text-sm uppercase tracking-tighter">
                                → Substack
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <h3 className="font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/Articles</h3>
                        {substackArticles.map((article, index) => (
                            <Link href={article.url} key={index} target="_blank" rel="noopener noreferrer">
                                <div className="group border-b border-section-label py-6 hover:bg-theme-lime/5 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h2 className="font-heading font-medium text-xl md:text-2xl tracking-tighter text-heading-text-color group-hover:text-theme-lime transition-colors">{article.title}</h2>
                                        <span className="font-mono text-xs uppercase text-section-label mt-1 md:mt-0 whitespace-nowrap">{article.date}</span>
                                    </div>
                                    <p className="font-body text-body-text-color text-sm md:text-base tracking-tight">{article.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Obsidian Notes */}
            <SnippetTable />

        </div>



    );
}
