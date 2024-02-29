import Container from "../../components/Container";
import Service from "../../components/Service";

const Services = () => {
	return (
		<section className="pt-16 pb-16">
			<h2 className="font-playfair text-[52px] text-center">Our Services</h2>
			<Container>
				<div className="grid grid-cols-2 justify-between mt-[94px] gap-x-[100px]">
					<div className="flex gap-x-5">
						<div className="flex flex-col gap-y-5">
							<img
								className="w-[341px] h-[203px] object-cover"
								src="/assets/images/service1.png"
								alt=""
							/>
							<img
								className="w-[302px] h-[257px] object-cover self-end"
								src="/assets/images/service3.png"
								alt=""
							/>
						</div>
						<div className="flex flex-col gap-y-5">
							<img
								className="w-[261px] h-[159px] object-cover mt-4"
								src="/assets/images/service2.png"
								alt=""
							/>
							<img
								className="h-full w-full object-cover"
								src="/assets/images/service4.png"
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-col justify-center gap-y-4">
						<Service
							title="Swift style delivery"
							text="We now deliver directly from our stores to your doorstep for ultimate convenience!"
							image="/assets/icons/truck.svg"
						/>
						<Service
							title="Gift wrapping"
							text="Wrap up your order and send a smile to your loved ones."
							image="/assets/icons/gift.svg"
						/>
						<Service
							title="Personalisation"
							text="Make each piece your own by customising it to create your unique fashion statement."
							image="/assets/icons/pencil.svg"
						/>
						<Service
							title="Customer service"
							text="Our dedicated team is available to assist you with any inquiries to ensure a seamless shopping experience."
							image="/assets/icons/headphones.svg"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Services;
