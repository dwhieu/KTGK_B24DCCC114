import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetail from "./pages/PostDetail";
import EditPostPage from "./pages/EditPostPage";


const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			<Navbar />
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/posts" element={<PostList />} />
				<Route path="/create" element={<CreatePostPage />} />
				<Route path="/posts/:id" element={<PostDetail />} />
				<Route path="/posts/edit/:id" element={<EditPostPage />} />
			</Routes>
			<footer className="mt-10 py-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Blog Manager</footer>
		</div>
	);
};


export default App;