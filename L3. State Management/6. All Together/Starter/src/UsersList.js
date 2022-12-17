import { useState } from "react";
import PropTypes from "prop-types";
import User from "./User";
import ToggleGamesCount from "./ToggleGamesCount";

const UsersList = ({ users }) => {
	const [isGameCountShown, setIsGameCountShown] = useState(false);

	const handleGamesCountToggle = () => {
		setIsGameCountShown(!isGameCountShown);
	};

	return (
		<>
			<ToggleGamesCount
				handleGamesCountToggle={handleGamesCountToggle}
				isGameCountShown={isGameCountShown}
			/>

			<ol>
				{users.map((user, index) => (
					<User
						key={index}
						user={user}
						isGameCountShown={isGameCountShown}
					/>
				))}
			</ol>
		</>
	);
};

UsersList.propTypes = {
	users: PropTypes.array.isRequired,
};

export default UsersList;
