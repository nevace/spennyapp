import React from 'react';
import { FlatList, Text } from 'react-native';
import {
	Container,
	TextContainer,
	Name,
	ItemTextContainer,
	Item,
	ItemImageContainer,
	Distance,
	DistanceContainer
} from './HorizontalList.styled';
import FastImage from 'react-native-fast-image';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const HorizontalList = ({ title, data, onItemPress, banner }) => {
	const renderItem = ({ item, index }) => {
		return (
			<Item onPress={onItemPress(data[index])}>
				<ItemImageContainer>
					<FastImage source={{ uri: item.thumbnail }} style={{ height: 157, width: '100%' }} />
				</ItemImageContainer>
				<ItemTextContainer>
					<Name>{item.name}</Name>
					{item.distance && (
						<DistanceContainer>
							<FontAwesomeIcon icon={faMapMarkerAlt} color="#37393A" size={10} />
							<Distance>{item.distance} minute walk</Distance>
						</DistanceContainer>
					)}
				</ItemTextContainer>
			</Item>
		);
	};

	return (
		<Container banner>
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
