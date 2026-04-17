// Remove 'use client' - this should be a Server Component
import { compileMDX } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

interface BlogPostProps {
  content: string;
}

async function BlogPost({ content }: BlogPostProps) {
  const components = useMDXComponents({})

  const { content: mdxContent } = await compileMDX({
    source: content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
        ],
      },
    },
  })

  return (
    <div className="blog-post prose prose-lg max-w-none">
      {mdxContent}
    </div>
  );
}

export default BlogPost;