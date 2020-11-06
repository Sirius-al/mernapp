import React, { Fragment } from 'react'

const Spinner = () => {
    return (
    <Fragment>
        <img src={require('./loading.gif')} style={{
            width: '50px',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            zIndex: 999
            
            }} alt="loading_Gif" />
    </Fragment>)
}

export default Spinner;
