import Users from '@/components/Users';

async function fetchUser(id) {
    return await fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(datos => datos.data)
        .catch(e => console.log(e));
};

async function IndexPage({ params }) {
    const user = await fetchUser(params.id);
    return (
        <main>
            <h1>Datos de usuario id {user.id}</h1>
            <div>
                <img src={user.avatar} alt={user.email} />
                <h3>Nombre: {user.first_name} {user.last_name}</h3>
                <p>Email: {user.email}</p>
            </div>
        </main>
    );
};

export default IndexPage;