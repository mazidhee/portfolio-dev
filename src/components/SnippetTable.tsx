import Link from "next/link";
import { MoveRight } from "lucide-react";
import { getSnippetMetaData } from "@/lib/mdx";

function SnippetTable() {
    const postMetaData = getSnippetMetaData();

    return (
        <div className="p-6 md:p-10 mt-20">
            <h2 className="tracking-tighter text-4xl md:text-6xl font-medium text-heading-text-color">Evergreen Notes<sup className="text-theme-lime text-2xl">({postMetaData.length})</sup></h2>

            <div className="hidden md:grid mt-10 border-b-1 border-b-section-label md:grid-cols-12 gap-4">
                <div className="col-span-2 font-mono uppercase tracking-tighter text-section-label">/Date</div>

                <div className="col-span-10 font-mono uppercase tracking-tighter text-section-label">
                    /Title
                </div>

            </div>

            <div className="mt-2 ">
                {postMetaData.map((post) => (
                    <Link href={`/notes/${post.slug}`} key={post.slug}>
                        <div className="group grid md:grid-cols-12 gap-1 md:gap-4 border-b-1 border-b-section-label align-middle py-2 items-center hover:bg-theme-lime transition-colors">
                            <p className="group-hover:text-background col-span-2 text-theme-dark-pink font-mono uppercase text-xs">{post.date}</p>

                            <h2 className="group-hover:text-background col-span-10 font-heading text-2xl tracking-tighter text-heading-text-color ">

                                {post.title}

                            </h2>
                        </div>
                    </Link>


                ))}
            </div>
        </div >
    );
}

export default SnippetTable;