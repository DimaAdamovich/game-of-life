import React  from 'react';
import {Navbar} from "./components/Navbar";
import {Game} from "./components/Game";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {About} from "./components/About";


const App: React.FC = () => {
    return <BrowserRouter>
        <Navbar/>
        <div className='container pt-4'><Switch>
            <Route exact path={'/'} component={Game}/>
            <Route exact path={'/about'} component={About}/>
        </Switch></div>
    </BrowserRouter>
}

export default App;
