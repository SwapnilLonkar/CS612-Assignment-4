import React, {Component} from 'react';
import Head from './Head';
import Navbar from './Navbar';
import Blog1 from './Blog1';
import Second from './Second';
import Third from './Third';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';



class App extends Component {
  render () {

    return (
      <Router>
        <Switch>
          <Route path="/" exact render= {() => {

           return (


        <div className={"container"}>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Assignment 4</title>

              <div className = "firsthead">
                <Head />
              </div>


                <div className = "main">
                    <div className ="card1">
                        <div className = "transbox3">
                            <h4><i>Date: Apr 20, 2020</i></h4>
                            <h1><Link to = {{pathname: '/Blog1'}}>Trump Says He’ll Suspend All Immigration Into
                            The United States Amid Coronavirus Pandemic</Link></h1>
                             <p>President Donald Trump said Monday he would suspend all immigration into the United States for
                            an undisclosed amount of time as the nation reels from the ongoing spread of COVID-19.
                            “In light of the attack from the Invisible Enemy, as well as the need to protect the jobs of
                            our GREAT American Citizens,” Trump wrote on Twitter. “I will be signing an Executive Order to
                            temporarily suspend immigration into the United States!” </p>
                        </div>
                    </div>
                    <br/>
                    <div className="card2">
                    <div className="transbox2">
                      <h4><i>Date: Apr 10, 2020</i></h4>
                      <h1><Link to = {{pathname: '/second'}}>Apple and Google are building coronavirus tracking into iOS and Android</Link></h1>
                      <p>Apple and Google are jointly building software into iPhone and Android devices to help track the spread of coronavirus by
                          telling users if they contacted an infected person and are potentially sick themselves.
                          The new project is slated for release in May.</p>
                    </div>
                  </div>
                  <br/>
                  <div className="card3">
                    <div className="transbox1">
                      <font color="black">
                        <h4><i>Date:Apr 20, 2020  </i></h4>
                        <h1><Link to = {{pathname: '/third'}}>Facebook launches map to help identify coronavirus hot spots early</Link></h1>
                        <p>Facebook has partnered with researchers at Carnegie Mellon University to build a map meant to track symptoms and potentially
                            predict coronavirus hot spots. Mark Zuckerberg announced the effort in a Washington Post op-ed,
                            writing "We’re hopeful that this will help governments and public health officials around the world
                            who might not otherwise have this kind of precise data to make decisions in the weeks and months ahead."
                        </p>

                      </font>
                    </div>
                 </div>
                </div>

                <div className={"nav"}>
                  <Navbar/>
                </div>



                </div>


       );
      }}/>

<Route exact path = '/Blog1' component={Blog1} />
        <Route exact path = '/second' component={Second} />
        <Route exact path = '/third' component={Third} />

      </Switch>
  </Router>
);
}
}



export default App;

