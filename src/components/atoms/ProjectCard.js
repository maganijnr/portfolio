import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const ProjectCard = ({ project }) => {
	return (
		<CardBody>
			<H3>{project.name}</H3>
			<StackDiv>
				{project.stack.map((item, index) => (
					<StackItem key={index}>
						<p>{item}</p>
					</StackItem>
				))}
			</StackDiv>
			<P>{project.description}</P>
			<P font="12px">{project.owner}</P>
			<InfoDiv>
				<LiveDiv>
					{project.status === "Live" ? (
						<LiveTxt>
							<AiFillEye />{" "}
							<a href={project.url} target="_blank" rel="noreferrer">
								Live
							</a>
						</LiveTxt>
					) : (
						<LiveTxt>
							<AiFillEyeInvisible />
							<p>In Progress</p>
						</LiveTxt>
					)}
				</LiveDiv>

				<RepoDiv>
					{project?.repo && (
						<RepoTxt>
							<BsCodeSlash />{" "}
							<a href={project.repo} target="_blank" rel="noreferrer">
								{" "}
								Code
							</a>
						</RepoTxt>
					)}
				</RepoDiv>
			</InfoDiv>
		</CardBody>
	);
};

export default ProjectCard;

const CardBody = styled.div`
	background: #171219;
	color: #fff;
	width: 400px;
	min-height: 180px;
	max-height: 180px;
	padding: 10px 15px;
	border-radius: 8px;
	position: relative;

	@media screen and (max-width: 1024px) {
		width: 350px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 150px;
		max-height: 150px;
		min-height: 150px;
	}
`;

const StackDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5px;
`;

const StackItem = styled.div`
	border: 1px dashed #f26255;
	background: transparent;
	padding: 3px 4px;
	color: #f26255;
	font-weight: bold;
	font-size: 10px;
`;

const H3 = styled.h3`
	font-size: 18px;
	color: #dff348;
`;

const P = styled.p`
	margin-top: 8px;
	font-size: ${(props) => (props.font ? props.font : "14px")};
`;

const InfoDiv = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 10px;
	left: 15px;
`;
const LiveDiv = styled.div`
	margin: 0px 10px 0px 0px;
`;
const LiveTxt = styled.span`
	display: flex;
	align-items: center;
	color: #f26255;

	a {
		margin-left: 3px;
		text-decoration: none;
		color: #f26255;
		font-size: 12px;
	}

	p {
		margin-left: 3px;
		color: #f26255;
		font-size: 12px;
	}
`;
const RepoDiv = styled.div`
	margin: 0px 0px 0px 10px;
`;

const RepoTxt = styled.span`
	display: flex;
	align-items: center;
	color: #f26255;

	a {
		margin-left: 3px;
		text-decoration: none;
		color: #f26255;
		font-size: 12px;
	}
`;
