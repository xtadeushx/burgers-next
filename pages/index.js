import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import fatBurger from '/public/fatburger.png';

export default function Home() {
    return (
        <>
            <Head>
                <title>Жирні бургери | Про нас</title>
                <meta
                    name='title'
                    content='Все про жирні бургери'
                />
            </Head>
            <div className={styles.container}>
                <h1 className={`${styles.title} font-effect-fire-animation`}>
                    Головна сторінка
                </h1>
                <div className={styles.mainImage}>
                    <Image
                        src={fatBurger}
                        alt='fatBurger'
                        width={400}
                        height={300}
                    />
                </div>
                <p className={styles.text}>
                    Що таке ідеальний бургер? Лист свіжого салату, м'які
                    булочки, соковите м'ясо. Про інші складові начинки можна
                    посперечатися, адже це справа смаку.
                </p>
                <p className={styles.text}>
                    Є ще пара-трійка факторів, що впливають на апетит: ціни,
                    якість обслуговування; правильна атмосфера закладу.
                </p>
                <Link
                    href='/burgers'
                    className={styles.btn}
                >
                    Усі бургери
                </Link>
            </div>
        </>
    );
}
