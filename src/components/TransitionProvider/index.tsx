import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";

interface ITransitionContext {
	inTransition: boolean;
	setInTransition: Dispatch<SetStateAction<boolean>>;
	changePage: (path: string) => void;
}

export const TransitionContext = createContext<ITransitionContext>({
	inTransition: false,
	setInTransition: () => false,
	changePage: () => {},
});

const TransitionProvider = ({ children }: { children: ReactNode }) => {
	const [inTransition, setInTransition] = useState(false);
	const navigate = useNavigate();

	const changePage = (path: string) => {
		setInTransition(true);
		setTimeout(() => {
			navigate(path);
		}, 1500);
	};

	return (
		<TransitionContext.Provider
			value={{ inTransition, setInTransition, changePage }}
		>
			{children}
		</TransitionContext.Provider>
	);
};

export default TransitionProvider;
