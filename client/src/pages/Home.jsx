import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Collapse from '@mui/material/Collapse';

function Home() {
    const [moderate, setModerate] = useState(false);
    const [advanced, setAdvanced] = useState(false);

  return (
    <div>
        <div class="jumbotron border-bottom">
				
            <div className="container jumbo-text">
                <h1 class="display-4" style={{ textDecoration: "underline" }}>Welcome to Physics Help!</h1>
                <p>This is an application that makes it easy, fun, and rewarding to learn about physics!</p>
                <hr class="my-4"/>
                <p>Test out your skills and knowledge on hundreds of our real life problems!</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Start Learning</a>
                </p>
            </div>

        </div>

        <div className="my-5 d-flex justify-content-evenly align-items-center">

            <div className='d-flex align-items-center flex-column'>
                <div onClick={() => setModerate(!moderate)} className="hover-click border shadow-lg rounded-circle bg-dark text-light" style={{ width: 200, height: 200, position: "relative" }}>
                    <h1 className='v-center'>Moderate</h1>
                </div>

                <Collapse in={moderate}>
                    <Timeline style={{ width: "500px" }} position='alternate'>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Kinematics</h3>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Newton's Laws</h3>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Energy</h3>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Dynamics</h3>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Collapse>
            </div>

            <div className='d-flex align-items-center flex-column'>
                <div onClick={() => setAdvanced(!advanced)} className="hover-click shadow rounded-circle border" style={{ width: 200, height: 200, position: "relative" }}>
                    <h1 className='v-center'>Advanced</h1>
                </div>

                <Collapse in={advanced}>
                <Timeline style={{ width: "500px" }} position='alternate'>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Kinematics</h3>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Newton's Laws</h3>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Energy</h3>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3>Dynamics</h3>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Collapse>
            </div>
        </div>

        
    </div>
  )
}

export default Home