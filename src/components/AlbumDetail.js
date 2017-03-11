import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
        <View>
            <Card>
                <Text>{props.album.title}</Text>
            </Card>
        </View>
    );
};

export default AlbumDetail;