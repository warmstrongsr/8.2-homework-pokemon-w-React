import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SinglePost({ loggedIn }) {
	const params = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState({ title: "", content: "" });
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(`http://localhost:5000/api/posts/${params.postId}`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
				setTitle(data.title);
				setContent(data.content);
			});
	}, [params.postId]);

	async function handleSubmit(e) {
		e.preventDefault();

		// Get the updated data from the form
		let updatedTitle = title;
		let updatedContent = content;

		// Get the JWT token from localStorage
		let token = localStorage.getItem("token");

		// Set up the request headers
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", `Bearer ${token}`);

		// Set up the request body
		let requestBody = JSON.stringify({
			title: updatedTitle,
			content: updatedContent,
		});

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
			// Display the error if errors
			console.error(data.error);
		} else {
			// Display success if success
			console.log(`${data.title} has been updated`);
			navigate("/");
		}
	}

	return (
		<>
			<h3 className="text-center">Edit Post</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="title"
						className="form-control my-3"
						placeholder="Enter Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name="content"
						className="form-control my-3"
						placeholder="Enter Body"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
					<input
						type="submit"
						value="Update Post"
						className="btn btn-success w-100"
					/>
				</div>
			</form>
		</>
	);
}
