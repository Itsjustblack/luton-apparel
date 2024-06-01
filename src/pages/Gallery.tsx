import { motion } from "framer-motion";

const Gallery = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "linear" }}
			className="pt-[56px]"
		>
			<section className="w-full relative overflow-hidden">
				<header className="w-full h-[110vh] relative">
					<img
						className="h-full object-cover"
						src="/assets/images/gallery/image1.png"
						alt=""
					/>
					<div className="absolute bottom-10 left-0 right-0 mb-12 font-playfair text-white mx-auto text-center">
						<h1 className="text-[52px]">Styled by You:</h1>
						<p className="text-2xl">A Showcase of Our Apparel in the Wild</p>
					</div>
				</header>
				<div className="relative -top-10">
					<div className="relative left-[31px] z-10 w-[70%] xl:w-fit">
						<img
							src="/assets/images/gallery/image2.png"
							alt=""
						/>
					</div>
					<div className="absolute top-[90px] right-24 z-0">
						<img
							src="/assets/images/ellipse.png"
							alt=""
						/>
					</div>
					<div className="relative">
						<div className="relative -top-28 w-fit ml-auto z-10">
							<img
								className="object-cover h-full"
								src="/assets/images/gallery/image3.png"
								alt=""
							/>
						</div>
						<div className="absolute top-[84px] xl:left-[187px] flex gap-x-[37px] z-10">
							<img
								className="object-cover h-full"
								src="/assets/images/gallery/image5.png"
								alt=""
							/>
							<img
								className="object-cover h-full"
								src="/assets/images/gallery/image4.png"
								alt=""
							/>
						</div>
						<div className="absolute top-[300px] left-0 z-0">
							<img
								src="/assets/images/ellipse.png"
								alt=""
							/>
						</div>
					</div>
					<div className="relative flex w-full">
						<div className="relative -top-10 left-5 xl:top-16 w-fit">
							<img
								className="object-cover"
								src="/assets/images/gallery/image6.png"
								alt=""
							/>
						</div>
						<div className="relative ml-auto w-cover right-4 xl:right-7 w-[50%] xl:w-fit">
							<img
								className="object-cover h-full"
								src="/assets/images/gallery/image7.png"
								alt=""
							/>
						</div>
					</div>
					<div className="relative xl:-top-20 left-[30px] w-[70%] xl:w-fit">
						<img
							className="object-cover"
							src="/assets/images/gallery/image9.png"
							alt=""
						/>
					</div>
				</div>
			</section>
		</motion.main>
	);
};

export default Gallery;
