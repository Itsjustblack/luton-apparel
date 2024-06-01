import { motion } from "framer-motion";
import { useContext } from "react";
import { TransitionContext } from "../TransitionProvider";

const ProductPreview = ({
	src,
	title,
	path,
}: {
	src: string;
	title: string;
	path: string;
}) => {
	const { changePage } = useContext(TransitionContext);

	return (
		<div className="shrink-0 relative">
			<motion.img
				className="object-cover w-[100svw] h-screen shrink-0"
				src={src}
				alt=""
			/>
			<div className="absolute mb-12 flex flex-col items-center justify-center bottom-0 left-0 right-0 text-white">
				<h1 className="font-playfair text-[52px] mb-6">{title}</h1>
				<button
					type="button"
					onClick={() => changePage(path)}
					className="bg-[#d9d9d966] hover:bg-white hover:text-[#212121] transition-colors duration-150 ease-linear border border-white font-playfair max-w-[146px] w-full py-[10px] rounded-[50px]"
				>
					Explore
				</button>
			</div>
		</div>
	);
};

export default ProductPreview;
