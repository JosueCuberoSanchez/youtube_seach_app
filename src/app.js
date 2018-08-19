import React from 'react';

import VideoContainer from './containers/videos/';

// styles
import './assets/scss/base.scss';

const App = () => {
        return (
            <div>
                <header />
                <VideoContainer />
                <footer />
            </div>
        )
};

export default App;