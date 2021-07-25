import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './../../styles/user.module.scss';
import MainContainer from '../../components/MainContainer';

export default function User({ user }) {
    const { query } = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User with id is {query.id}</h1>
                <div>User name's - {user.name}</div>
                <div className="address">
                    <p>City: {user.address.city}</p>
                </div>
                <Link href={`/users/`}>
                    <button className="btn-back">Back to users</button>
                </Link>
            </div>
            <style jsx>{`
                .address {
                    font-size: 24px;
                    text-align: center;
                    margin: 20px 0;
                }

                .btn-back {
                    border: none;
                    padding: 12px 15px;
                    font-size: 18px;
                    text-transform: uppercase;
                    background: red;
                    color: white;
                    text-align: center;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .btn-back:hover {
                    background: black;
                }

            `}</style>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json();
    return {
        props: { user }
    }
}
