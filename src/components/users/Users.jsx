import User from '../user/User';

const Users = ({ users }) => {
	if (!users || users.length === 0) return <p>No hay usuarios</p>;

	return (
		<>
			{users.map(user => (
				<User key={user.userId} {...user}></User>
			))}
		</>
	);
};

export default Users;
