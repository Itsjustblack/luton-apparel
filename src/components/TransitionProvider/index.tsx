import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";

interface ITransitionContext {
	inTransition: boolean;
	setInTransition: Dispatch<SetStateAction<boolean>>;
}

export const TransitionContext = createContext<ITransitionContext>({
	inTransition: false,
	setInTransition: () => false,
});

const TransitionProvider = ({ children }: { children: ReactNode }) => {
	const [inTransition, setInTransition] = useState(false);
	console.log(inTransition);
	return (
		<TransitionContext.Provider value={{ inTransition, setInTransition }}>
			{children}
		</TransitionContext.Provider>
	);
};

export default TransitionProvider;
