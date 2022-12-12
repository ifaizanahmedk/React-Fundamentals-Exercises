const MovieReviews = ({ profiles, users, movies }) => {
	Object.values(movies).map((movie) => {
		let favoriteMovies = profiles.filter(
			(profile) => movie.id == profile.favoriteMovieID
		);
		console.log(favoriteMovies[0].name);
		favoriteMovies.map((movie) => {
			console.log(movie);
			users[movie.userID];
		});
	});

	return " ";
};

export default MovieReviews;
