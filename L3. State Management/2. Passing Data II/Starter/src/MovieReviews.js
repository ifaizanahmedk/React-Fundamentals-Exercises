import UserWhoLiked from "./UsersWhoLiked";

const MovieReviews = ({ users, movies, usersByMovie }) => {
	// console.log("usersByMovie", usersByMovie);
	const moviesDetails = Object.keys(movies).map((id) => (
		<UserWhoLiked
			key={id}
			moviesInfo={movies[id]}
			users={users}
			usersWhoLiked={usersByMovie[id]}
		/>
	));
	return <div>{moviesDetails}</div>;
};

export default MovieReviews;
