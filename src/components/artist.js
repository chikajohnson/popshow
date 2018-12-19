import React from 'react';

import Header from './header';

const REQUEST_URL = ` http://localhost:4500/artists`;

class Artist extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            artist: {}
        }
    }

    componentDidMount(){
        console.log(this.props);
        fetch(`${REQUEST_URL}/${this.props.match.params.artistId}`, {
            method:'GET'
        }).then(response => response.json())
        .then(data => {
            this.setState({
                artist:data
            })
        })
    }

    render(){
        return (
            <div>
                <Header />
                <div className="artist_bio">
                    <div className="avatar">
                        <span style = {{background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div> 
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text" >{this.state.artist.bio}</div>
                    </div>
                </div> 
            </div>
        )
    }
}


export default Artist;


