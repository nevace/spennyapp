import React from 'react';
import { BannerStyled, Text } from './Banner.styled';

const Banner = ({ text }) => (
	<BannerStyled>
		<Text>{text}</Text>
	</BannerStyled>
);

export default Banner;
