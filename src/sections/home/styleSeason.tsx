import Container from "../../components/Container";

const StyleSeason = () => {
	const styles = [
		{
			image: "/assets/images/style1.png",
			description:
				"Effortlessly transition from sunny days to brisk evenings. From stylish sweaters to tailored jackets, our collection is crafted to capture the essence of autumnal charm.",
		},
		{
			image: "/assets/images/style2.png",
			description:
				"Whether you're sipping cocoa by the fireplace or navigating snowy streets, our Winter Collection ensures you stay fashion-forward in the frosty air.",
		},
		{
			image: "/assets/images/style3.png",
			description:
				"Effortlessly transition from sunny days to brisk evenings. From stylish sweaters to tailored jackets, our collection is crafted to capture the essence of autumnal charm.",
		},
	];
	return (
		<section className="bg-[#FFF2E7] pb-44">
			<Container className="pt-[90px] md:px-10">
				<header className="text-center">
					<h2 className="text-[52px] leading-[70px] font-playfair">
						We’ve got a style for every
					</h2>
					<p className="text-center text-[52px] leading-[70px] font-playfair text-[#800E13]">
						season
					</p>
					<p className="font-light leading-7 text-lg mt-6">
						No matter what time of the year it is, we’ve got you covered{" "}
					</p>
				</header>
				<div className="grid grid-cols-3 mt-12 gap-x-12">
					{/* Add Animation Here */}
					{styles.map(({ image, description }) => (
						<div className="max-w-[400px] w-full grid justify-items-center">
							<div className="w-full h-[400px]">
								<img
									className="w-full h-full object-cover"
									src={image}
									alt=""
								/>
							</div>
							<p className="font-light leading-7 text-lg text-center text-[#525252] self-start mt-[26px]">
								{description}
							</p>
							<button className="w-[230px] bg-black text-white font-bold py-4 mt-9">
								Summer Collection
							</button>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default StyleSeason;
