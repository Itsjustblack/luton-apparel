import { FC } from "react";

interface Props {
	title: string;
	text: string;
	image: string;
}

const Service: FC<Props> = ({ title, image, text }) => {
	return (
		<div className="flex gap-x-12 h-[95px]">
			<img
				className="self-start"
				src={image}
				alt=""
			/>
			<div className="flex flex-col">
				<span className="font-semibold text-xl">{title}</span>
				<p className="font-light text-sm">{text}</p>
			</div>
		</div>
	);
};

export default Service;
