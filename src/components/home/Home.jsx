import { useState } from 'react';
import Filters from '../filters/Filters';
import Users from '../users/Users';
import { USERS } from '../../constants/users';
import { normalizeString } from '../../utils/normalize-string';

const Home = () => {
	const [filterActive, setFilterActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);
	const [search, setSearch] = useState('');

	let filteredUsers = filterUsersByActive(USERS, filterActive);
	filteredUsers = sortUsers(filteredUsers, sortBy);
	filteredUsers = filterUsersByName(filteredUsers, search);

	return (
		<>
			<Filters
				setFilterActive={setFilterActive}
				setSortBy={setSortBy}
				setSearch={setSearch}
			/>

			<Users users={filteredUsers} />
		</>
	);
};

const filterUsersByActive = (users, filterActive) => {
	const usersCopy = [...users];

	if (!filterActive) return usersCopy;
	return usersCopy.filter(user => user.active);
};

const sortUsers = (users, sortValue) => {
	const usersCopy = [...users];
	const sortValueNumber = Number(sortValue);
	if (sortValueNumber === 0) return usersCopy;
	return usersCopy.sort((a, b) => a.name.localeCompare(b.name));
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	// Obtiene el valor del input y lo normaliza a minúsculas
	const searchValue = normalizeString(search.toLowerCase());

	// Filtra las personas cuyos nombres contienen el filtro
	const filteredUsers = users.filter(user => {
		// Normaliza el nombre a NFD y elimina los diacríticos
		const normalizedUserName = normalizeString(user.name);

		// Compara el nombre normalizado con el valor de búsqueda normalizado
		return normalizedUserName.toLowerCase().includes(searchValue);
	});

	return filteredUsers;
};

export default Home;
