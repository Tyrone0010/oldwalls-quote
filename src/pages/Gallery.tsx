import * as React  from 'react';
import {Component} from 'react';
import GalleryView from '../components/gallery/GalleryView';
import Gallery from '../components/gallery/Gallery';

export default class GalleryPAge extends React.Component<any, any>{

    constructor (props: any){
        super(props);
    }

    render() {
        return(
            <GalleryView {...this.props}>
                <Gallery {...this.props}/>
            </GalleryView>
        )
    }
}
