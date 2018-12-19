import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const AlbumList =(props)=> {

    const showList = ({AlbumList}) => {
        if (AlbumList) {
            return AlbumList.map((item, index) => {
                return <img key={index} src={`/images/albums/${item.cover}.jpg` } alt=""/>
            })
        }
    }

    return(
        <div className="albums_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;