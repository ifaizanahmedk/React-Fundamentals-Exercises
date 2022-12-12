const UserFavoriteMovies = ({ users, movies, profiles }) => (
	<ol>
		{profiles.map((profile) => (
			<li>
				{Object.values(users)
					.filter((user) => user.id == profile.userID)
					.map((filteredUser) => filteredUser.name)}
				favorite movie is{" "}
				{Object.values(movies)
					.filter((movie) => movie.id == profile.favoriteMovieID)
					.map((filteredMovie) => filteredMovie.name)}
			</li>
		))}
	</ol>
);

// users[profile.userID].name;
// movies[profile.favoriteMovieID].name;

export default UserFavoriteMovies;
