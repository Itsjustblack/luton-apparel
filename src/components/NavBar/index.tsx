import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container";

const NavBar = () => {
	const routes: { name: string; path: string }[] = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Products",
			path: "/products",
		},
		{
			name: "Gallery",
			path: "/gallery",
		},
		{
			name: "Contact",
			path: "/contact",
		},
	];

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
	return (
		<nav
			className={`w-full py-3 bg-white flex items-center justify-center fixed z-20 transition-all duration-300 ${
				scrolled ? "border-b-[0.3px] border-black" : "border-none"
			}`}
		>
			<Container className="flex justify-between w-full items-center relative">
				<div className="w-6 h-3">
					<img
						src="/assets/icons/menu.svg"
						alt="menu icon"
					/>
				</div>
				<h1 className="text-[40px] font-semibold font-playfair ml-20">Luton</h1>
				<div className="flex gap-x-9 items-center">
					{routes.map(({ name, path }) => (
						<NavLink
							key={name}
							className={({ isActive }) =>
								`text-sm ${isActive && "border-b border-black"}`
							}
							to={path}
						>
							{name}
						</NavLink>
					))}
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
