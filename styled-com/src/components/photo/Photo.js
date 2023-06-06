import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://picsum.photos/v2/list

const getPhotos = () => {
    return axios.get('https://picsum.photos/v2/list')
        .then((res) => {
            return res.data;
        })
        .catch((e) => {
            console.log(e);
        })
}

const Photo = () => {
    const [image, setImage] = useState([]);
    console.log('out');
    useEffect(() => {
        //side effect
        getPhotos().then((images) => {
            console.log(images);
            setImage(images);
        });
    }, []);
    return (
        <div>
            JSON.stringify(image)
        </div>
    );
};

export default Photo;