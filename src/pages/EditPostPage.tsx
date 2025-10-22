import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import PostForm from "../components/PostForm";

const EditPostPage: React.FC = () => {
	const { id } = useParams();
	const { findPost, updatePost } = usePosts();
	const navigate = useNavigate();
	const post = id ? findPost(id) : undefined;

	if (!post)
		return (
			<main className="max-w-3xl mx-auto px-4 py-6">
				<p className="text-gray-600">Không tìm thấy bài viết để chỉnh sửa.</p>
				<div className="mt-3">
					<button onClick={() => navigate(-1)} className="px-3 py-2 rounded-xl border">
						Quay lại
					</button>
				</div>
			</main>
		);

	return (
		<main className="max-w-3xl mx-auto px-4 py-6">
			<h1 className="text-xl font-semibold mb-4">Chỉnh sửa bài viết</h1>
			<PostForm
				mode="edit"
				defaultValues={post}
				onCancel={() => navigate(`/posts/${post.id}`)}
				onSubmit={(values) => {
					updatePost(post.id, values);
					alert("Cập nhật thành công!");
					navigate(`/posts/${post.id}`);
				}}
			/>
		</main>
	);
};


export default EditPostPage;