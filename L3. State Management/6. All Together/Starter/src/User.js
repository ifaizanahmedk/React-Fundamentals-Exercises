import PropTypes from "prop-types";

const User = ({ user }) => {
	return <li>{user.uname}</li>;
};

User.propTypes = {
	user: PropTypes.object.isRequired,
};

export default User;
