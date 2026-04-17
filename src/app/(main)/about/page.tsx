import { redirect } from 'next/navigation'

// About page now lives at the root — redirect for backward compat
export default function AboutPage() {
    redirect('/')
}