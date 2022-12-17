const ToggleGamesCount = ({ handleGamesCountToggle, isGameCountShown }) => {
	return (
		<button onClick={handleGamesCountToggle}>
			{isGameCountShown
				? "Hide the number of games played"
				: "Show the number of games played"}
		</button>
	);
};

export default ToggleGamesCount;
