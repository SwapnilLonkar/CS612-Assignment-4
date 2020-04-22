import React, {Component} from 'react';
import Head from './Head';
import Navbar from './Navbar'
import applegoogle from './applegoogle.jpg';
import './App.css';

class Second extends Component {
    render () {
        return (
            <div className={"container"}>
                <div className = "firsthead">
                    <Head />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="18">
                        <b>Apple and Google are building coronavirus tracking into iOS and Android</b>
                    </font>

                <img src={applegoogle} alt = "not found" />
                        <p>Apple and Google are jointly building software into iPhone and Android devices to help track the spread of coronavirus
                            by telling users if they contacted an infected person and are potentially sick themselves. The new project is slated for
                            release in May. Medical experts know that contact tracing is vital to public health during disease outbreaks. The technique
                            has been one key to the success of countries like South Korea in turning back the tide of the pandemic inside their own borders.
                            This Silicon Valley effort will be one of the biggest American attempts to closely track the spread of coronavirus.
                            Crucially, it is not the national coronavirus surveillance system that the White House was reportedly seeking</p>
                    <p>
                        To build the voluntary contact tracing network, the new tech will rely on Bluetooth, typically used for short-distance
                        communication between devices. When you test positive for the virus, you enter that information into an app on your phone, and other
                        people who have been near you in the previous 14 days are alerted. Your own information remains private. At first, the software will simply
                        consist of an API (application programming interface) that lets Apple and Android phones, which use distinct operating systems, swap data
                        with each other. Users will have to separately download apps created by health authorities that use the API as the underlying system for
                        exchanging data. The data will be accessible to public health officials but will not include information that is personally identifiable
                        either to the companies or to governments. Later on, the two firms plan to add contact -tracing software directly into the operating systems, so that it will be on more people’s phones by default.</p>

                    <p>Wide adoption will be necessary to make this an effective tool. Singapore’s app,
                        TraceTogether, which similarly uses Bluetooth to track the disease, was adopted by 12% of the population.
                        Health authorities will also need to create apps that can use the API. Finally, the idea all still hinges on
                        there being widespread, rapid, reliable testing that lets people know they’re sick in the first place.
                        The companies have released draft technical documentation on the Bluetooth and cryptography specifications and framework documentation.</p>
                    </div>
                     </div>

             <div className="nav">
                 <Navbar />
                 </div>
            </div>



        );
    }
}

export default Second;
