import { useState } from "react";
import PropTypes from "prop-types";

const RemoveAnItem = ({ onDeleteItem, handleButtonState }) => {
	const deleteLastItem = () => {
		onDeleteItem();
	};

	return (
		<button onClick={deleteLastItem} disabled={handleButtonState}>
			Delete Last Item
		</button>
	);
};

RemoveAnItem.propTypes = {
	onDeleteItem: PropTypes.func.isRequired,
	handleButtonState: PropTypes.func.isRequired,
};

export default RemoveAnItem;
