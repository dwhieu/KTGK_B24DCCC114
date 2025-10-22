import React, { useState } from "react";
import type { Category, Post } from "../types";

type Props = {
	mode: "create" | "edit";
	defaultValues?: Post;
	onCancel: () => void;
	onSubmit: (values: Omit<Post, "id" | "createdAt">) => void;
};

const categories: Category[] = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"];

const PostForm: React.FC<Props> = ({ mode, defaultValues, onCancel, onSubmit }) => {
	const [title, setTitle] = useState(defaultValues?.title ?? "");
	const [author, setAuthor] = useState(defaultValues?.author ?? "");
	const [thumbnailUrl, setThumbnailUrl] = useState(defaultValues?.thumbnailUrl ?? "");
	const [content, setContent] = useState(defaultValues?.content ?? "");
	const [category, setCategory] = useState<Category>(defaultValues?.category ?? "Khác");

	const [errors, setErrors] = useState<Record<string, string>>({});

	const validate = () => {
		const e: Record<string, string> = {};
		if (!title.trim()) e.title = "Tiêu đề là bắt buộc";
		if (!author.trim()) e.author = "Tác giả là bắt buộc";
		if (!content.trim()) e.content = "Nội dung là bắt buộc";
		setErrors(e);
		return Object.keys(e).length === 0;
	};

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();
		if (!validate()) return;
		onSubmit({ title: title.trim(), author: author.trim(), thumbnailUrl: thumbnailUrl.trim(), content: content.trim(), category });
	};

	return (
			<div className="post-form-card">
				<form onSubmit={handleSubmit} className="">
					<div className="form-group">
						<label className="form-label">Tiêu đề *</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className={`form-input ${errors.title ? 'error' : ''}`}
						/>
						{errors.title && <div className="form-error">{errors.title}</div>}
					</div>

					<div className="form-row">
						<div className="form-group">
							<label className="form-label">Tác giả *</label>
							<input
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
								className={`form-input ${errors.author ? 'error' : ''}`}
							/>
							{errors.author && <div className="form-error">{errors.author}</div>}
						</div>

						<div className="form-group">
							<label className="form-label">Thể loại</label>
							<select
								value={category}
								onChange={(e) => setCategory(e.target.value as Category)}
								className="form-input"
							>
								{categories.map((c) => (
									<option key={c} value={c}>
										{c}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="form-group">
						<label className="form-label">URL ảnh thumbnail</label>
						<input
							value={thumbnailUrl}
							onChange={(e) => setThumbnailUrl(e.target.value)}
							placeholder="https://…"
							className="form-input"
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Nội dung bài viết *</label>
						<textarea
							value={content}
							onChange={(e) => setContent(e.target.value)}
							rows={10}
							className={`form-input ${errors.content ? 'error' : ''}`}
						/>
						{errors.content && <div className="form-error">{errors.content}</div>}
					</div>

					<div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, paddingTop: 8}}>
						<button type="button" onClick={onCancel} className="btn btn-secondary">
							Hủy
						</button>
						<button type="submit" className="btn btn-primary">
							{mode === 'create' ? 'Đăng bài' : 'Cập nhật'}
						</button>
					</div>
				</form>
			</div>
	);
};


export default PostForm;