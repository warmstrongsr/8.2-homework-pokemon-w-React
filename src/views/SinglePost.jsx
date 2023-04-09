import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

export default function SinglePost({ loggedIn, currentUser, flashMessage }) {
	const params = useParams();

	const [post, setPost] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:5000/api/posts/${params.postId}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPost(data);
			});
	}, [params.postId]);

	async function handleSubmit(e) {
		e.preventDefault();

		// Check if the user is logged in
		if (!loggedIn) {
			flashMessage("You must be logged in to edit a post", "danger");
			navigate("/login");
			return;
		}

		// Check if the user is the owner of the post
		if (post.author !== currentUser.username) {
			flashMessage("You can only edit your own posts", "danger");
			return;
		}

		// Get the data from the form
		let title = e.target.title.value;
		let content = e.target.content.value;

		// Get the token from localStorage
		let token = localStorage.getItem("token");

		// Set up the request headers
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", `Bearer ${token}`);

		// Set up the request body
		let requestBody = JSON.stringify({ title, content });

		// Make the fetch request
		let response = await fetch(
			`http://localhost:5000/api/posts/${params.postId}`,
			{
				method: "PUT",
				headers: myHeaders,
				body: requestBody,
			}
		);

		let data = await response.json();

		if (data.error) {
			flashMessage(data.error, "danger");
		} else {
			flashMessage(`${data.title} has been updated`, "primary");
			navigate("/");
		}
	}

	return (
		<>
			<h3 className="text-center">Edit A Post!</h3>
			<form action="" onSubmit={handleSubmit}>
				<div>
					<PostCard post={post} />
					<input
						type="text"
						name="title"
						className="form-control my-3"
						placeholder="Change Title"
					/>
					<textarea
						name="content"
						className="form-control my-3"
						placeholder="Change Body"
					/>
					<input
						type="submit"
						value="Edit Post"
						className="btn btn-success w-100"
						disabled={!loggedIn || post.author !== currentUser.username}
					/>
				</div>
			</form>
		</>
	);
}
