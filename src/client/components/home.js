import React, { Component } from 'react'
import Logo from './Logo/Logo'

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <Logo />
            </div>
        )

    }
}

export default Home
