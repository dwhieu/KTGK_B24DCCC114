import React from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import PostForm from "../components/PostForm";


const CreatePostPage: React.FC = () => {
	const { createPost } = usePosts();
	const navigate = useNavigate();

	return (
		<main className="post-form-container">
			<header className="post-form-header">
				<h1 className="post-form-title">Tạo bài viết mới</h1>
				<p className="post-form-subtitle">Viết và chia sẻ nội dung hữu ích đến độc giả của bạn</p>
			</header>
			<section className="post-form-card" style={{maxWidth: 800, margin: '0 auto'}}>
				<PostForm
					mode="create"
					onCancel={() => navigate("/")}
					onSubmit={(values) => {
						createPost(values);
						alert("Đăng bài thành công!");
						navigate("/");
					}}
				/>
			</section>
		</main>
	);
};


export default CreatePostPage;