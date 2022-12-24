import {
	FaHtml5,
	FaCss3,
	FaReact,
	FaNodeJs,
	FaFigma,
	FaGithub,
} from "react-icons/fa";
import {
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiMongodb,
	SiFirebase,
	SiExpress,
	SiRedux,
	SiTailwindcss,
	SiStyledcomponents,
} from "react-icons/si";
const projects = [
	{
		id: 1,
		name: "Geek Watch",
		description:
			"A web app for movie geeks. It shows the recent movies and tv shows",
		stack: ["React.js", "Redux", "Styled-Components", "TMDB API"],
		status: "Live",
		url: "https://geek-watch.netlify.app/",
		repo: "https://github.com/maganijnr/geek-watch",
		owner: "Personal",
	},
	{
		id: 2,
		name: "Fleet",
		description: "An image sharing app",
		stack: ["React.js", "TailwindCss", "Sanity.io"],
		status: "Live",
		url: "https://fleet-image-sharing-app.netlify.app/",
		repo: "https://github.com/maganijnr/fleet",
		owner: "Personal",
	},
	{
		id: 3,
		name: "N-Pro",
		description: "A netflix clone web application",
		stack: ["Next.js", "TailwindCss", "Typescript", "Firebase", "TMDB API"],
		status: "Live",
		url: "https://n-pro.vercel.app/",
		repo: "https://github.com/maganijnr/N-Pro",
		owner: "Personal",
	},
	{
		id: 4,
		name: "Inventory Manager",
		description: "An inventory manager platform to manage an ecommerce site",
		stack: ["React.js", "TailwindCss", "MongoDb", "Express.js", "Node.js"],
		status: "In Progress",
		repo: "https://github.com/maganijnr/mern-inventory-frontend",
		owner: "Personal",
	},
	{
		id: 5,
		name: "Blocasset",
		description: "An inventory manager platform to manage an ecommerce site",
		stack: ["Next.js", "TailwindCss", "Typescript", "Express.js", "Node.js"],
		status: "Live",
		url: "https://blocasset.com/",
		owner: "Work",
	},
];

const techStack = [
	{ id: 1, icon: <FaHtml5 fontSize={24} color="#dff348" />, title: "HTML" },
	{ id: 2, icon: <FaCss3 fontSize={24} color="#dff348" />, title: "CSS" },
	{
		id: 3,
		icon: <SiJavascript fontSize={24} color="#dff348" />,
		title: "JavaScript",
	},
	{
		id: 4,
		icon: <SiTypescript fontSize={24} color="#dff348" />,
		title: "TypeScript",
	},
	{
		id: 5,
		icon: <FaReact fontSize={24} color="#dff348" />,
		title: "React.js",
	},
	{
		id: 6,
		icon: <SiNextdotjs fontSize={24} color="#dff348" />,
		title: "Next.js",
	},
	{
		id: 7,
		icon: <SiMongodb fontSize={24} color="#dff348" />,
		title: "MongoDb",
	},
	{
		id: 8,
		icon: <SiFirebase fontSize={24} color="#dff348" />,
		title: "Firebase",
	},
	{
		id: 9,
		icon: <SiExpress fontSize={24} color="#dff348" />,
		title: "Express",
	},
	{
		id: 10,
		icon: <FaNodeJs fontSize={24} color="#dff348" />,
		title: "Node.js",
	},
	{ id: 11, icon: <SiRedux fontSize={24} color="#dff348" />, title: "Redux" },
	{ id: 12, icon: <FaFigma fontSize={24} color="#dff348" />, title: "Figma" },
	{
		id: 13,
		icon: <FaGithub fontSize={24} color="#dff348" />,
		title: "Github",
	},
	{
		id: 14,
		icon: <SiTailwindcss fontSize={24} color="#dff348" />,
		title: "Tailwind",
	},
	{
		id: 15,
		icon: <SiStyledcomponents fontSize={24} color="#dff348" />,
		title: "SC",
	},
];

export { projects, techStack };
