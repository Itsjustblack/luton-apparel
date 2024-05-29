import {
	AnimationSequence,
	motion,
	useAnimate,
	useInView,
} from "framer-motion";
import Container from "../../components/Container";
import { useEffect } from "react";
import { easing } from "../../utils/constants";

const styles = [
	{
		title: "Summer Collection",
		image: "/assets/images/style1.png",
	},
	{
		title: "Winter Collection",
		image: "/assets/images/style2.png",
	},
	{
		title: "Spring Collection",
		image: "/assets/images/style3.png",
	},
];

const StyleSeason = () => {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { once: true });

	useEffect(() => {
		let controls;

		if (isInView && scope.current) {
			const value = scope.current.offsetWidth;
			const sequence: AnimationSequence = [
				[
					"#image1",
					{ left: [0, value - 300] },
					{ duration: 0.8, ease: easing },
				],
				[
					"#image2",
					{ left: [0, value / 2 - 150] },
					{ duration: 0.8, ease: easing },
				],
			];
			controls = animate(sequence);
		}

		return controls?.stop;
	}, [animate, isInView, scope]);

	return (
		<section className="bg-[#FFF2E7]">
			<Container className="md:px-10 pt-[90px] pb-[120px]">
				<header className="text-center">
					<h2 className="text-[52px] text-black leading-[70px] font-playfair">
						We’ve got a style for every
					</h2>
					<p className="text-center text-[52px] leading-[70px] font-playfair text-[#800E13]">
						season
					</p>
					<p className="font-light leading-7 text-lg text-black mt-6">
						No matter what time of the year it is, we’ve got you covered
					</p>
				</header>
				<motion.div
					ref={scope}
					className="mt-12 gap-x-12 h-[500px] relative w-full flex"
				>
					{styles.map(({ title, image }, i) => (
						<motion.div
							id={`image${i}`}
							key={image}
							className="max-w-[300px] w-full grid justify-items-center absolute"
						>
							<div className="w-full h-[400px] mb-5  rounded-md overflow-hidden">
								<img
									className="w-full h-full object-cover"
									src={image}
									alt=""
								/>
							</div>
							<button className="w-[230px] bg-black text-white font-bold py-4 rounded-lg">
								{title}
							</button>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	);
};

export default StyleSeason;
