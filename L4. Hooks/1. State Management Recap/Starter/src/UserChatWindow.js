import PropTypes from "prop-types";
import AddMessage from "./AddMessage";
import Messages from "./Messages";

const UserChatWindow = ({ user, messages, onMessageSubmit }) => {
	const handleOnMessageSubmit = (message) => {
		// console.log(user.username, message);
		onMessageSubmit(user.username, message);
	};

	return (
		<div className="chat-window">
			<h4>Super Awesome Chat</h4>
			<h5>{user.username}</h5>
			<Messages user={user} messages={messages} />
			<AddMessage onMessage={handleOnMessageSubmit} />
		</div>
	);
};

UserChatWindow.propTypes = {
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired,
	onMessageSubmit: PropTypes.func.isRequired,
};

export default UserChatWindow;
