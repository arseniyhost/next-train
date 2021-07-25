import Link from 'next/link';
import { useState, useEffect } from 'react';
import MainContainer from '../components/MainContainer';

const Users = ({users}) => {
    return (
        <MainContainer keywords={"users page"}>
            <h1>Users List</h1>
            <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a className="link-user">{user.name}</a>
                            </Link>
                        </li>
                    })
                }
            </ul>
            <style jsx>{`
                .link-user {
                    color: green;
                }
            `}</style>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();

    return {
        props: {users},
    }
}