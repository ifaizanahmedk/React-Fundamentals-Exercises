import PropTypes from "prop-types";
import Item from "./Item";

const ItemsList = ({ items }) => {
	return (
		<ol className="item-list">
			{items.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</ol>
	);
};

ItemsList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemsList;
