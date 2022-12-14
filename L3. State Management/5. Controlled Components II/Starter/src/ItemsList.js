import PropTypes from "propTypes";

const ItemsList = ({ items }) => {
	return (
		<ol className="item-list">
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ol>
	);
};

ItemsList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemsList;
