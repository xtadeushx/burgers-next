import Head from 'next/head';

const Reviews = ({ reviews }) => {
    console.log(reviews);
    return (
        <>
            <Head>
                <title>Жирні бургери | Про нас</title>
                <meta
                    name='title'
                    content='Все про жирні бургери'
                />
            </Head>
            <div>
                <h1>Відгуки клієнтів</h1>
                <div className='reviews'>
                    {!!reviews.length &&
                        reviews.map((review) => {
                            return (
                                <div key={review.id}>
                                    {review.id} .
                                    {`${review.body.slice(0, 90)}...`}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
    );
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, 20),
        },
    };
}

export default Reviews;
