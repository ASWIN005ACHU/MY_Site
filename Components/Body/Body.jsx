import React from 'react'
import Reactimage from '../../Pictures/ReactLogo.png'
import Mongoimage from '../../Pictures/MongodbLogo.jpg'
import Nodeimage from '../../Pictures/NodehsLogo.png'
import './Body.css'

function Body(props) {
    let togglemode = props.DarkMode ? "Dark" : "";
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
                                <h4 style={{marginLeft:30}} className='ml-5 pl-5 pr-5 mr-5'>My Name Is ASWINRAJ</h4>
                                <p  style={{marginLeft:30}} className='mt-3 ml-5 pl-5 pr-5 mr-5'>Hey i am Aswinraj.I am 17 years old.I'm a MERN STACK DEVELOPER.I've 2 years of coding exprirence.my city is Kerala,Palakkad,Alathur.I have some project in my <a>GitHub</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body