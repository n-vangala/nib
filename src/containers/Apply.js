import React from 'react';
import Button from '../components/Button';
import '../css/Apply.scss';
import TimelineItem from '../components/TimelineItem';
import Timeline from '../data/Timeline';
import prepareTypeInfo from '../data/prepareText';
import ProjectType from '../components/ProjectType';

import blob1 from '../img/apply/shapes/photo1.png';
import blob2 from '../img/apply/shapes/photo2.png';
import zoom from '../img/apply/zoom.png';

import chat from '../img/apply/atAGlance/chat.png';
import doc from '../img/apply/atAGlance/doc.png';
import network from '../img/apply/atAGlance/network.png';
import {ReactComponent as Arrow} from '../img/apply/atAGlance/arrow.svg';
import {ReactComponent as DownArrow} from '../img/apply/atAGlance/down.svg';


class Apply extends React.Component {
    virtualTablingLink = "https://berkeley.zoom.us/j/91291610391";
    coffeeChatSignUp = "https://airtable.com/shrAXBVJn9KMHPoIZ";
    interestForm = "https://airtable.com/shrDaa4bxNXoRB7gQ";
    application = "https://airtable.com/shrhW4PzvxhFM6zEi";
    caseCoachingSignUp = "https://berkeley.zoom.us/meeting/register/tJEqdOuvpzIrGtPHKIafEcR3V7zKkNE9LZzz";

    constructor(props) {
        super(props);
        this.state = ({
            exitedBanner: false,
        });
    }

    getComponent = () => {
        let now = new Date(Date.now());

        let hour = now.getHours();
        let day = now.getDate();
        if (day >= 26 && day <= 29) {
            if (hour >= 10 && hour <= 15) {
                return (
                    <div className={this.state.exitedBanner?'fadeOut zoomBannerContainer hideOnMobile':'fadeIn zoomBannerContainer hideOnMobile'}>
                        <div className="zoomBanner">
                            <a href={this.virtualTablingLink} target="_blank"><img src={zoom} alt="Zoom icon" /></a>
                            <p>2 members of NIB are on this Zoom call from Wednesday to Friday, 10am-6pm PST.
                            Click the Zoom icon to join now and chat with our members!</p>
                            <svg className="exit" onClick={this.exitBanner} width="20" viewBox="0 0 194 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="129.527" y="33.3604" width="43" height="136" transform="rotate(45 129.527 33.3604)" fill="#1C68B2"/>
                                <rect x="33.3604" y="64.4731" width="43" height="136" transform="rotate(-45 33.3604 64.4731)" fill="#1C68B2"/>
                            </svg>
                        </div>
                    </div>
                );
            }
        }
    }

    exitBanner = () => {
        this.setState({
            exitedBanner: true
        });
    }

    render() {
        document.title = 'NIB | Apply';
        let timelineInfo = Timeline.map((timelineItem) => {
            return <TimelineItem
                date={timelineItem.date}
                title={timelineItem.title}
                description={timelineItem.description}
                link={timelineItem.link}
                buttonTitle={timelineItem.buttonTitle}
                buttonIcon={timelineItem.buttonIcon}
                buttonLink={timelineItem.buttonLink}
                gCalLink={timelineItem.gCalLink}
                key={timelineItem.title}
                />
        });

        let preparationTypes = prepareTypeInfo.map((project) => {
            return <ProjectType
                img={project.img}
                alt={project.alt}
                title={project.title}
                description={project.description}
                key={project.title}
            />
        })

        return (
        <section className="applyPage">
            {this.getComponent()}
            <section className="hero">
                <div class="container">
                    <div className="left">
                        <h3>APPLY</h3>
                        <h1>Join our Family</h1>
                        <p>Interested in applying to Net Impact? Below are links to our interest form (receive email updates
                        for our events coming up) and our application form due Friday, September 4 at noon.</p>
                        <Button
                            link={this.interestForm}
                            buttonText="Interest Form"
                            external
                        />
                        <Button
                            link={this.application}
                            buttonText="Application"
                            external
                        />
                    </div>
                </div>
                <div className="right hideOnMobile">
                    <svg className="bigBlob" viewBox="0 0 650 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M502.554 212.204C541.576 245.066 628.38 256.67 643.225 281.052C658.284 305.025 600.382 341.773 581.058 406.475C561.127 471.38 579.347 565.055 550.932 563.71C522.517 562.365 449.319 466.203 387.941 449.188C326.957 432.378 277.186 494.918 227.285 513.511C177.384 532.103 124.86 507.768 77.2651 467.309C29.8841 426.442 -12.5676 369.45 11.5662 323.365C35.0923 277.482 125.812 242.302 167.751 190.978C209.509 139.04 202.093 70.7509 226.505 34.6806C250.523 -1.59575 306.762 -5.44739 354.672 6.60652C402.582 18.6604 442.771 46.4181 457.91 86.5371C473.443 126.862 463.713 179.956 502.554 212.204Z" fill="#91E9FF"/>
                    </svg>

                    <img src={blob1} className="hideOnMobile blob1" alt="3 NIB members posing" />
                    <img src={blob2} className="blob2" alt="NIB seniors relaxing on a hill" />
                </div>
            </section>
            <svg className="splashWave hideOnMobile" viewBox="0 0 1440 749" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M713.744 408.887C546.069 469.017 -2 454 -2 454V748.5H1440V0C1282.84 210.195 1071.62 83.1369 975.016 157.385C878.415 231.633 881.418 348.757 713.744 408.887Z" fill="#F0FCFE"/>
            </svg>
            <section className="preparationSection">
                <section className="container atAGlance hideOnMobile">
                    <h1>Timeline at a Glance</h1>
                    <a href="/apply#timelineSection">
                        <p>Full timeline below <DownArrow /></p>
                    </a>
                    <div className="flex">
                        <Arrow />
                        <div className="item">
                            <img src={chat} alt="chat icon" />
                            <h4>Virtual Tabling</h4>
                            <p>Wednesday, August 26 - Thursday, September 3</p>
                            <ul>
                                <li>From August 26-29 anytime 10am-6pm, come say hi <a className="underline-magical" href={this.virtualTablingLink} target="_blank"> on Zoom! </a></li>
                                <li>Sign up for a 1:1 with a NIB member next week <a className="underline-magical" href={this.coffeeChatSignUp} target="_blank"> here. </a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={network} alt="chat icon" />
                            <h4>Infosessions</h4>
                            <p>Tuesday, September 1 - Thursday, September 3</p>
                            <ul>
                                <li>Tuesday: Infosession #1</li>
                                <li>Wednesday: Infosession #2 + Case Workshop</li>
                                <li>Thursday: Case coaching session - <strong>Pre-registration is required.</strong> Please register <a className="underline-magical" href={this.caseCoachingSignUp} target="_blank"> here. </a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <img src={doc} alt="chat icon" />
                            <h4>Applications and Interviews</h4>
                            <p>Friday, September 4 - Thursday, September 10</p>
                            <ul>
                                <li>Apps are due at NOON on September 4. Apply <a className="underline-magical" href="https://airtable.com/shrhW4PzvxhFM6zEi" target="_blank"> here. </a></li>
                                <li>Check out our interview FAQ and tips <a className="underline-magical" href="/nib-app-checklist.pdf" target="_blank"> here! </a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="quickLinks container showOnMobile">
                    <h1>Quick Links</h1>
                    <a target="_blank" href={this.virtualTablingLink}>
                        <p className="description">Meet our our NIB members anytime 10 am-6 pm August 26-29 in the link below!</p>
                        <div className="zoomLink">
                            <img src={zoom} alt="Zoom link icon" className="verticallyCenter" />
                            <p className="verticallyCenter">Virtual Tabling</p>
                        </div>
                    </a>
                    <a target="_blank" href={this.coffeeChatSignUp}>
                        <p className="description">Sign up for a coffee chat with a NIB member August 31 - Sept 3!</p>
                        <div className="zoomLink">
                            <img src={zoom} alt="Zoom link icon" className="verticallyCenter" />
                            <p className="verticallyCenter">Sign up for coffee chats</p>
                        </div>
                    </a>
                    <a target="_blank" href={this.caseCoachingSignUp}>
                        <p className="description">Register for the case coaching session on September 3 so that we can prepare material for you.</p>
                        <div className="zoomLink">
                            <img src={zoom} alt="Zoom link icon" className="verticallyCenter" />
                            <p className="verticallyCenter">Pre-register for case coaching session</p>
                        </div>
                    </a>
                </section>
                <section className="container">
                    <h1>How Should I Prepare?</h1>
                    <div className="flex projectTypes">
                        {preparationTypes}
                    </div>
                    <div class="resources">
                        <Button
                            link="/faq"
                            buttonText="FAQ"
                        />
                        <Button
                            link="/nib-app-checklist.pdf"
                            buttonText="Recruiting Cheat Sheet"
                            external
                        />
                    </div>
                </section>
            </section>
            <svg className="endWave" viewBox="0 0 1440 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 264V0.0714111H-1C-1 0.0714111 1440 0.0714111 1440 264Z" fill="#F0FCFE"/>
            </svg>

            <section className="container timelineSection" id="timelineSection">
                <h1>Timeline</h1>
                <div className="timelinePhotos">
                    <img src={require("../img/apply/timelinePhotos/photo1.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo2.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo3.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo4.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo5.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo6.jpg")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo9.png")} alt="" />
                    <img src={require("../img/apply/timelinePhotos/photo8.png")} alt="" />
                            
                </div>
                <div className="timelineContainer">
                    <ul className="timeline">
                        {timelineInfo}
                    </ul>
                </div>
            </section>

            <section>
                <svg viewBox="0 0 1440 239" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                    <path d="M692.426 116.5C486.926 116.5 -2.07446 238.5 -2.07446 238.5H1440.93V0C1440.93 0 1408.43 183.5 1193.93 184.5C979.426 185.5 897.926 116.5 692.426 116.5Z" fill="#F0FCFE"/>
                </svg>
                <div className="callToAction">
                    <div>
                        <h1>Ready to Join?</h1>
                        <Button
                            link="https://airtable.com/shrDaa4bxNXoRB7gQ"
                            buttonText="Interest Form"
                            external
                        />
                    </div>
                </div>
            </section>
        </section>
        );
    }
}

export default Apply;
