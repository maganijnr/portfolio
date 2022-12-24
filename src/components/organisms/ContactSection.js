import { useState } from "react";
import styled from "styled-components";
import FormInput from "../atoms/FormInput";
import FormTextArea from "../atoms/FormTextArea";
import ConatinerWrapper from "../molecules/ConatinerWrapper";

const ContactSection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(name, email, msg);
	};

	return (
		<ContactBody>
			<ConatinerWrapper>
				<H3>Contact Me</H3>
				<P>Got any project for me or a job?</P>
				<FormBody onSubmit={handleSubmit}>
					<H2>What do you have for me?</H2>
					<FormInput
						name="name"
						type="text"
						placeholder="What's your name?"
						value={name}
						handleChange={(e) => setName(e.target.value)}
					/>
					<FormInput
						name="email"
						type="email"
						placeholder="What's your mail?"
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
					/>

					<FormTextArea
						name="msg"
						type="text"
						placeholder="What's do you have for me?"
						value={msg}
						handleChange={(e) => setMsg(e.target.value)}
					/>
					<YellowButton type="submit">Submit</YellowButton>
				</FormBody>
			</ConatinerWrapper>
		</ContactBody>
	);
};

export default ContactSection;

const ContactBody = styled.div`
	padding: 20px 0px 20px;
	background: #dff348;
	min-height: 40vh;

	@media screen and (max-width: 768px) {
		padding: 40px 0px 40px;
	}
`;

const H3 = styled.h3`
	color: #171219;
	font-weight: bold;
	font-size: 20px;
`;

const H2 = styled.h2`
	color: #dff348;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
`;

const P = styled.p`
	font-size: 16px;
	font-weight: normal;
	line-height: 25px;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

const FormBody = styled.form`
	color: #dff348;
	background: #171219;
	width: 450px;
	margin: 50px auto 0px;
	padding: 15px 10px;
	border-radius: 10px;

	@media screen and (max-width: 640px) {
		width: 100%;
		margin: 30px auto 0px;
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
	width: 100%;

	@media screen and (max-width: 640px) {
		font-size: 18px;
	}
`;
