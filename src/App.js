import Navbar from "./components/molecules/Navbar";
import HeroSection from "./components/organisms/HeroSection";
import styled from "styled-components";
import ProjectsSection from "./components/organisms/ProjectsSection";
import AboutSection from "./components/organisms/AboutSection";

import * as Scroll from "react-scroll";
import ContactSection from "./components/organisms/ContactSection";
import SocialSection from "./components/organisms/SocialSection";

function App() {
	let Element = Scroll.Element;
	return (
		<div>
			<Navbar />
			<AppWrapper>
				<Element name="hero">
					<HeroSection />
				</Element>
				<Element name="projects">
					<ProjectsSection />
				</Element>
				<Element name="about">
					<AboutSection />
				</Element>
				<Element name="contact">
					<ContactSection />
				</Element>
				<SocialSection />
			</AppWrapper>
		</div>
	);
}

export default App;

const AppWrapper = styled.main`
	position: relative;
	min-height: 100vh;
`;
