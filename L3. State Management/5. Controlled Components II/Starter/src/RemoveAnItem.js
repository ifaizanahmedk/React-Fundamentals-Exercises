import { useState } from "react";
import PropTypes from "prop-types";

const RemoveAnItem = ({ onDeleteItem, handleRemoveButton }) => {
	const deleteLastItem = (event) => {
		onDeleteItem();
	};

	return (
		<button onClick={deleteLastItem} disabled={handleRemoveButton}>
			Delete Last Item
		</button>
	);
};

RemoveAnItem.propTypes = {
	onDeleteItem: PropTypes.func.isRequired,
	handleRemoveButton: PropTypes.func.isRequired,
};

export default RemoveAnItem;
