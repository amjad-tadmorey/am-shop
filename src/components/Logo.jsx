import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div id='logo' className='fw-bolder'>
            <Link
                href={'./'}
            >
                Logo
            </Link>
        </div>
    )
}

export default Logo