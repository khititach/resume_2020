import React from 'react'

// import PrimarySchool from '../Image/TPV Logo.webp' 
// import HighSchool from '../Image/highSchool.png' 
// import University from '../Image/800px-Naresuanuniversitylogo.png' 
import { DataEn } from './DataEn'

function EducationPage () {
    return (
        <div  id="education" className="App-header-educationpage">
            <div className="bg-blur-educationpage">
                 <div className="bg-education">
                    <div className="container-fluid">
                        <div className="header-education pt-4 pb-4" >
                            <span>
                                EDUCATiON
                            </span>
                        </div>
                        <div className="body-education">
                            <div className="line-education">
                                <div className="Line"></div>
                                {/* <div className="Circle1"></div>
                                <div className="Circle2"></div>
                                <div className="Circle3"></div> */}
                            </div>
                            <div className="university">
                                <div className="bg-university">
                                    <p>{DataEn.Education.University.Name}</p>
                                    <p>{DataEn.Education.University.Since}</p>
                                    <p>{DataEn.Education.University.Address}</p>
                                </div>
                                {/* <div className="Circle1"></div> */}
                            </div>
                            
                                
                            <div className="high-school">
                                <div className="bg-high-school">
                                    <p>{DataEn.Education.HighSchool.Name}</p>
                                    <p>{DataEn.Education.HighSchool.Since}</p>
                                    <p>{DataEn.Education.HighSchool.Address}</p>
                                </div>
                            </div>
                            
                            <div className="primary-school">
                                <div className="bg-primary-school">
                                    <p>{DataEn.Education.PrimarySchool.Name}</p>
                                    <p>{DataEn.Education.PrimarySchool.Since}</p>
                                    <p>{DataEn.Education.PrimarySchool.Address}</p>
                                </div>
                            
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
           
        </div>
    )
}

export default EducationPage;