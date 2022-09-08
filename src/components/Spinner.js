import React, { Component } from 'react'
import Loading from './loading.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center mt-5 mt-5'>
                <img src={Loading} className='text-center mt-5 mt-5' style={{ width: "5rem", height: "5rem" }} alt="Loader" />
            </div>
        )
    }
}

export default Spinner