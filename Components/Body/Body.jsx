import React from 'react'
import Reactimage from '../../Pictures/ReactLogo.png'
import Mongoimage from '../../Pictures/MongodbLogo.jpg'
import Nodeimage from '../../Pictures/NodehsLogo.png'
import github from '../../Pictures/GitHub-Mark.png'
import Linkedin from '../../Pictures/LinkedInLogo.jpg'
import instagram from '../../Pictures/instagram.png'
import './Body.css'
import { useHref } from 'react-router-dom'

function Body(props) {
    let togglemode = props.DarkMode ? "Dark" : "";
    let about = "My name is Aswinraj.I am 17 years old.Over 3 years of strong experience as Full Stack web developer with solid understanding of front - end technologies, MVC frameworks, Restful web services and Data Base designing. Strong knowledge in MERN Stack with vast experience in building Web Applications, used React. js for client side, Node."
    return (
        <>
            <section>
                <div className="section1">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <img src={Reactimage} className="react mt-5" />
                            </div>
                            <div className="col-4">
                                <img src={Mongoimage} className="mongo mt-5 pt-5 float-left" />
                            </div>
                            <div className="col-4">
                                <img src={Nodeimage} className="node mt-5 pt-5" />
                            </div>
                            <div className="col-10">
                                <h1 className='txt'>Hey : ) </h1>
                                <br />
                                <h1 className='text'>I am a MERN STACK DEVELOPER</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className={`section2${togglemode}`}>
                            <div className="col-10 ml-5 mr-2 mt-5 pl-2 pr-2">
                                <h4 className='aboutme pr-5 mr-5'>My Name Is ASWINRAJ</h4>
                                <p  className='aboutme mt-3 pr-5 mr-5'>{about}</p>
                                <div className="links col-10 ml-5 pl-5">
                                    <a href="https://github.com/" className='github'><img src={github} className="github"/></a>
                                    <br />
                                    <a href="https://www.linkedin.com/" className='Linkedin'><img src={Linkedin} className="Linkedin"/></a>
                                    <br />
                                    <a href="https://www.instagram.com/" className='insta'><img src={instagram} className="insta"/></a>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body