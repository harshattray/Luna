import React from "react";
import {
	Inner,
	Container,
	SubTitle,
	Title,
	Pane,
	Image,
	Item,
} from "./styles/homefrontstyles";

export default function Homefront({
	children,
	direction = "row",
	...restProps
}) {
	return (
		<Item direction={direction}>
			<Inner>{children}</Inner>
		</Item>
	);
}

export const HomefrontContainer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const HomefrontTitle = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

export const HomefrontSubTitle = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
export const HomefrontImage = ({ ...restProps }) => {
	return <Image {...restProps}></Image>;
};
export const HomefrontPane = ({ children, ...restProps }) => {
	return <Pane {...restProps}>{children}</Pane>;
};
