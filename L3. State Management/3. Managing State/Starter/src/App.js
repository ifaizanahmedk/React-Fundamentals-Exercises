import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
	const [noOfLikes, setNoOfLikes] = useState(0);
	return (
		<div className="container">
			<h2>Like this photo!</h2>
			<img
				src={corgi}
				alt="Corgi"
				onClick={() => setNoOfLikes(noOfLikes + 1)}
			/>
			<p>Amount of likes: {noOfLikes}</p>
		</div>
	);
};

export default App;
