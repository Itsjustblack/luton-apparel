import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import NavBar from "./components/NavBar";
import Collection from "./pages/Collection";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import Products from "./pages/Products";
import Footer from "./sections/footer";

const App = () => {
	const location = useLocation();

	useEffect(() => {
		const id = setTimeout(() => {
			window.scrollTo(0, 0);
		}, 100);

		return () => clearTimeout(id);
	}, [location.pathname]);

	return (
		<Layout>
			{location.pathname !== "/" && <NavBar />}
			<AnimatePresence mode="wait">
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						path="/"
						element={<Loader />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/products"
						element={<Products />}
					/>
					<Route
						path="/gallery"
						element={<Gallery />}
					/>
					<Route
						path="/collection/:name"
						element={<Collection />}
					/>
				</Routes>
			</AnimatePresence>
			{location.pathname !== "/" &&
				!location.pathname.includes("collection") && <Footer />}
		</Layout>
	);
};

export default App;
