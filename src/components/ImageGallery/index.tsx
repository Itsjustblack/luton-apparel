import {
	AnimationPlaybackControls,
	animate,
	motion,
	useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FAST_DURATION = 20;
const SLOW_DURATION = 40;

const ImageGallery = ({ collection }: { collection: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);
	const xTranslation = useMotionValue(0);

	const [duration, setDuration] = useState(FAST_DURATION);
	const [mustFinish, setMustFinish] = useState(false);
	const controls = useRef<AnimationPlaybackControls>(null!);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			setWidth(container.offsetWidth);
		}

		const finalPosition = -width / 2 - 8;
		if (mustFinish) {
			controls.current = animate(
				xTranslation,
				[xTranslation.get(), finalPosition],
				{
					ease: "linear",
					duration: duration * (1 - xTranslation.get() / finalPosition),
					onComplete: () => {
						setMustFinish(false);
					},
				}
			);
		} else {
			controls.current = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}
		return controls.current.stop;
	}, [duration, mustFinish, width, xTranslation]);

	return (
		<div className="w-full overflow-y-auto overflow-x-hidden relative">
			<div className="absolute rounded-r-md h-full w-20 top-0 left-0 rotate-180 z-10 bg-gradient-to-l from-[rgba(73,73,73,0.5160189075630253)] to-[rgba(0,0,0,0)]"></div>
			<div className="absolute rounded-r-md h-full w-20 top-0 right-0 z-10 bg-gradient-to-l from-[rgba(73,73,73,0.5160189075630253)] to-[rgba(0,0,0,0)]"></div>
			<motion.div
				ref={containerRef}
				onHoverStart={() => {
					setMustFinish(true);
					setDuration(SLOW_DURATION);
				}}
				onHoverEnd={() => {
					setMustFinish(true);
					setDuration(FAST_DURATION);
				}}
				style={{ x: xTranslation, width: "max-content" }}
				className="flex gap-x-8"
			>
				{Array.from({ length: 7 }).map((_, i) => (
					<Card
						key={`image-${i}-1`}
						image={`/assets/images/${collection}/image${i + 1}.jpg`}
					/>
				))}
				{Array.from({ length: 7 }).map((_, i) => (
					<Card
						key={`image-${i}-1`}
						image={`/assets/images/${collection}/image${i + 1}.jpg`}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default ImageGallery;

export const Card = ({ image }: { image: string }) => {
	return (
		<motion.div className="relative w-[270px] h-[450px] overflow shrink-0">
			<img
				className="object-cover h-full w-full"
				src={image}
				alt=""
			/>
		</motion.div>
	);
};
