import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import Home from './components/home';
import Artist from './components/artist';

const App =()=> {
    return (
        <Router>
            <div>
                <Route exact   path='/' component={Home}></Route>
                <Route path='/artist/:artistId' component={Artist}></Route>
            </div>
        </Router>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));



