import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransitionContext } from "../../TransitionProvider";

interface NavItemProps {
	text: string;
	link: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, link }) => {
	const { setInTransition } = useContext(TransitionContext);

	const navigate = useNavigate();

	const changePage = () => {
		setInTransition(true);
		setTimeout(() => {
			navigate(link);
		}, 1500);
	};

	return (
		<p
			onClick={changePage}
			className="font-sm hover:border-b border-black hover:cursor-pointer"
		>
			{text}
		</p>
	);
};

export default NavItem;
