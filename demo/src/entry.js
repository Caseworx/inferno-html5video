import Inferno from 'inferno';

import Header from './components/header/Header';
import Main from './components/main/Main';


Inferno.render(
    <div className="index">
        <Header />
        <Main />
    </div>,
    document.getElementById('content')
);
