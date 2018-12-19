import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from '../components/artist-list';

const URL_ARTISTS = 'http://localhost:4500/artists';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            artists:[]
        }
    }
    componentDidMount(){
        fetch(URL_ARTISTS, {
            method:'GET'
        })
        .then(Response => Response.json())
        .then(data => {
            this.setState({artists:data})
        });

    }
    render() {
        return (
            <div>
                <Banner />
                <ArtistList allArtists= {this.state.artists}></ArtistList>
            </div>            
        );
    }
}

export default Home;


