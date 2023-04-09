import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post, user }) {
	return (
		<div className="card mt-3 ">
			<div className="row g-0">
				<div className="col-12 col-md-6 col-lg-3 my-3">
					<img
						className="card-img-top"
						src="https://picsum.photos/100"
						alt="random"
						style={{ width: "250px", height: "225px" }}
					/>
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h6 className="card-subtitle text-muted">{post.date_created}</h6>
						<h5 className="card-title">{post.title}</h5>
						<h6 className="card-subtitle">Post: {post.id}</h6>
						<p className="card-text">{post.content}</p>
						<Link className="btn btn-primary" to={`/posts/${post.id}`}>
							See More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}