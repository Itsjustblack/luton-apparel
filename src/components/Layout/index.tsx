import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";
import ViewOnlyOnDesktop from "../ViewOnlyOnDesktop";

interface Props {
	children: ReactNode | ReactNode[];
}

export function Layout({ children }: Props) {
	return (
		<ReactLenis root>
			<ViewOnlyOnDesktop>{children}</ViewOnlyOnDesktop>
		</ReactLenis>
	);
}
