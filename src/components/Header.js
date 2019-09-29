import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Chunjun (Paul) Jia</strong>, <br /> a fourth-year Computer Science <br /> 
                    undergrad at Georgia Tech.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
