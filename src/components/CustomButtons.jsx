import styled from "styled-components";

export const CustomButton = styled.button`
	margin: 2px;
	padding: 5px 3px;
	border: 1px solid black;
	border-radius: 5px;
`;

export const ErrorButton = styled(CustomButton)`
	background-color: red;
`;