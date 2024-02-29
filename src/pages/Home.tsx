import PageContainer from "../components/PageContainer";
import Hero from "../sections/home/hero";
import Services from "../sections/home/services";
import StyleSeason from "../sections/home/styleSeason";

function Home() {
	return (
		<PageContainer>
			{/* <Hero /> */}
			<StyleSeason />
			<Services />
		</PageContainer>
	);
}

export default Home;
