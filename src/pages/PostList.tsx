import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import PostCard from "../components/PostCard";


const PostList: React.FC = () => {
const { posts, deletePost } = usePosts();
const navigate = useNavigate();
const [q, setQ] = useState("");


const filtered = useMemo(() => {
const key = q.trim().toLowerCase();
if (!key) return posts;
return posts.filter((p) => p.title.toLowerCase().includes(key));
}, [q, posts]);



	return (
			<main className="layout-main">
				<div className="page-header">
					<h1 className="page-title">Danh sách bài viết ({filtered.length})</h1>
					<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
						<input
							value={q}
							onChange={(e) => setQ(e.target.value)}
							placeholder="Lọc theo tiêu đề…"
							className="form-input search-input"
						/>
						<button onClick={() => navigate('/create')} className="btn btn-primary">
							Viết bài mới
						</button>
					</div>
				</div>

				<div className="post-grid list-view" style={{ marginTop: 20 }}>
					{filtered.map((p) => (
						<PostCard key={p.id} post={p} onDelete={deletePost} />
					))}
				</div>
			</main>
	);
};


export default PostList;