import React, { useState, useEffect } from "react";

function ChildComponent() {
	const [color, setColor] = useState("red");

	useEffect(() => {
		let componentMount = true;

		setTimeout(() => {
			if (componentMount) {
				setColor("green");
			}
		}, 3000);

		return () => {
			componentMount = false;
		};
	}, []);

	return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
