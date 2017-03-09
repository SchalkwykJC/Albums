import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component {

    state = {albums: [] };

    componentWillMount() {
        
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((responseData) => {                
                this.setState({albums: responseData});
            })
            .catch((error) => {
                console.log(error);
            });
        
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>
        );
    }

    render() {

        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
