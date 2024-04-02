import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
	children: ReactNode | ReactNode[];
}

export function Layout({ children }: Props) {
	// const lenis = useLenis(({ scroll }) => {
	// 	called every scroll
	// });

	return <ReactLenis root>{children}</ReactLenis>;
}
