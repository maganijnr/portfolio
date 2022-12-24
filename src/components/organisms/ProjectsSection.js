import styled from "styled-components";
import ConatinerWrapper from "../molecules/ConatinerWrapper";
import { projects } from "../../data/projects";
import ProjectCard from "../atoms/ProjectCard";

const ProjectsSection = () => {
	return (
		<ProjectsBody>
			<ConatinerWrapper>
				<H3>Projects</H3>
				<ProjectsContainer>
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</ProjectsContainer>
			</ConatinerWrapper>
		</ProjectsBody>
	);
};

export default ProjectsSection;

const ProjectsBody = styled.div`
	padding: 20px 0px 20px;
	background: #dff348;
	min-height: 55vh;

	@media screen and (max-width: 768px) {
		padding: 40px 0px 40px;
	}
`;

const ProjectsContainer = styled.div`
	margin: 20px 0px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	gap: 10px;

	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		place-items: initial;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		place-items: initial;
	}
`;

const H3 = styled.h3`
	color: #171219;
	font-weight: bold;
	font-size: 20px;
`;
