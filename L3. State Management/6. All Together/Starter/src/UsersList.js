import PropTypes from "prop-types";
import User from "./User";

const UsersList = ({ users }) => {
	return (
		<ol>
			{users.map((user, index) => (
				<User key={index} user={user} />
			))}
		</ol>
	);
};

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
};

export default UsersList;
