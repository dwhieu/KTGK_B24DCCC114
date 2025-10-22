/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from "react";
import type { Post } from "../types";
import { uid, todayISO } from "../utils";

type PostsApi = {
	posts: Post[];
	createPost: (p: Omit<Post, "id" | "createdAt">) => Post;
	updatePost: (id: string, patch: Partial<Omit<Post, "id" | "createdAt">>) => Post | null;
	deletePost: (id: string) => void;
	findPost: (id: string) => Post | undefined;
};

const PostsContext = createContext<PostsApi | null>(null);

export const PostsProvider: React.FC<{ children: React.ReactNode; seed?: Post[] }> = ({ children, seed = [] }) => {
	const [posts, setPosts] = useState<Post[]>(seed);

	const api = useMemo<PostsApi>(() => ({
		posts,
		createPost: (p) => {
			const newPost: Post = { id: uid(), createdAt: todayISO(), ...p };
			setPosts((prev) => [newPost, ...prev]);
			return newPost;
		},
		updatePost: (id, patch) => {
			let updated: Post | null = null;
			setPosts((prev) =>
				prev.map((x) => {
					if (x.id === id) {
						updated = { ...x, ...patch } as Post;
						return updated;
					}
					return x;
				})
			);
			return updated;
		},
		deletePost: (id) => setPosts((prev) => prev.filter((x) => x.id !== id)),
		findPost: (id) => posts.find((x) => x.id === id),
	}), [posts]);

	return <PostsContext.Provider value={api}>{children}</PostsContext.Provider>;
};


export const usePosts = () => {
	const ctx = useContext(PostsContext);
	if (!ctx) throw new Error("usePosts must be used within PostsProvider");
	return ctx;
};