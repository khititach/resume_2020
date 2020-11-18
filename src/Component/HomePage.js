import * as React  from 'react';

// import './style.scss'
import MyProfileImage from '../Image/my.jpg'

import SakuraBG from './sakuraBG'

import Navbar from './navbar'
import SkillPage from './SkillPage'
import EducationPage from './EducationPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'

import { DataEn } from './DataEn'
// import {DataTh} from './DataTh';

function Homepage () {

        
         return (
            <>
             <Navbar />
                <div id="about" className="App-header-homepage">
                    <SakuraBG />
                    <div className="col-12 name-text pt-5">
                        
                        <div className="name-text-bg">
                            <p className="first-name">
                                {DataEn.PersonData.FirstName}
                                
                            </p>
                            <p className="last-name">   {DataEn.PersonData.LastName}</p>
                            <p className="job-position">{DataEn.PersonData.JobPosition}</p>
                        </div>
                                    
                    </div>
                    <div className="container-fluid ">
                        <div className="col-content">
                            <div className="Profile-image-div">
                                <img className="Profile-image" alt="myProfile" src={MyProfileImage} />
                                
                            </div>
                            <div className="about-me-text">
                                <div>
                                    <p  className="Header-about-me">ABOUT ME</p> 
                                </div>
                                <div className="Body-about-me font-th-lang">
                                    <p className="text-th">{DataEn.PersonData.AboutMe}</p>                                    
                                    <div className="col-content col-contect-div bottom-div">
                                        <div className="birth-div">
                                            <div className="header-hbd">
                                                <span>BiRTH</span>
                                            </div>
                                            <div className="body-hbd">
                                                <span>AUGUST 16, 1996</span>
                                            </div>
                                        </div>
                                        <div className="address-div">
                                            <div className="header-address">
                                                <span>ADDRESS</span>
                                            </div>
                                            <div className="body-address">
                                                <span>406 Moo.4 Tambon Huchang Amphur Banrai Uthai thani 61180</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <EducationPage />
                <SkillPage />
                <PortfolioPage />
                <ContactPage />
            </>
        )
    
    
}

export default Homepage;