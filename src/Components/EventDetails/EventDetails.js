import React from 'react';
import './EventDetails.css';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  return (
    <div>
        <div className="events_bigBox">
        <h2 className="events_heading">Parivesh</h2>
        // <img className="events_pic6" src={require('./images/pic6.png')} alt=""/>
        <div className="events_smallBox">
            <div className="events_box1">
                <div className="events_pic1">
                    <img className="events_img1" src={require('./images/pic7.jpeg')} alt=""/>
                    {/* <!-- <img className="events_img01"src="images/pic4.png" alt=""> -->
                    <!-- <img className="events_img001" src="images/pic5.png" alt=""> --> */}
                </div>
                <div className="events_txt">
                    <div className="events_txtHeading">About</div>
                    <div className="events_txt1">
                        <div className="events_txt1Heading">Description</div>
                        <div className="events_subHeading">The fashion show</div>
                        <div className="events_info">
                            Parivesh the most glamorous event of the festival is ready to captivate the audience with its mesmerizing charm. Fashion is an art and Parivesh is the ultimate platform to express yourself. Boasting of a decade long legacy, the “gloss, glitz and glamour” is back with bigger and better stakes with Parivesh. Parivesh gives you the golden opportunity to emerge as a trendsetter in front of the big guns of trade and a huge ecstatic audience. The curtains would slowly draw apart to spell-bound everyone by the angelic beauty stunning the stage. If you have got the beguiling looks and the perfect vogue, Parivesh is just the event for you! This is a competition tailor made for all of you whoever aspires to be the next glamorous DIVA or HUNK. Come set the stage on fire with your charm and charisma at Aurora!!!
                        </div>
                        <div className="events_prizes">
                            <div className="events_subHeading">Prizes</div>
                            <div className="events_info">INR 1.2 Lakhs + Goodies, Benefits and Sponsored Gifts</div>
                        </div>
                        <div className="events_fee">
                            <div className="events_subHeading">Fee</div>
                            <div className="events_info">₹2500/- (Phase-2 price)</div>
                        </div>
                    </div>
                </div>
                <div className="events_people">
                    <div className="events_heads">
                        <div className="events_subHeading">Event Heads</div>
                        <ul style={{ listStyle: 'disc' }}>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                        </ul>
                    </div>
                    <div className="events_organisers">
                        <div className="events_subHeading">Event Organisers</div>
                        <ul style={{ listStyle: 'disc' }}>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                            <li> Ayush Shrivastava : phno.8823055712 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="events_smallBox">
            <div className="events_box1">
                <div className="events_txt">
                    <div className="events_txtHeading">Rules</div>
                    <div className="events_txt1">
                        <div className="events_subHeading">Rules</div>
                        <div className="events_info">
                            <ul style={{ listStyle: 'disc' }}>
                                <li>Every team will be given 8:00- 10:00 minutes for each round (stage-in to stage-out).
                                </li>
                                <li>On exceeding the time limit, negative points will be awarded.</li>
                                <li>Each team can have a maximum of 15 members.</li>
                                <li>The teams can even take help from choreographers, make-up artists or any other professionals. These, however, will not be considered as part of the team and will be under the sole responsibility of that team.</li>
                                <li>Every member of the team will be given a contest number based on which his/her judging will be done. So, if one loses it, he/she will not be given any points.</li>
                                <li>Every member of the team will be given a contest number based on which his/her judging will be done. So, if one loses it, he/she will not be given any points.</li>
                                <li>The teams are responsible for their music and sequence.</li>
                                <li>Music is to be submitted in a pen drive or a CD in a format compatible with Windows Media player (preferably in mp3 format). All music files must be submitted to the organizers at least 3 days before the event.</li>
                                <li>The lighting facility is to be availed. One person of the group can supervise the lighting; else it will be up to the lights group.</li>
                                <li>Formation of crossover teams is allowed among the students of different colleges only if they have a valid college ID of their present year.</li>
                                <li>Fire and animals in any form will not be allowed on stage or the ramp.</li>
                                <li>Vulgarity in any form will not be allowed in the competition. So, if the team feels that any stunt could be termed as vulgar, it would be best to speak of it to the organizer before performing it on the stage.</li>
                                <li>Organizers reserve the right to cancel any round and disqualify teams that do not adhere to the rules.</li>
                                <li>The decision of the judge will be considered the final one.</li>
                            </ul>
                        </div>
                        <div className="events_themes">
                            <div className="events_subHeading">Themes</div>
                            <div className="events_info">The decision of the judge will be considered the final one.</div>
                        </div>
                        <div className="events_judgingCriteria">
                            <div className="events_subHeading">Judging Criteria</div>
                            <div className="events_info">
                                <ul style={{ listStyle: 'disc' }}>
                                    <li>
                                        Designers
                                        <ul>
                                            <li>Theme Originality, Depiction of Theme, Designing, Use of Props and Accessories, Use of fabrics, innovation in masks.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li>
                                        Models 
                                        <ul>
                                            <li>Ramp walk, Stage Presence, Overall Appearance.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li>
                                        Team 
                                        <ul>
                                            <li>Choreography, Music and Narration, Coordination, Overall Performance, Contrast of the theme.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events_fee">
                            <div className="events_subHeading">Structure</div>
                            <div className="events_info">The competition comprises of a direct on-stage round. The round would be themed, wherein the teams have to design their creations based on a common theme.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="events_small">
            <div className="events_registerHeading">Register</div>
            <div className="events_txt1">
                <div className="events_txtRegisterHeading">Please login to continue with the registration process !</div>
                <button className="events_button" >
                  <Link className='text-5xl overflow-hidden text-black'>Login</Link>
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EventDetails
