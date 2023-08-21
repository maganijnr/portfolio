import styled from "styled-components";
import ConatinerWrapper from "../molecules/ConatinerWrapper";
import DeveloperImage from "../../assets/developer.svg";
import RESUME from "../../assets/Joshua Magani CV.pdf";

const HeroSection = () => {
	return (
		<HeroBody>
			<ConatinerWrapper>
				<InfoWrapper>
					<DetailsDiv>
						<H5>Hi there</H5>
						<H1>
							I am <BoldText>Joshua Magani.</BoldText>
						</H1>
						<P>
							I'm a <SpanText>Full stack developer</SpanText> more
							focused on the frontend. I love creating web apps using
							current and efficient technologies.
						</P>
						<YellowButton>
							<a href={RESUME} download>
								Download CV
							</a>
						</YellowButton>
					</DetailsDiv>
					<ImageDiv>
						<img src={DeveloperImage} alt="Developer" />
					</ImageDiv>
				</InfoWrapper>
			</ConatinerWrapper>
		</HeroBody>
	);
};

export default HeroSection;

const HeroBody = styled.div`
	padding: 80px 0px 40px;
	background: #171219;
	color: #fff;
	min-height: 65vh;

	@media screen and (max-width: 768px) {
		padding: 100px 0px 50px;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

const DetailsDiv = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
`;

const ImageDiv = styled.div`
	flex: 1;
	width: 100%;
	height: 400px;
	align-items: center;
	display: flex;
	justify-content: center;
	overflow: hidden;

	@media screen and (max-width: 640px) {
		width: 100%;
		min-height: 300px;
	}

	@media screen and (max-width: 450px) {
		width: 100%;
		min-height: 250px;
	}

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;

		@media screen and (max-width: 768px) {
			width: 350px;
			height: 350px;
			margin: auto;
		}

		@media screen and (max-width: 450px) {
			width: 300px;
			height: 300px;
			margin: auto;
		}
	}
`;

const YellowButton = styled.button`
	margin: 20px 0px;
	padding: 10px 10px;
	font-size: 20px;
	font-weight: 600;
	background: #dff348;
	cursor: pointer;
	border-radius: 8px;
	width: 300px;

	@media screen and (max-width: 640px) {
		width: 100%;
		font-size: 18px;
	}

	a {
		text-decoration: none;
		color: #171219;
	}
`;

const H5 = styled.h5`
	margin: 5px 0px;
`;

const H1 = styled.h1`
	font-size: 50px;
	line-height: 75px;

	@media screen and (max-width: 640px) {
		font-size: 40px;
		line-height: 70px;
	}
`;

const P = styled.p`
	font-size: 24px;
	line-height: 35px;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 30px;
	}

	@media screen and (max-width: 640px) {
		font-size: 18px;
		line-height: 28px;
	}

	@media screen and (max-width: 450px) {
		font-size: 16px;
	}
`;

const BoldText = styled.strong`
	color: #dff348;
`;

const SpanText = styled.span`
	color: #dff348;
`;
