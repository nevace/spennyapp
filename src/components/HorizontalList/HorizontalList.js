import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Container, TextContainer, Name, ItemTextContainer, Item, ItemImageContainer } from './HorizontalList.styled';
import FastImage from 'react-native-fast-image';

const HorizontalList = ({ title, data }) => {
	const renderItem = ({ item }) => {
		console.log('ddd', item);
		return (
			<Item>
				<ItemImageContainer>
					<FastImage source={{ uri: item.thumbnail }} style={{ height: 157, width: '100%' }} />
				</ItemImageContainer>
				<ItemTextContainer>
					<Name>{item.name}</Name>
				</ItemTextContainer>
			</Item>
		);
	};

	return (
		<Container>
			<TextContainer>
				<Text>{title}</Text>
				<Text>View all</Text>
			</TextContainer>
			<FlatList
				horizontal
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.zomatoId.toString()}
				showsHorizontalScrollIndicator={false}
			/>
		</Container>
	);
};

export default HorizontalList;
