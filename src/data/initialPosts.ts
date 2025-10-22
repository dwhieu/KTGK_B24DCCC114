import type { Post } from "../types";
import { uid, todayISO } from "../utils";

export const initialPosts: Post[] = [
	{
		id: uid(),
		title: "Hướng dẫn cơ bản React Router",
		author: "Admin",
		thumbnailUrl: "https://tse1.mm.bing.net/th/id/OIP.JCGGgssMIuUrZFU3I6jv0AHaHC?pid=Api&P=0&h=220",
		content:
			"React Router giúp điều hướng trong các ứng dụng SPA. Bài viết này hướng dẫn cấu hình cơ bản, định tuyến lồng nhau, và kỹ thuật bảo vệ route với TypeScript.",
		category: "Công nghệ",
		createdAt: todayISO(),
	},
	{
		id: uid(),
		title: "Kinh nghiệm du lịch Đà Lạt tự túc 3 ngày 2 đêm",
		author: "Minh Châu",
		thumbnailUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
		content:
			"Đà Lạt hấp dẫn bởi khí hậu se lạnh, cà phê và những cung đường đồi thông. Đây là lịch trình gợi ý, chi phí dự kiến và mẹo đặt vé tiết kiệm.",
		category: "Du lịch",
		createdAt: todayISO(),
	},
	{
		id: uid(),
		title: "Bí quyết nấu phở bò thanh ngọt tại nhà",
		author: "Bếp Nhà",
		thumbnailUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
		content:
			"Phở bò ngon cần nước dùng trong, vị ngọt từ xương và gia vị nướng thơm. Bài viết chia sẻ tỷ lệ gia vị, thời gian hầm xương và mẹo giữ sợi phở dai.",
		category: "Ẩm thực",
		createdAt: todayISO(),
	},
	{
		id: uid(),
		title: "Tối giản hóa góc làm việc: tập trung và sáng tạo hơn",
		author: "Lan Phương",
		thumbnailUrl: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?w=800",
		content:
			"Bàn làm việc gọn gàng giúp giảm nhiễu, tăng hiệu suất. Hãy thử thiết kế tối giản với ánh sáng tự nhiên, ghế công thái học và quản lý cáp gọn gàng.",
		category: "Đời sống",
		createdAt: todayISO(),
	},
	{
		id: uid(),
		title: "5 thói quen buổi sáng cho ngày mới năng suất",
		author: "Hà My",
		thumbnailUrl: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=800",
		content:
			"Uống nước ấm, vận động nhẹ, ghi 3 mục tiêu quan trọng, dọn bàn làm việc và hạn chế mạng xã hội 60 phút đầu ngày: 5 thói quen nhỏ tạo khác biệt lớn.",
		category: "Đời sống",
		createdAt: todayISO(),
	},
	{
		id: uid(),
		title: "Khi nào nên viết blog kỹ thuật bằng tiếng Việt?",
		author: "Dev Diary",
		thumbnailUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
		content:
			"Viết blog tiếng Việt giúp chia sẻ tri thức cho cộng đồng trong nước, dễ tiếp cận sinh viên và junior. Tuy nhiên, cần cân nhắc đối tượng độc giả và mục tiêu.",
		category: "Công nghệ",
		createdAt: todayISO(),
	},
];