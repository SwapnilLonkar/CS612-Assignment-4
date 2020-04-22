import React, {Component} from 'react';
import Head from './Head';
import Navbar from './Navbar'
import fbcovidmap from './fbcovidmap.webp';
import './App.css';

class Third extends Component {
    render () {
        return (
            <div className={"container"}>
                <div className = "firsthead">
                    <Head />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="8">
                        <b>The Mathematics of Relationships, AI and Human.</b>
                    </font>

                <img src={fbcovidmap} alt = "Water Memmory" />
                        <p>Facebook has partnered with researchers at Carnegie Mellon University to build a map meant to track
                            symptoms and potentially predict coronavirus hot spots. Mark Zuckerberg announced the effort in a Washington
                            Post op-ed, writing "We’re hopeful that this will help governments and public health officials around the world
                            who might not otherwise have this kind of precise data to make decisions in the weeks and months ahead."
                            Here's how it works. Facebook has been showing a survey to users within the social network. Users can take this survey
                            if they want to — it's entirely voluntary. They'll answer questions about whether they're experiencing symptoms associated
                            with COVID-19, such as cough or fever.
                        </p>
                    <p>That data then gets sent to the research team at Carnegie Mellon (not Facebook), which uses it to create population models of people experiencing symptoms. The idea is that symptoms are the
                        "precursor" to hospital visits, so an uptick in symptoms in a particular area could help officials decide where to send health resources.
                    </p>
                    <p>
                        "The survey responses combined with other data such as medical claims and medical testing, will enable the CMU team to generate
                        estimates of disease activity that are more reflective of reality than what is now available from positive coronavirus tests alone," an announcement of the project from Carnegie Mellon reads.
                        The project has resulted in a heat map of sorts, showing the percentage of the population, broken down by county, that's self-reporting coronavirus symptoms.
                    </p>
                    <p>
                        Researchers are encouraged by the results. After its initial survey of 1 million people, symptom
                        reports "correlate" with testing data. The fact that the number of self-reported symptoms are proportional to
                        official test numbers is what makes the researchers think the survey is accurate and useful.The University of Maryland
                        is also partnering with Facebook and CMU to expand the survey, and Google is
                        contributing some data, too, through a survey served to its users.
                    </p>
                    <p>Facebook has already launched a coronavirus information hub, and has a "data for good" portal that gives
                        researchers access to population data.
                        Previously, Facebook refuted reports that it was helping the government by providing location data to assist contact tracing.
                        This mantle was taken up by Google and Apple, who are collaborating on Bluetooth-based contact tracing programs. With the recent
                        scrutiny of privacy in Big Tech, these companies have to walk the line between providing useful information and not infringing on
                        people's privacy.

                    </p>
                            </div>
                     </div>

             <div className="nav">
                 <Navbar />
                 </div>
            </div>



        );
    }
}

export default Third;
