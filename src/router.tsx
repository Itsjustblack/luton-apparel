import { createBrowserRouter } from "react-router-dom";
import Collection from "./pages/Collection";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import Products from "./pages/Products";

export const router = createBrowserRouter([
	{ path: "/", element: <Loader /> },
	{ path: "/home", element: <Home /> },
	{ path: "/products", element: <Products /> },
	{ path: "/gallery", element: <Gallery /> },
	{ path: "/collection/:name", element: <Collection /> },
]);
