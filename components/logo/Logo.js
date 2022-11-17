import React from 'react';
import Link from 'next/link';

import styling from './Logo.module.scss';


const Logo = () => (
    <Link href='/'>
        <div className={styling.logo}>my<b> | BLOG</b></div>
    </Link>
);

export default Logo;