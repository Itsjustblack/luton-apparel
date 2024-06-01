import classNames from "classnames";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import useSize from "../hooks/useSize";
import { useEffect, useState } from "react";

const Collection = () => {
	const { name } = useParams();
	const [, height] = useSize();
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
			<div
				className={classNames({
					"mt-10": height <= 768,
					"mt-20": height > 768,
				})}
			>
				{isLoaded && <ImageGallery collection={name!} />}
			</div>
		</motion.main>
	);
};

export default Collection;
