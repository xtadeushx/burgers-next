import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';
import Link from 'next/link';

const API_URL = process.env.API_HOST;

export async function getStaticProps() {
    const URL = `${API_URL}`;
    try {
        const resp = await fetch(URL);
        const data = await resp.json();
        if (!data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                burgers: data,
            },
        };
    } catch {
        return {
            props: {
                burgers: null,
            },
        };
    }
}

const Burgers = ({ burgers }) => {
    return (
        <div>
            <h1>Our burgers</h1>
            {burgers?.map((burger) => (
                <Link
                    href={`/burgers/${burger.id}`}
                    key={burger.id}
                    className={styles.burgerCard}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={`${burger.image}`}
                            alt={`${burger.name}`}
                            width={400}
                            height={300}
                            layout='responsive'
                            objectFit='cover'
                        />
                    </div>
                    <div>
                        <h3>{burger.name}</h3>
                        <p>{burger.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};
export default Burgers;
