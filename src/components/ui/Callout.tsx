interface CalloutProps {
    heading?: string,
    text: string,
    type?: 'audience' | 'info' | 'warning' | 'error' | 'success'
}

export default function Callout({ heading, text, type = 'info' }: CalloutProps) {
    const styles = {
        audience: 'bg-theme-lime/10 border-theme-lime',
        disclaimer: 'bg-tag-color/10 border-tag-color',
        definition: 'bg-terminal-highlight/10 border-terminal-highlight',
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        success: 'bg-green-50 border-green-200 text-green-900',
    }
    const headingStyles = {
        audience: 'text-theme-lime',
        disclaimer: 'text-tag-color',
        definition: 'text-terminal-highlight',
        info: 'text-theme-pink',
        warning: 'text-theme-pink',
        error: 'text-theme-pink',
        success: 'text-theme-pink',
    }

    return (
        <div className={`border-l-2 p-8 my-6 ${styles[type]}`}>
            <h4 className={`font-mono tracking-tighter uppercase text-lg mb-2 ${headingStyles[type]}`}>{heading}</h4>
            <p className="text-heading-text-color">{text}</p>
        </div>
    )
}