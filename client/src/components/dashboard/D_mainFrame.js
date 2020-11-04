import React, { Fragment } from 'react';
import D_Experience from './D-mainFrame/D_Experience';
import D_Education from './D-mainFrame/D_Education';

const D_mainFrame = ({ experience, education }) => {
    return (
        <Fragment>
            <D_Experience experience={experience} />
            <D_Education education={education}/>
        </Fragment>
    );
}

export default D_mainFrame;
