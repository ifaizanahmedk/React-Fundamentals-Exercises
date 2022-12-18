import logo from "./logo.svg";
import "./App.css";
import UserChatWindow from "./UserChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

// const messages = [
// 	{ username: "Amy", text: "Hi, Jon!" },
// 	{ username: "Amy", text: "How are you?" },
// 	{ username: "John", text: "Hi, Amy! Good, you?" },
// ];

const App = () => {
	const [messages, setMessages] = useState([]);

	const onMessageSubmit = (username, message) => {
		const newMessage = {
			username: username,
			text: message,
		};

		setMessages(messages.concat([newMessage]));
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<div className="container">
				{users.map((user) => (
					<UserChatWindow
						key={user.username}
						user={user}
						messages={messages}
						onMessageSubmit={onMessageSubmit}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
