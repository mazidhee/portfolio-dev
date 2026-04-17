import React from 'react'

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`border border-dashed border-section-label  p-4 ${className}`}>{children}</div>
    )
}

export default Card