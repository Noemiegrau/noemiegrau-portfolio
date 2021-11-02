import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journal from './pages/Journal';
import page404 from './pages/404';
import WorksChelcieFans from './pages/WorksChelcieFans';
import WorksRunBuddy from './pages/WorksRunBuddy';
import WorksFoodForward from './pages/WorksFoodForward';
import WorksPawpals from './pages/WorksPawpals';
import WorksPasswordGenerator from './pages/WorksPasswordGenerator';
import WorksCodingQuiz from './pages/WorksCodingQuiz';
import WorksShopShop from './pages/WorksShopShop';
import WorksBookSearchEngine from './pages/WorksBookSearchEngine';
import WorksTaskMasterPro from './pages/WorksTaskMasterPro';
import WorksWeatherDashboard from './pages/WorksWeatherDashboard';

import NavProvider from './nav/NavContext';

// import About from './pages/About';
// import Contacts from './pages/Contacts';
// import JournalSinglePost from './pages/JournalSinglePost';
// import SearchResults from './pages/SearchResults';
// import Works from './pages/Works';
// import WorksInside from './pages/WorksInside';
// import UserInterface from './pages/UserInterface';
// import Nav from './nav/Nav';
// import WorksPizzaHunt from './pages/WorksPizzaHunt';
// import WorksTeamProfileGenerator from './pages/WorksTeamProfileGenerator';


function App() {
    return (

        <section>
            
            <Router>
                <NavProvider>

                <Switch>
                {/* <Home /> */}
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/home" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/yellow" }` }
                    component={ Journal }
                /> 
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-chelciefans" }` }
                    component={ WorksChelcieFans }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-runbuddy" }` }
                    component={ WorksRunBuddy }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-foodforward" }` }
                    component={ WorksFoodForward }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-pawpals" }` }
                    component={ WorksPawpals }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-passwordgenerator" }` }
                    component={ WorksPasswordGenerator }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-codingquiz" }` }
                    component={ WorksCodingQuiz }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-shopshop" }` }
                    component={ WorksShopShop }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-booksearchengine" }` }
                    component={ WorksBookSearchEngine }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-taskmasterpro" }` }
                    component={ WorksTaskMasterPro }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/works-weatherdashboard" }` }
                    component={ WorksWeatherDashboard }
                />
                <Route exact component={ page404 }/>
                </Switch>


                </NavProvider>
            </Router>

        </section>

);

}



// function App() {
//     return (

//         // <div className='appContainer'>
// 		// 	<NavProvider>
// 		// 		<Nav />
// 		// 		<Home />
// 		// 	</NavProvider>
// 		// </div>

// <Router>
//     <Switch> 
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/" }` }
//                     component={ Home }
//                 /> 
//                   <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/about" }` }
//                     component={ About }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/about" }` }
//                     component={ About }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/contacts" }` } 
//                     component={ Contacts }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/journal" }` }
//                     component={ Journal }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/journal-single-post" }` }
//                     component={ JournalSinglePost }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
//                     component={ SearchResults }
//                 />
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/works" }` }
//                     component={ Works }
//                 />
//                 {/* <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/ui" }` }
//                     component={ UserInterface }
//                 /> */}
//                 <Route
//                     exact
//                     path={ `${ process.env.PUBLIC_URL + "/works-inside" }` }
//                     component={ WorksInside }
//                 />   
//                  <Route exact component={ page404 }/> 
//              </Switch> 
//              </Router>

// );

// }

export default App;