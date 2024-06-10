import { SORTED_OPTIONS } from '../../constants/sorted-options';
import { StyledFilters } from './styles';

const Filters = ({ setFilterActive, setSortBy, setSearch }) => {
	return (
		<>
			<h1>Filters</h1>
			<StyledFilters>
				<label htmlFor=''>Only Active</label>
				<input
					type='checkbox'
					onChange={event => setFilterActive(event.target.checked)}
				/>

				<select onChange={event => setSortBy(event.target.value)}>
					<option value={0}>{SORTED_OPTIONS[0]}</option>
					<option value={1}>{SORTED_OPTIONS[1]}</option>
				</select>

				<div>
					<input
						type='text'
						name='name'
						onInput={event => setSearch(event.target.value)}
					/>
				</div>
			</StyledFilters>
		</>
	);
};

export default Filters;
