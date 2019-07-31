import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from "./about";
import Pictures from "./pictures";
import Archive from "./archive";

const Main = () => (
    <Switch>
        <Route path="/archive" component={Archive} />
        <Route path="/pictures" component={Pictures}/>
        <Route path="/about" component={About}/>
    </Switch>
)
export default Main;