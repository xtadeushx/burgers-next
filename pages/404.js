import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);
    return (
        <div className='not-found'>
            <h1>Ups...</h1>
            <h2>Такої сторінки тут не має</h2>
            <p>
                Переходжу на <Link href='/'>головної сторінки</Link> за 3
                секунди
            </p>
        </div>
    );
};

export default NotFoundPage;
