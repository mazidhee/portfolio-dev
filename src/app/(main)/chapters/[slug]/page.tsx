import { redirect } from 'next/navigation'

// Chapters route is no longer active — redirect to projects
export default function ChapterPage() {
    redirect('/projects')
}