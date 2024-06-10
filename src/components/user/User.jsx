import { StyledUser } from './user.styles';

const User = ({ profileImage, name, email }) => {
	return (
		<StyledUser>
			<img src={profileImage} alt={`photo of ${name}`} />
			<h1>{name}</h1>
			<span>{email}</span>
		</StyledUser>
	);
};

export default User;
