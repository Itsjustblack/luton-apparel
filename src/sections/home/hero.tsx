import Container from "../../components/Container";
import Product from "../../components/Product";

const Hero = () => {
	return (
		<section className="pt-[101px] relative pb-[130px]">
			<Container className="pt-[74px] grid grid-cols-[530px_auto] gap-x-10 xl:gap-x-14">
				<img
					className="absolute top-[100px] -left-[10px] z-[12]"
					src="/assets/icons/bgPattern.svg"
					alt="Background Pattern"
				/>
				{/* <img
					className="absolute -bottom-3 -right-[10px] rotate-180 z-[12]"
					src="/assets/icons/bgPattern.svg"
					alt="Background Pattern"
				/> */}
				<div className="pt-3">
					<h1 className="text-[52px] leading-[69.32px] font-playfair">
						Pocket-friendly picks <br /> to get your best{" "}
						<span className="text-[#800E13]">style</span>
					</h1>
					<p className="text-lg font-light leading-7 mt-5">
						No need to spend so much on Big names, our apparels are <br /> made
						from the same stuff. Check it out!
					</p>
					<div className="flex justify-start mt-[53px] gap-x-10">
						<button className="bg-[#FFF2E7] rounded-xl px-4 py-3 text-lg font-bold">
							Browse Our Collection
						</button>
						<div className="flex items-center gap-x-2">
							<span className="text-lg font-light">Spring ‘23 collection </span>
							<img
								className="w-[18px]"
								src="/assets/icons/rightArrow.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="border border-black rounded-lg mt-[52px] flex items-center justify-center gap-x-3 py-9 w-full">
						<span className="text-[40px] font-light">10K</span>
						<p className="">
							We’re proud to announce that we have now opened <br /> stores in{" "}
							<i className="font-bold not-italic">10,000</i> places across
							different countries all <br /> over the world
						</p>
					</div>
				</div>
				<div className="flex gap-x-5 justify-between">
					<Product
						name="Luton Classic"
						price={59}
						type="Teal Brogues"
						image="/assets/images/product2.png"
						showTag
						size="normal"
					/>
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
				</div>
			</Container>
		</section>
	);
};

export default Hero;
