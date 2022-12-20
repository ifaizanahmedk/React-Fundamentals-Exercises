import PropTypes from "prop-types";

const ScoreCard = ({ numQuestions, numCorrect }) => {
	return (
		<>
			<p className="text">
				Your Score: {numCorrect}/{numQuestions}
			</p>
		</>
	);
};

ScoreCard.propTypes = {
	numQuestions: PropTypes.number.isRequired,
	numCorrect: PropTypes.number.isRequired,
};

export default ScoreCard;
