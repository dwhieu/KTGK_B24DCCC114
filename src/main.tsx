import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PostsProvider } from "./context/PostsContext";
import { initialPosts } from "./data/initialPosts";

// Import our styles
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<PostsProvider seed={initialPosts}>
				<App />
			</PostsProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// Surface uncaught errors to the DOM so a blank page shows details during dev
if (import.meta.env.DEV) {
	window.addEventListener("error", (ev) => {
		const root = document.getElementById("root");
		if (root) {
			root.innerHTML = `<pre style="white-space:pre-wrap;color:#b91c1c;background:#fff2f2;padding:16px;border-radius:8px;">Uncaught error:\n${String(ev.error ?? ev.message)}</pre>`;
		}
		// also log
		console.error(ev.error ?? ev.message);
	});

	window.addEventListener("unhandledrejection", (ev) => {
		const root = document.getElementById("root");
		if (root) {
			root.innerHTML = `<pre style="white-space:pre-wrap;color:#b91c1c;background:#fff2f2;padding:16px;border-radius:8px;">Unhandled promise rejection:\n${String(ev.reason)}</pre>`;
		}
		console.error(ev.reason);
	});
}