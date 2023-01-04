import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';

const API_URL = process.env.API_HOST;

export async function getStaticPaths() {
    const URL = API_URL;
    const resp = await fetch(URL);
    const data = await resp.json();

    const paths = data.map((burger) => {
        return {
            params: { id: burger.id },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            props: { burger: data },
        };
    } catch {
        return {
            props: { burger: null },
        };
    }
};

const Details = ({ burger }) => {
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}>
                <Image
                    src={`${burger.image}`}
                    alt={`${burger.name}`}
                    width={200}
                    height={200}
                    layout='responsive'
                    objectFit='fill'
                />
            </div>
            <div>
                <p>{burger.desc}</p>
            </div>
        </div>
    );
};

export default Details;
