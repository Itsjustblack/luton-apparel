import { motion } from "framer-motion";
import Hero from "../sections/home/hero";
import Services from "../sections/home/services";
import StyleSeason from "../sections/home/styleSeason";

function Home() {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "linear" }}
		>
			<Hero />
			<StyleSeason />
			<Services />
		</motion.main>
	);
}

export default Home;
