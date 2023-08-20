import styled from "styled-components";
import User from "../../assets/image.jpeg";
import ConatinerWrapper from "./ConatinerWrapper";
import * as Scroll from "react-scroll";

const Navbar = () => {
	let Link = Scroll.Link;

	return (
		<Header>
			<ConatinerWrapper>
				<HeaderContainer>
					<Avatar>
						<img src={User} alt="avatar" />
					</Avatar>
					<NavItems>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<NavItem>Projects</NavItem>
						</Link>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<NavItem>About</NavItem>
						</Link>
						{/* <Link
							to="contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							<NavItem>Contact</NavItem>
						</Link> */}
					</NavItems>
				</HeaderContainer>
			</ConatinerWrapper>
		</Header>
	);
};

export default Navbar;

const Header = styled.header`
	width: 100%;
	background: #171219;
	height: 65px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;

const HeaderContainer = styled.div`
	border-bottom: 1px dashed #dff348;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const Avatar = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	overflow: hidden;
	cursor: pointer;

	img {
		width: 100%;
		object-fit: cover;
	}
`;

const NavItems = styled.div`
	display: flex;
	align-items: center;
`;

const NavItem = styled.button`
	margin: 0px 10px;
	padding: 5px 8px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	background: transparent;
	cursor: pointer;
	outline: none;

	@media screen and (max-width: 640px) {
		margin: 0px 6px;
		font-size: 14px;
	}

	&:hover {
		color: #dff348;
		transition: 0.35s ease-in-out all;
	}
`;
