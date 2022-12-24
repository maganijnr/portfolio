import styled from "styled-components";
import ConatinerWrapper from "../molecules/ConatinerWrapper";
import { techStack } from "../../data/projects";

const AboutSection = () => {
	return (
		<AboutBody>
			<ConatinerWrapper>
				<H3>About</H3>
				<InfoDiv>
					<TextDiv>
						<P>
							My name is Joshua Magani. I am a graduate of Covenant
							University with Bs.c in Industrial Mathematics - Computer
							Science. I am passionate about coding and problem solving.
							Always open to learning new technologies that help me grow.
						</P>
					</TextDiv>
					<TechDiv>
						<P>Technologies I currently work with:</P>

						<StackDiv>
							{techStack.map((stack) => (
								<StackItem key={stack.id}>
									<span>{stack.icon}</span>
									{stack.title}
								</StackItem>
							))}
						</StackDiv>
					</TechDiv>
				</InfoDiv>
			</ConatinerWrapper>
		</AboutBody>
	);
};

export default AboutSection;

const H3 = styled.h3`
	color: #dff348;
	font-weight: bold;
	font-size: 20px;
`;

const AboutBody = styled.div`
	padding: 20px 0px 20px;
	background: #171219;
	min-height: 40vh;

	@media screen and (max-width: 768px) {
		padding: 40px 0px 40px;
	}
`;

const InfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	color: #fff;
	padding-top: 20px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

const TextDiv = styled.div`
	width: 50%;
	margin-right: 10px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin-right: 0px;
		padding-bottom: 20px;
	}
`;
const TechDiv = styled.div`
	width: 50%;
	margin-left: 10px;

	@media screen and (max-width: 768px) {
		margin-left: 0px;
		width: 100%;
	}
`;

const P = styled.p`
	font-size: 18px;
	font-weight: normal;
	line-height: 25px;

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

const StackDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 10px;
	margin-top: 20px;

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}

	@media screen and (max-width: 640px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}

	@media screen and (max-width: 440px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}
`;

const StackItem = styled.div`
	border: 1px dashed #f26255;
	width: 100px;
	display: flex;
	flex-direction: column;
	padding: 5px 8px;
	align-items: center;
`;
