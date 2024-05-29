import { AnimationSequence, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { easing } from "../utils/constants";

const Loader = () => {
	const navigate = useNavigate();
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const sequence = [
			["#overflow", { translateX: 0 }, { duration: 1.5, ease: easing }],
			["h1", { opacity: 1 }, { duration: 0.5 }],
			["#overflow", { translateX: "100vh" }, { duration: 1, ease: easing }],
			[
				"#background",
				{
					height: 0,
				},
				{ duration: 2, ease: easing },
			],
		];

		const controls = animate(sequence as AnimationSequence);

		controls.then(() => {
			navigate("/home");
		});

		return () => controls.stop();
	}, [animate, navigate]);

	return (
		<section
			ref={scope}
			className="w-screen h-screen flex justify-center items-center overflow-hidden"
		>
			<div
				id="background"
				className="absolute top-0 w-full h-full bg-black"
			></div>
			<div className="w-fit rounded-lg overflow-hidden relative">
				<motion.div
					id="overflow"
					initial={{ translateX: "-100%" }}
					className="h-full w-full absolute bg-white"
				></motion.div>
				<h1 className="font-playfair text-white text-5xl font-bold opacity-0">
					Luton Apparel
				</h1>
			</div>
		</section>
	);
};

export default Loader;
