import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import ProductPreview from "../components/ProductPreview";

const images = [
	{
		title: "Spring ‘23 Collection",
		src: "/assets/images/image1.png",
		path: "/collection/spring",
	},
	{
		title: "Summer ‘23 Collection",
		src: "/assets/images/image2.png",
		path: "/collection/summer",
	},
	{
		title: "Winter ‘23 Collection",
		src: "/assets/images/image3.png",
		path: "/collection/winter",
	},
	{
		title: "Fall ‘23 Collection",
		src: "/assets/images/image4.png",
		path: "/collection/fall",
	},
];

const Products = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress, scrollY } = useScroll({
		target: containerRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["0%", "-303%"]);

	useMotionValueEvent(scrollY, "change", (latest) => console.log(latest));

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "linear" }}
		>
			<section
				ref={containerRef}
				className="h-[700vh] relative"
			>
				<div
					ref={sliderRef}
					className="sticky top-0 overflow-hidden"
				>
					<motion.div
						style={{ x }}
						className="flex w-full h-screen relative"
					>
						{images.map(({ src, title, path }) => (
							<ProductPreview
								key={src}
								src={src}
								title={title}
								path={path}
							/>
						))}
					</motion.div>
				</div>
			</section>
		</motion.main>
	);
};

export default Products;
