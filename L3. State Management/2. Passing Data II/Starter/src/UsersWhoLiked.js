const UserWhoLiked = ({ users, moviesInfo, usersWhoLiked }) => (
	<dl key={moviesInfo.id}>
		<dt>{moviesInfo.name}</dt>
		<dd>
			{usersWhoLiked && usersWhoLiked.length > 0 ? (
				usersWhoLiked.map((userId, index) => (
					<span key={index}>{users[userId].name + " "}</span>
				))
			) : (
				<span>No one </span>
			)}
			liked this movie
		</dd>
	</dl>
);

export default UserWhoLiked;
