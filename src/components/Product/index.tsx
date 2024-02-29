import { motion } from "framer-motion";
import { FC, useState } from "react";

interface Props {
	name: string;
	type: string;
	price: number;
	image: string;
	showTag?: boolean;
	size?: "normal" | "mini";
}

const Product: FC<Props> = ({
	name,
	type,
	price,
	image,
	showTag,
	size = "mini",
}) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<motion.div
			onHoverStart={() => setIsActive(true)}
			onHoverEnd={() => setIsActive(false)}
			style={{ height: size == "mini" ? 264 : 551 }}
			className="relative w-[295px]"
		>
			{showTag ? (
				<img
					className="absolute -top-[14px] -left-[22px] w-[54px] h-[54px] object-cover z-[11]"
					src="/assets/icons/tag.svg"
					alt="price-tag icon"
				/>
			) : null}
			<div className="w-full h-full overflow-hidden rounded-xl relative flex items-end">
				<motion.img
					initial={{ scale: 1 }}
					animate={{
						scale: isActive ? 1.08 : 1,
						translateX: isActive ? 10 : 0,
						translateY: isActive ? -10 : 0,
					}}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="w-full h-full object-contain absolute"
					src={image}
					alt="a product image"
				/>
				<motion.div
					initial={{ translateY: 0 }}
					animate={{ translateY: isActive ? -10 : 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="bg-white w-full mx-3 relative z-10 h-[60px] px-4 pt-1 pb-2 mb-5 rounded-lg flex items-center justify-between"
				>
					<div className="">
						<span className="font-bold text-2xl">{name}</span>
						<p className="text-sm text-[#777777]">{type}</p>
					</div>
					<span className="text-xl leading-8">{`$${price}`}</span>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Product;
