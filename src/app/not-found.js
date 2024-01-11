import { URLS } from '@/routes/URLS'
import Link from 'next/link'
import React from 'react'

const NoMatch = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Could not find requested resource</p>
            <br />
            <Link href={URLS.Home}>Home</Link>
        </div>
    )
}

export default NoMatch