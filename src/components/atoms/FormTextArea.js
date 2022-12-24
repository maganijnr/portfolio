import styled from "styled-components";

const FormTextArea = ({ name, value, handleChange, type, placeholder }) => {
	return (
		<>
			<TextArea
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				type={type}
			></TextArea>
		</>
	);
};

export default FormTextArea;

const TextArea = styled.textarea`
	resize: none;
	width: 100%;
	height: 100px;
	padding: 8px 10px;
	border: 1px solid #dff348;
	background: transparent;
	color: #dff348;
	border-radius: 5px;
	margin-top: 10px;
	outline: none;
	font-size: 14px;
	font-weight: bold;
`;
