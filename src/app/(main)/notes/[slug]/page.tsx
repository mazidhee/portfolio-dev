import fs from "fs";
import path from "path";
import BlogPost from "@/components/BlogPost";
import matter from "gray-matter";
import { getSnippetMetaData } from "@/lib/mdx";

const getPostContent = (slug: string) => {
    const folder = path.join(process.cwd(), "src/content/notes/");
    const file = path.join(folder, `${slug}.mdx`);
    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const snippets = getSnippetMetaData();
    return snippets.map((snippet) => ({ slug: snippet.slug }));
};

interface SinglePostProps {
    params: Promise<{
        slug: string;
    }>;
}


const singlePost = async (props: SinglePostProps) => {
    const { slug } = await props.params;
    const postContent = getPostContent(slug);

    return (
        <>
            <div className="mt-20 p-6 md:p-10 text-center">
                <p className="font-mono uppercase text-sm text-center mb-4 text-terminal-highlight"><i>Published in </i><b>{postContent.data.category}</b> <i>on</i> <b>{postContent.data.date}</b></p>
                <h1 className="h1 text-center font-heading text-heading-text-color tracking-tighter text-9xl">{postContent.data.title}</h1>
                <p className="text-center mt-20 text-sm font-mono text-heading-text-color">{postContent.data.subheading}</p>

            </div>
            <div className="p-6 md:p-10 mt-4">
                <h3 className="font-mono text-base uppercase tracking-tighter border-b-1 border-b-section-label text-section-label">/ Note</h3>
                <div className="mt-4 lg:w-[80%]">
                    <BlogPost content={postContent.content} />
                </div>
            </div>

        </>
    );
};

export default singlePost;