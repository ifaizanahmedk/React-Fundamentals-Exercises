import { useState } from "react";
import PropTypes from "prop-types";

const AddUser = ({ addUser, checkUser }) => {
	const [fname, setFname] = useState("");
	const [lname, setLname] = useState("");
	const [uname, setUname] = useState("");
	const [gameCount, setGameCount] = useState(0);

	const handleOnChange = (event) => {
		switch (event.target.name) {
			case "fname":
				setFname(event.target.value);
				// console.log("event target", event.target.value);
				// console.log("fname", fname);
				break;

			case "lname":
				setLname(event.target.value);
				// console.log("event target", event.target.value);
				// console.log("lname", lname);
				break;

			case "uname":
				setUname(event.target.value);
				// console.log("event target", event.target.value);
				// console.log("uname", uname);
				break;
		}
	};

	const addNewUser = (event) => {
		event.preventDefault();
		let user = { fname, lname, uname, gameCount };
		addUser(user);
		setFname("");
		setLname("");
		setUname("");
		checkUser(user);
	};

	const isFormInComplete = () => fname === "" || lname === "" || uname === "";

	return (
		<form onSubmit={addNewUser}>
			<input
				type="text"
				placeholder="First Name"
				value={fname}
				onChange={handleOnChange}
				name="fname"
			/>
			<input
				type="text"
				placeholder="Last Name"
				value={lname}
				onChange={handleOnChange}
				name="lname"
			/>
			<input
				type="text"
				placeholder="username"
				value={uname}
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
