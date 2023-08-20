import styled from "styled-components";
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialSection = () => {
	return (
		<SocialBody>
			<ContactDiv className="">
				<h2>maganijoshua25@gmail.com</h2>
				<h2>+234 8189709386</h2>
			</ContactDiv>
			<SocialContainer>
				<Icon>
					<a
						href="https://www.instagram.com/_son.of.nun_/"
						target="_blank"
						rel="noreferrer"
					>
						<BsInstagram fontSize={25} />
					</a>
				</Icon>
				<Icon>
					<a
						href="https://twitter.com/joshuamagani25"
						target="_blank"
						rel="noreferrer"
					>
						<BsTwitter fontSize={25} />
					</a>
				</Icon>
				<Icon>
					<a
						href="https://www.linkedin.com/in/joshua-magani-9b010918b/"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin fontSize={25} />
					</a>
				</Icon>
				<Icon>
					<a
						href="https://github.com/maganijnr"
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub fontSize={25} />
					</a>
				</Icon>
			</SocialContainer>
		</SocialBody>
	);
};

export default SocialSection;

const SocialBody = styled.div`
	background: #171219;
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SocialContainer = styled.div`
	display: flex;
	align-items: center;
`;

const ContactDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-bottom: 20px;

	h2{
		color: #dff348;
		font-size: 12px;
	}
`

const Icon = styled.span`
	cursor: pointer;
	margin: 0px 10px;

	&:first-child {
		margin-left: 0px;
	}

	&:last-child {
		margin-right: 0px;
	}

	a {
		text-decoration: none;
		color: #dff348;
	}
`;
