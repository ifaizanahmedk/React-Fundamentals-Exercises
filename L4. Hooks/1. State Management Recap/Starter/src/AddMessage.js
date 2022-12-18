import { useState } from "react";
import PropTypes from "prop-types";

const AddMessage = ({ onMessage }) => {
	const [messageText, setMessageText] = useState("");

	const handleOnChange = (event) => {
		setMessageText(event.target.value);
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();

		onMessage(messageText);
		setMessageText("");
	};

	// If the user did not type anything, he/she should not be allowed to submit.
	const isDisabled = () => {
		return messageText === "";
	};

	return (
		<div>
			<form className="input-group" onSubmit={handleOnSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter your message..."
					name="message"
					onChange={handleOnChange}
					value={messageText}
				/>
				<div className="input-group-append">
					<button
						className="btn submit-button"
						disabled={isDisabled()}>
						SEND
					</button>
				</div>
			</form>
		</div>
	);
};

AddMessage.propTypes = {
	onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
