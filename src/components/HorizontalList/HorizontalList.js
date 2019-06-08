import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, TextContainer, Name, ItemTextContainer, Item, ItemImageContainer } from './HorizontalList.styled';
import FastImage from 'react-native-fast-image';

const HorizontalList = ({ title, data, onItemPress }) => {

	const renderItem = ({ item, index }) => {
		return (
			<Item onPress={onItemPress(data[index])}>
				<ItemImageContainer>
					<FastImage source={{ uri: item.thumbnail }} style={{ height: 157, width: '100%' }} />
				</ItemImageContainer>
				<ItemTextContainer>
					<Name>{item.name}</Name>
					{/*<Text>{item.name}</Text>*/}
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
