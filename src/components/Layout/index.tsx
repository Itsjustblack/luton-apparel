import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
	children: ReactNode | ReactNode[];
}

export function Layout({ children }: Props) {
	return <ReactLenis root>{children}</ReactLenis>;
}
