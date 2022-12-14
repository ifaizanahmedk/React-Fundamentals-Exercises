import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddItem from "./AddItem";
import RemoveAnItem from "./RemoveAnItem";
import ItemsList from "./ItemsList";

const App = () => {
	const [items, setItems] = useState([]);

	// const addItem = (event) => {
	// 	event.preventDefault();
	// 	// setItems([...items, value]);
	// 	setValue("");
	// };

	// const deleteLastItem = (event) => {
	// 	setItems(items.slice(0, -1));
	// };

	const handleAddItem = (item) => {
		setItems(...items, item);
	};

	const handleDeleteItem = () => {
		setItems(...items.slice(0, -1));
	};

	const noItemsFound = () => items.length === 0;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<h2>Shopping List</h2>
			<AddItem onAddItem={handleAddItem} />

			<RemoveAnItem
				onDeleteItem={handleDeleteItem}
				handleButtonState={noItemsFound()}
			/>

			<p className="items">Items</p>
			<ItemsList items={items} />
		</div>
	);
};

export default App;
