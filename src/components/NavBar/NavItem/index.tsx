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
			className="hover:border-b border-black hover:cursor-pointer font-playfair"
		>
			{text}
		</p>
	);
};

export default NavItem;
