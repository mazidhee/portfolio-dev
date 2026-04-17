import React from 'react'
import BookRef from '@/components/ui/BookRef'

const readings = [
    {
        "title": "Designing Data-Intensive Applications",
        "author": "Martin Kleppmann",
        "link": ""
    },
    {
        "title": "The Art of PostgreSQL",
        "author": "Dimitri Fontaine",
        "link": ""
    },
    {
        "title": "Database Internals: A Deep Dive",
        "author": "Alex Petrov",
        "link": ""
    },
    {
        "title": "Streaming Systems",
        "author": "Tyler Akidau, Slava Chernyak, Reuven Lax",
        "link": ""
    },
    {
        "title": "Python for Data Analysis (3rd ed.)",
        "author": "Wes McKinney",
        "link": ""
    },
    {
        "title": "Advances in Financial Machine Learning",
        "author": "Marcos López de Prado",
        "link": ""
    },
    {
        "title": "Quantitative Finance with Python",
        "author": "Chris Kelliher",
        "link": ""
    },
    {
        "title": "The Data Warehouse Toolkit (3rd ed.)",
        "author": "Ralph Kimball & Margy Ross",
        "link": ""
    },
    {
        "title": "Site Reliability Engineering",
        "author": "Niall Richard Murphy et al. (Google)",
        "link": ""
    },
    {
        "title": "Clean Architecture",
        "author": "Robert C. Martin",
        "link": ""
    },
]

function page() {
    return (
        <div className="px-8 md:px-16 py-16 mt-20">
            <div className="w-full">
                <h2 className="font-heading font-normal text-5xl tracking-tight mb-4 text-heading-text-color">Bookshelf</h2>
                <p className="font-body text-lg text-body-text-color">Books and resources that have shaped how I think about data systems, distributed infrastructure, and quantitative workflows. This list grows over time.
                </p>
<div>
    {readings.map((ref, index) => (
        <BookRef key={index} title={ref.title} author={ref.author} link={ref.link} />
    ))}

</div>
            </div>
        </div>
    )
}

export default page