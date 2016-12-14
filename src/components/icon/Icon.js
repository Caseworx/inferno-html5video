/* eslint-disable */

import Inferno from 'inferno';
import Component from 'inferno-component'

const Icon = (props) => {
    const iconName = props.name ? props.name : 'play-1';
    return (
        <span className={'video-icon video-icon--' + iconName}> </span>
    );
};

export default Icon;
