import React, {Component} from 'react';
import Head from './Head';
import Navbar from './Navbar'
import trump from './trump.webp';
import './App.css';

class Water extends Component {
    render () {
        return (
            <div className={"container"}>
                <div className = "firsthead">
                    <Head />
                </div>

                <div className = "section">
                <div className="main">
                    <font size="18">
                        <b>Trump Says He’ll Suspend All Immigration Into The United States Amid Coronavirus Pandemic</b>
                    </font>
                        <img src={trump} alt = "Water Memmory" />
                        <p>President Donald Trump said Monday he would suspend all immigration into the United States for an undisclosed amount of time
                            as the nation reels from the ongoing spread of COVID-19.
                            “In light of the attack from the Invisible Enemy, as well as the need to protect the jobs of our GREAT American Citizens,”
                            Trump wrote on Twitter. “I will be signing an Executive Order to temporarily suspend immigration into the United States!”</p>
                    <p>More than 786,000 people have been infected with the coronavirus in the U.S. and more than 37,000 have died.
                        It’s unclear how wide-ranging the suspension would be, and the White House and Department of Homeland Security
                        did not immediately reply to HuffPost’s requests for clarification.
                        Trump has been forced to rein in his sweeping proclamations related to the outbreak several times before.
                        The president has touted what he called a total “ban” on travel from China as cases of the coronavirus began
                        to soar in the United States, but the mandate had notable exceptions for residents of Hong Kong, Macao and Taiwan,
                        and for U.S. citizens and permanent residents.
                        Many flights continued to operate for weeks, ferrying nearly 40,000 people to America from China.</p>
                    <p>The White House also banned all travel from Europe only to announce that the United Kingdom was exempt,
                        but then banned it once again days later. The president has been moving aggressively to reopen parts of the U.S.
                        even as cases of the virus continue to grow, despite warnings from some lawmakers and public health officials that
                        doing so too early could prove catastrophic for Americans. “We’re starting our life again,” Trump said last week while
                        announcing a three-phase plan that governors could use to jumpstart their state economies. “We’re starting rejuvenation
                        of our economy again.” But a majority of Americans have said they, too, are worried the U.S. will return to normal too soon, according to recent polls.
                        The White House has already moved to enact some pillars of the president’s hard-line immigration policies during the pandemic. The U.S. has expelled more
                        than 10,000 migrants to Mexico with minimal if any processing, citing the virus and saying doing so protects Americans’ health. Some of those people were
                        asylum seekers looking for protection, according to reports.“This is not about immigration,” Mark Morgan, the acting commissioner of U.S. Customs and Border
                        Protection, said earlier this month, according to the Los Angeles Times. “Right now this is purely about infectious disease and public health.”
                        Human rights groups have decried the measures, calling them illegal and claiming the Trump administration is using the virus as a backdoor to enact the president’s priorities.
                        The Washington Post noted that if Trump’s immigration suspension order is signed, it would be a first in U.S. history, noting that even during the devastating Spanish flu
                        outbreak in 1918, the U.S. let in tens of thousands of immigrants.</p>
                            </div>
                     </div>

             <div className="nav">
                 <Navbar />
                 </div>
            </div>


        );
    }
}

export default Water;
