'use client';
import { useRouter } from 'next/navigation';

function Users({ users }) {
    const router = useRouter();
    if(users) {
        return (
            <ul>
                {
                users.map(user => (
                    <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
                        <div>
                            <h3>Nombre: {user.first_name} {user.last_name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Id: {user.id}</p>
                            <img src={user.avatar} alt={user.email} />
                        </div>
                    </li>
                ))
                }
            </ul>
        );
    } else return( <h1>Error</h1> );
};

export default Users;