import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";
import Footer from "./sections/footer";
import { Layout } from "./components/Layout";

const App = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 300);
	}, [pathname]);
	return (
		<Layout>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
			</Routes>
			<Footer />
		</Layout>
	);
};

export default App;
