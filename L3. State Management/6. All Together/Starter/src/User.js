import PropTypes from "prop-types";

const User = ({ user, isGameCountShown }) => {
	return (
		<li>
			{user.uname} has played {isGameCountShown ? user.gamesCount : "*"}{" "}
			games.
		</li>
	);
};

User.propTypes = {
	user: PropTypes.object.isRequired,
};

export default User;
