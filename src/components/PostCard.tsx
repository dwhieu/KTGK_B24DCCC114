import React from "react";
import { useNavigate } from "react-router-dom";
import type { Post } from "../types";
import { formatDate, excerpt } from "../utils";


const PostCard: React.FC<{ post: Post; onDelete: (id: string) => void }> = ({ post, onDelete }) => {
	const navigate = useNavigate();
	return (
		<article className="post-card split">
			<div className="post-card-content">
				<h3 className="post-card-title">{post.title}</h3>
				<div className="post-card-meta">
					<span>By {post.author}</span>
					<span>•</span>
					<span>{formatDate(post.createdAt)}</span>
					<span style={{ marginLeft: 'auto' }} className="post-card-category">{post.category}</span>
				</div>
				<p className="post-card-description">{excerpt(post.content, 150)}</p>

				<div className="post-card-actions">
					<button onClick={() => navigate(`/posts/${post.id}`)} className="btn btn-primary">Đọc thêm</button>
					<button onClick={() => navigate(`/posts/edit/${post.id}`)} className="btn btn-secondary">Chỉnh sửa</button>
					<button
						onClick={() => {
							if (confirm('Bạn có chắc muốn xóa bài viết này?')) onDelete(post.id);
						}}
						className="btn"
						style={{ marginLeft: 'auto', border: '1px solid rgba(15,23,42,0.06)', background: 'white', color: 'var(--color-red-600)' }}
					>
						Xóa
					</button>
				</div>
			</div>

			<div className="post-card-media">
				<img src={post.thumbnailUrl} alt={post.title} />
			</div>
		</article>
	);
};


export default PostCard;