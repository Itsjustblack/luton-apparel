import Container from "../components/Container";

const Footer = () => {
	return (
		<footer className="w-full bg-black text-white">
			<Container className="h-screen my-auto">
				<div className="flex justify-between max-w-[1100px] pt-12 items-center mx-auto">
					<img
						src="/assets/icons/logo.svg"
						alt="menu icon"
					/>
					<span className="font-bold">© 2020 - 2023 Luton Inc</span>
					<div className="flex gap-x-5">
						<img
							src="/assets/icons/instagram.svg"
							alt=""
						/>
						<img
							src="/assets/icons/twitter.svg"
							alt=""
						/>
						<img
							src="/assets/icons/youtube.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="border-b border-white pt-[74px]"></div>
				<div className="mt-[94px] pb-14 grid grid-cols-[500px_auto] gap-x-20 items-center">
					<div className="flex gap-x-20">
						<div>
							<p className="text-lg text-[#525252]">Help</p>
							<p className="font-extralight mt-10">Enquiries</p>
							<p className="font-extralight mt-7">Order Now</p>
						</div>
						<div>
							<p className="text-lg text-[#525252]">The Company</p>
							<p className="font-extralight mt-10">About Luton</p>
							<p className="font-extralight mt-7">Legal</p>
							<p className="font-extralight mt-7">Code of Ethics</p>
						</div>
						<div>
							<p className="text-lg text-[#525252]">Socials</p>
							<p className="font-extralight mt-10">Instagram</p>
							<p className="font-extralight mt-7">Twitter</p>
							<p className="font-extralight mt-7">Youtube</p>
						</div>
					</div>
					<div className="w-full pl-5">
						<h2 className="font-bold text-xl mb-4">
							Sign up for our monthly updates
						</h2>
						<div className="border border-[#D1D9CF] flex py-2 px-4 rounded">
							<input
								type="text"
								className="w-full border-none bg-transparent focus:outline-none font-montserrat text-xs mr-4"
								placeholder="Enter Your Email Address"
							/>
							<img
								src="/assets/icons/arrow-right.svg"
								alt=""
							/>
						</div>
						<div className="flex space-x-2 items-center mt-4">
							<input
								className="w-4 h-4"
								type="checkbox"
								id="terms"
							/>
							<label
								htmlFor="terms"
								className="text-xs font-semibold"
							>
								By Submiting your email, you agree to receive advertising emails
								from Modimal.
							</label>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
