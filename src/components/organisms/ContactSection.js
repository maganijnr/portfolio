import { useState, useRef } from "react";
import styled from "styled-components";
import FormInput from "../atoms/FormInput";
import FormTextArea from "../atoms/FormTextArea";
import ConatinerWrapper from "../molecules/ConatinerWrapper";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAIL_SERVICE_ID,
				process.env.REACT_APP_EMAIL_DEFAULT_TEMPLATE,
				form.current,
				process.env.REACT_APP_EMAIL_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setName("");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<ContactBody>
			<ConatinerWrapper>
				<H3>Contact Me</H3>
				<P>Got any project for me or a job?</P>
				{/* <FormBody onSubmit={handleSubmit} ref={form}>
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
						name="message"
						type="text"
						placeholder="What do you have for me?"
						value={message}
						handleChange={(e) => setMessage(e.target.value)}
					/>
					<YellowButton type="submit">Submit</YellowButton>
				</FormBody> */}
			</ConatinerWrapper>
		</ContactBody>
	);
};

export default ContactSection;

const ContactBody = styled.div`
	padding: 20px 0px 20px;
	background: #dff348;

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
