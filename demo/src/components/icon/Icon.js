import Inferno from 'inferno';

const Icon = (props) => {
    const name = props.name ? props.name : 'github-circled-alt2';
    return (
        <span className={'icon icon--' + name}> </span>
    );
};

export default Icon;
