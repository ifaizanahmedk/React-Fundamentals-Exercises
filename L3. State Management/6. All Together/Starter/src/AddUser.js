import { useState } from "react";
import PropTypes from "prop-types";

const AddUser = ({ users, addUser }) => {
	const [user, setUser] = useState({
		fname: "",
		lname: "",
		uname: "",
		gamesCount: 0,
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const addNewUser = (event) => {
		event.preventDefault();
		!isUserExists(user) && addUser(user);
		console.log(user);
	};

	const isUserExists = (user) => {
		let userExist = false;
		users
			.filter((existingUser) => existingUser.uname === user.uname)
			.map((filteredUser) => {
				userExist = true;
				alert(
					`A user with the given username ('${filteredUser.uname}') already exists!`
				);
			});
		gi;

		return userExist;
	};

	const isFormInComplete = () =>
		user.fname === "" || user.lname === "" || user.uname === "";

	return (
		<form onSubmit={addNewUser}>
			<input
				type="text"
				placeholder="First Name"
				value={user.fname}
				onChange={handleOnChange}
				name="fname"
			/>
			<input
				type="text"
				placeholder="Last Name"
				value={user.lname}
				onChange={handleOnChange}
				name="lname"
			/>
			<input
				type="text"
				placeholder="username"
				value={user.uname}
				onChange={handleOnChange}
				name="uname"
			/>

			<button disabled={isFormInComplete()}>Add User</button>
		</form>
	);
};

AddUser.propTypes = {
	addUser: PropTypes.func.isRequired,
};

export default AddUser;
