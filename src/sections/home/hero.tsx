import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Container from "../../components/Container";
import Product from "../../components/Product";

const Hero = () => {
	const [isShown, setIsShown] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest > 100 && setIsShown(true);
	});

	return (
		<section className="pt-[101px] relative pb-[130px]">
			<Container className="pt-[74px] grid grid-cols-[567px_auto] xl:grid-cols-[530px_auto] gap-x-10 xl:gap-x-14 justify-between">
				<img
					className="absolute top-[100px] -left-[10px] z-[12]"
					src="/assets/icons/bgPattern.svg"
					alt="Background Pattern"
				/>
				<div className="pt-3">
					<h1 className="text-[52px] leading-[69.32px] font-playfair text-black">
						Pocket-friendly picks <br /> to get your best{" "}
						<span className="text-[#800E13]">style</span>
					</h1>
					<p className="text-lg font-light leading-7 mt-5 text-black">
						No need to spend so much on Big names, our apparels are <br /> made
						from the same stuff. Check it out!
					</p>
					<div className="flex justify-start mt-[53px] gap-x-10">
						<button className="bg-[#FFF2E7] text-black rounded-xl px-4 py-3 text-lg font-bold">
							Browse Our Collection
						</button>
						<div className="flex items-center gap-x-2">
							<span className="text-lg font-light text-black">
								Spring ‘23 collection{" "}
							</span>
							<img
								className="w-[18px]"
								src="/assets/icons/rightArrow.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="border border-black rounded-lg mt-[52px] flex items-center justify-center gap-x-3 py-9 w-full relative">
						{isShown && (
							<div className="confetti-container">
								<DotLottieReact
									autoplay
									src="/assets/lotties/confetti.json"
									className="absolute top-[-10px] left-[-13px]"
								/>
							</div>
						)}
						<span className="text-[40px] text-black font-light">10K</span>
						<p className="text-black">
							We’re proud to announce that we have now opened <br /> stores in{" "}
							<i className="font-bold not-italic">10,000</i> places across
							different countries all <br /> over the world
						</p>
					</div>
				</div>
				<div className="flex gap-x-5 justify-between">
					<div className="xl:block hidden">
						<Product
							name="Luton Classic"
							price={59}
							type="Teal Brogues"
							image="/assets/images/product2.png"
							showTag
							size="normal"
						/>
					</div>
					<div className="grid gap-y-5 justify-between">
						<Product
							name="Luton Classic"
							price={59}
							type="Teal Brogues"
							image="/assets/images/product1.png"
						/>
						<Product
							name="Luton Classic"
							price={59}
							type="Teal Brogues"
							image="/assets/images/product3.png"
						/>
					</div>
					<img
						className="absolute bottom-0 right-0 rotate-180 z-[12]"
						src="/assets/icons/bgPattern.svg"
						alt="Background Pattern"
					/>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
