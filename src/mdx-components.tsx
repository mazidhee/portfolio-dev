import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

// You can import custom components here
import CodeBlock from '@/components/ui/CodeBlock'
import Callout from '@/components/ui/Callout'
import BlogImage from './components/ui/BlogImage'
import BookRef from './components/ui/BookRef'
import SideNote from './components/ui/SideNote'
import PostRef from './components/ui/PostRef'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom headings with consistent styling
    h1: ({ children, ...props }) => (
      <h1 {...props} className="text-6xl font-heading font-bold mb-6 mt-8 text-foreground border-b pb-2">
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 {...props} className=" font-heading font-medium relative px-4 text-5xl tracking-tighter text-terminal-highlight mb-4 mt-8 before:content-['#'] before:font-normal before:absolute before:-left-4 before:hidden hover:before:block before:transition-all">
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 {...props} className="font-heading text-3xl px-4 font-medium tracking-tighter mb-3 mt-6  text-heading-text-color dark:text-theme-pink">
        {children}
      </h3>
    ),

    // Custom paragraph styling
    p: ({ children }) => (
      <p className="font-body mb-4 px-4 leading-relaxed text-body-text-color text-lg">
        {children}
      </p>
    ),

    // Custom code styling
    code: ({ children, className }) => {
      // If it has a className, it's a code block, otherwise inline code
      if (className?.includes('language-')) {
        return <CodeBlock className={className}>{children}</CodeBlock>
      }
      return (
        <code className="bg-background px-2 py-1 rounded font-mono font-normal border-[0.5px] border-zinc-300 dark:border-zinc-800 text-sm">
          {children}
        </code>
      )
    },

    // Pre tag for code blocks
    pre: ({ children }) => (
      <pre className="bg-background border border-zinc-300 dark:border-zinc-700 text-white rounded-lg overflow-x-auto mb-4 px-4 text-lg">
        {children}
      </pre>
    ),

    // Custom blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange pl-6 my-6 italic text-lg bg-yellow/10 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: ({ }) => (
      <hr className="my-8 border-t border-section-label" />
    ),

    // Custom list styling
    ul: ({ children }) => (
      <ul className="list-disc mb-4 space-y-2 ml-4 ">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="text-foreground leading-relaxed ">
        {children}
      </li>
    ),

    // Custom link styling
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-theme-lime underline transition-colors break-all"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    // Link: ({ href, children }) => (
    //   <Link
    //     href={href}
    //     className="text-orange hover:text-pink underline transition-colors"
    //     target={href?.startsWith('http') ? '_blank' : undefined}
    //     rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    //   >
    //     {children}
    //   </Link>
    // ),

    // Custom image with Next.js Image component
    img: ({ src, alt }) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    ),

    // Custom table styling
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="table-auto min-w-full border-collapse border border-section-label">
          {children}
        </table>
      </div>
    ),

    th: ({ children }) => (
      <th className="border border-section-label bg-[#0A2534] px-4 py-2 text-left font-mono uppercase text-terminal-highlight">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="border border-section-label px-4 py-2 text-body-text-color">
        {children}
      </td>
    ),

    // Custom components you can use in MDX
    Callout,
    CodeBlock,
    BlogImage,
    BookRef,
    SideNote,
    PostRef,

    // You can add more custom components here
    ...components,
  }
}