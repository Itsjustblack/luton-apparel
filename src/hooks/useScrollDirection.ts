import { useState, useEffect } from "react";

const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDirection = () => {
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? true : false;
			if (
				direction !== scrollDirection &&
				Math.abs(scrollY - lastScrollY) > 10
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener("scroll", updateScrollDirection);
		return () => {
			window.removeEventListener("scroll", updateScrollDirection);
		};
	}, [scrollDirection]);

	return scrollDirection;
};

export default useScrollDirection;
