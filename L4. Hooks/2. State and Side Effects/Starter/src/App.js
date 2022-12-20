import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Game from "./Game";
import ScoreCard from "./ScoreCard";

const App = () => {
	const [numQuestions, setNumQuestions] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);

	const handleUserAnswer = (userAnswer) => {
		if (userAnswer) {
			setNumCorrect(numCorrect + 1);
		}
		setNumQuestions(numQuestions + 1);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<div className="game">
				<h2>Mental Math</h2>
				<Game userAnswer={handleUserAnswer} />
				<ScoreCard
					numQuestions={numQuestions}
					numCorrect={numCorrect}
				/>
			</div>
		</div>
	);
};

export default App;
