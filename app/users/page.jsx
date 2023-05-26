import Users from '@/components/Users';

async function fetchUsers() {
    return await fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(datos => datos.data)
        .catch(e => console.log(e));
};
 
async function UsersPage() {
    const users = await fetchUsers();
    return (
        <main>
            <h1>Lista de usuarios</h1>
            {<Users users={users} />}
        </main>
    );
};

export default UsersPage;