import React from 'react'
import './index.css'

const Navbar = () => {
    return (
        <>
            <nav className="container navContainer">
                <figure className={'logo'}>
                    <img src = 'images/LOGO-3.svg' alt='teamLogo' />
                </figure>
                <div className={'navLinks'}>
                    <ul>
                        <li className={'para'}><a href="#home"><strong>Home</strong></a></li>
                        <li className={'para'}><a href="#home"><strong>Applications</strong></a></li>
                        <li className={'para'}><a href="#home"><strong>Technical Approach</strong></a></li>
                        <li className={'para'}><a href="#home"><strong>Output</strong></a></li>
                        <li className={'para'}><a href="#home"><strong>Code</strong></a></li>
                        <li className={'para'}><a href="#home"><strong>Future Scope</strong></a></li>
                    </ul>
                </div>
                <div className={'btnSection'}>     
                    <div class="say_hello">
                        <button class="hello-btn">Say Ciao!</button>
                    </div>

                    <div class="menu">
                        <img src="images/right-align.svg" alt={"AlignIcon"}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
