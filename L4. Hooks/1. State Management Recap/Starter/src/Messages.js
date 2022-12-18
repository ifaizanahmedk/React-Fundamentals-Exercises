import PropTypes from "prop-types";

const Messages = ({ user, messages }) => {
	return (
		<ul className="message-list">
			{messages.map((message, index) => (
				<li
					key={index}
					className={
						message.username === user.username
							? "message sender"
							: "message recipient"
					}>
					<p>{`${message.username}: ${message.text}`}</p>
				</li>
			))}
		</ul>
	);
};

Messages.propTypes = {
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired,
};

export default Messages;
