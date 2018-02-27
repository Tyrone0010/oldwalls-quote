import * as React  from 'react';
import {Component} from 'react';
import GalleryView from '../components/gallery/GalleryView';
import Gallery from '../components/gallery/Gallery';

export default class GalleryPage extends Component{

    render() {
        return(
            <GalleryView>
                <Gallery/>
            </GalleryView>
        )
    }
}
