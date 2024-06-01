import { useContext } from "react";
import { TransitionContext } from "../../TransitionProvider";

interface NavItemProps {
	text: string;
	link: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, link }) => {
	const { changePage } = useContext(TransitionContext);

	return (
		<p
			onClick={() => changePage(link)}
			className="font-sm hover:border-b border-black hover:cursor-pointer"
		>
			{text}
		</p>
	);
};

export default NavItem;
