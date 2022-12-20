import { useEffect, useState } from "react";

const Game = ({ userAnswer }) => {
	const [value1, setValue1] = useState(null);
	const [value2, setValue2] = useState(null);
	const [value3, setValue3] = useState(null);
	const [proposedAnswer, setProposedAnswer] = useState(null);

	useEffect(() => {
		let valuesArray = generateNewQuestion();
		setValue1(valuesArray[0]);
		setValue2(valuesArray[1]);
		setValue3(valuesArray[2]);
		setProposedAnswer(valuesArray[3]);
	}, []);

	const evaluateAnswer = (givenAnswer) => {
		const correctAnswer = value1 + value2 + value3;

		return (
			(correctAnswer == proposedAnswer && givenAnswer == "true") ||
			(correctAnswer != proposedAnswer && givenAnswer == "false")
		);
	};

	const generateNewQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);

		const proposedAnswer =
			Math.floor(Math.random() * 3) + value1 + value2 + value3;

		return [value1, value2, value3, proposedAnswer];
	};

	const refresh = (newValuesArr) => {
		setValue1(newValuesArr[0]);
		setValue2(newValuesArr[1]);
		setValue3(newValuesArr[2]);
		setProposedAnswer(newValuesArr[3]);
	};

	const handleOnClick = (event) => {
		let answer = evaluateAnswer(event.target.value);
		let newValuesArray = generateNewQuestion();
		refresh(newValuesArray);
		userAnswer(answer);
	};

	return (
		<>
			<div className="equation">
				<p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
			</div>
			<button value="true" onClick={handleOnClick}>
				True
			</button>
			<button value="false" onClick={handleOnClick}>
				False
			</button>
		</>
	);
};

export default Game;
