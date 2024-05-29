import classNames from "classnames";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";
import useSize from "../hooks/useSize";

const Collection = () => {
	const { name } = useParams();
	const [, height] = useSize();
	return (
		<motion.main
			exit={{ opacity: 0, transition: { duration: 0.5, ease: "linear" } }}
			className="pt-[56px]"
		>
			<div
				className={classNames({
					"mt-10": height <= 768,
					"mt-20": height > 768,
				})}
			>
				<ImageGallery collection={name!} />
			</div>
		</motion.main>
	);
};

export default Collection;
