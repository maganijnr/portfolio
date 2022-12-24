import styled from "styled-components";

const FormInput = ({ name, value, handleChange, type, placeholder }) => {
	return (
		<>
			<Input
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				type={type}
			/>
		</>
	);
};

export default FormInput;

const Input = styled.input`
	width: 100%;
	height: 40px;
	padding: 8px 10px;
	border: 1px solid #dff348;
	background: transparent;
	color: #dff348;
	border-radius: 5px;
	margin-top: 15px;
	outline: none;
	font-size: 14px;
	font-weight: bold;
	letter-spacing: 0.5px;
`;
