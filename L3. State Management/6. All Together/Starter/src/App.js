import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

const App = () => {
	const [users, setUsers] = useState([]);

	const handleAddUser = (user) => {
		setUsers([...users, user]);
	};

	const isUserExists = (existingUser) => {
		const userExists = users
			.filter((user) => user == existingUser)
			.map((filteredUser) =>
				alert(`${filteredUser.uname} already exists!`)
			);

		return userExists;
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>

			<AddUser addUser={handleAddUser} checkUser={isUserExists} />

			<UsersList users={users} />
		</div>
	);
};

export default App;
