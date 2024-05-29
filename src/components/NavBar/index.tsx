import { motion } from "framer-motion";
import useScrollDirection from "../../hooks/useScrollDirection";
import Container from "../Container";
import NavItem from "./NavItem";
import { easing } from "../../utils/constants";
import { TransitionContext } from "../TransitionProvider";
import { useContext } from "react";

const routes: { name: string; path: string }[] = [
	{
		name: "Home",
		path: "/home",
	},
	{
		name: "Products",
		path: "/products",
	},
	{
		name: "Gallery",
		path: "/gallery",
	},
];

const NavBar = () => {
	const scrollDirection = useScrollDirection();
	const { inTransition, setInTransition } = useContext(TransitionContext);
	return (
		<>
			{inTransition && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, ease: "linear" }}
					className="fixed top-0 left-0 right-0 h-screen overflow-hidden z-50"
				>
					<motion.div
						onAnimationStart={() => console.log("T2 Starts")}
						onAnimationComplete={() => setInTransition(false)}
						initial={{ scaleY: 0 }}
						animate={{ scaleY: [0, 1, 1, 0] }}
						exit={{ scaleY: 0 }}
						transition={{ duration: 2, delay: 0.2, ease: easing }}
						className="fixed top-0 left-0 w-full h-full bg-black z-50 origin-top"
					></motion.div>
				</motion.div>
			)}
			<motion.nav
				animate={{ opacity: scrollDirection ? 0 : 1 }}
				transition={{ duration: 0.2, ease: "linear" }}
				className="w-full bg-white py-2 flex items-center justify-center fixed z-20 shadow-sm"
			>
				<Container className="flex justify-between w-full items-center relative">
					<h1 className="text-4xl font-semibold font-playfair ml-[52px]">
						Luton
					</h1>
					<div className="flex gap-x-9 items-center">
						{routes.map(({ name, path }) => (
							<NavItem
								key={name}
								text={name}
								link={path}
							/>
						))}
					</div>
				</Container>
			</motion.nav>
		</>
	);
};

export default NavBar;
