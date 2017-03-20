import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

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
            //<Text key={album.title}>{album.title}</Text>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {

        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
