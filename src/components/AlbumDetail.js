import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {

    //Destructure props
    const {title, artist, thumbnail_image, image} = album;
    //Destructure styles
    const {thumbnailContainerStyle ,thumbnailStyle, headerContentStyle, albumImage, albumTitle} = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={albumTitle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={albumImage} source={{uri: image}} />
            </CardSection>
            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    },
    albumTitle: {
        fontSize: 18
    }
}

export default AlbumDetail;