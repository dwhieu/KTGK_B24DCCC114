import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<header className="layout-header">
			<div className="container nav-bar">
				<Link to="/" className="brand" aria-label="Home - Blog Manager">
					<span style={{display: 'inline-flex', alignItems: 'center', gap: 8}}>
						<span style={{width: 36, height: 36, borderRadius: 12, background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', display: 'inline-block'}} />
						<span>Blog Manager</span>
					</span>
				</Link>

				<nav className="nav-actions" aria-label="Main navigation">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							`nav-link ${isActive ? 'active' : ''}`
						}
					>
						Trang chủ
					</NavLink>

					<NavLink
						to="/create"
						className={({ isActive }) =>
							`nav-link ${isActive ? 'active header-cta' : 'header-cta'}`
						}
					>
						Viết bài
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;