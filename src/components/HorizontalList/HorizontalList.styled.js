import styled from 'styled-components/native';

export const Container = styled.View`
	margin-left: 10;
`;

export const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 15;
	margin-bottom: 5;
	margin-right: 10;
`;

export const ItemTextContainer = styled.View`
	padding-top: 5;
	padding-left: 10;
	padding-right: 10;
	border-color: rgba(0, 0, 0, 0.1);
	border-bottom-width: 1;
	border-left-width: 1;
	border-right-width: 1;
	border-bottom-right-radius: 5;
	border-bottom-left-radius: 5;
`;

export const ItemImageContainer = styled.View`
	border-top-left-radius: 10;
	border-top-right-radius: 10;
	overflow: hidden;
`;

export const Name = styled.Text`
	font-size: 12;
`;

export const Item = styled.TouchableOpacity`
	height: 201;
	width: 150;
	margin-right: 10;
`;

// export const TextContainer = styled.View`
// 	flex: 5;
// 	align-items: center;
// `;
