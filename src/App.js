import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Journal from './pages/Journal';
// import page404 from './pages/404';

import NavProvider from './nav/NavContext';

function App() {
    return (

        <section>
            
            <Router>
                <NavProvider>

                <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                {/* <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/yellow" }` }
                    component={ Journal }
                />

                <Route exact component={ page404 }/> */}
                </Switch>

                </NavProvider>
            </Router>

        </section>

);

}

export default App;