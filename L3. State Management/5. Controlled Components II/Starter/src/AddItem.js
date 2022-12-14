import { useState } from "react";
import PropTypes from "prop-types";

const AddItem = ({ onAddItem }) => {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addItem = (event) => {
		event.preventDefault();
		onAddItem(value);
		console.log(value);

		setValue("");
	};

	const inputIsEmpty = () => value === "";

	return (
		<form onSubmit={addItem}>
			<input
				type="text"
				placeholder="Enter New Item"
				value={value}
				onChange={handleChange}
			/>
			<button disabled={inputIsEmpty()}>Add</button>
		</form>
	);
};

AddItem.propTypes = {
	onAddItem: PropTypes.func.isRequired,
};

export default AddItem;
