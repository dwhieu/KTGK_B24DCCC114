import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { formatDate } from "../utils";


const PostDetail: React.FC = () => {
	const { id } = useParams();
	const { findPost, deletePost } = usePosts();
	const navigate = useNavigate();
	const post = id ? findPost(id) : undefined;

	if (!post)
		return (
			<main className="max-w-3xl mx-auto px-4 py-6">
				<p className="text-gray-600">Không tìm thấy bài viết.</p>
				<div className="mt-3 flex gap-2">
					<button onClick={() => navigate(-1)} className="px-3 py-2 rounded-xl border">
						Quay lại
					</button>
					<Link to="/" className="px-3 py-2 rounded-xl bg-black text-white">
						Về trang chủ
					</Link>
				</div>
			</main>
		);

		return (
			<main className="post-detail">
				<img src={post.thumbnailUrl} alt={post.title} className="post-detail-image" />

				<div className="post-detail-header">
					<div className="post-detail-meta">
						<span>Tác giả: {post.author}</span>
						<span>•</span>
						<span>Ngày đăng: {formatDate(post.createdAt)}</span>
						<span className="ml-auto inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700">{post.category}</span>
					</div>
					<h1 className="post-detail-title">{post.title}</h1>
				</div>

				<article className="post-detail-content">
					<p className="whitespace-pre-wrap">{post.content}</p>
				</article>

				<div className="pt-4 flex gap-2">
					<button onClick={() => navigate(-1)} className="btn btn-secondary">
						Quay lại
					</button>
					<button onClick={() => navigate(`/posts/edit/${post.id}`)} className="btn btn-primary">
						Chỉnh sửa
					</button>
					<button
						onClick={() => {
							if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
								deletePost(post.id);
								navigate("/");
							}
						}}
						className="btn btn-danger ml-auto"
					>
						Xóa bài viết
					</button>
				</div>
			</main>
		);
};


export default PostDetail;