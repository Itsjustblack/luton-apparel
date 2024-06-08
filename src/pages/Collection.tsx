import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

const Collection = () => {
	const { name } = useParams();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 200);
	}, []);

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "linear" }}
			className="pt-[56px]"
		>
			<div className="h-[calc(100vh_-_56px)] flex justify-center items-center">
				{isLoaded && <ImageGallery collection={name!} />}
			</div>
		</motion.main>
	);
};

export default Collection;
