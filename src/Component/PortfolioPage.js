import React from 'react'

import { DataEn } from './DataEn'



class PortfolioPage extends React.Component {

    constructor() {
        super();
        this.state =  {
           role: "student"
        }

       

    }

    // componentWillMount() {
    //     this.setState({
    //         role : ' student'
    //     })
    // }


    changeRoleToStudent = () => {
    
        this.setState({ role: 'student' });
     };
    changeRoleToAdmin = () => {

        this.setState({ role: 'admin' });

    };
    changeRoleToStore = () => {

        this.setState({ role: 'store' });
    };
  
    selectRoleImage = () => {
      if (this.state.role === 'student') {
        //   console.log('student')
          return <this.showStudentImage />
      }
      if (this.state.role === 'admin') {
        // console.log('admin')
        return <this.showAdminImage />
    }
    if (this.state.role === 'store') {
        // console.log('admin')
        return <this.showStoreImage />
    }
    }

    showStudentImage = () => {
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.studentImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.studentImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.studentImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                // <div key={index}>
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                                // </div>
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    showAdminImage = () => {
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.adminImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.adminImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.adminImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                // <div key={index}>
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                                // </div>
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    showStoreImage = () => {
        return(
            <>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    {DataEn.Portfolio.Project.image.storeImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                <li data-target="#carouselExampleIndicators" key={index} data-slide-to={index}></li>
                            )
                        }
                        
                    })}
                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={DataEn.Portfolio.Project.image.storeImage[0]} alt="alt1" className="role-image" />
                    </div>
                    {DataEn.Portfolio.Project.image.storeImage.map((item,index) => {
                        if (index !== 0) {
                            return(
                                // <div key={index}>
                                    <div key={index} className="carousel-item">
                                        <img src={item} alt="alt2" key={index} className="role-image" />
                                    </div>
                                // </div>
                            )
                        }  
                    })}
                    
                </div>
            </>
        )
    }

    render() {
        return (
            <div id="portfolio" className="App-header-portfoliopage">
                <div className="bg-blur-portfoliopage">
                    <div className="header-portfoliopage">
                        <div className='title-portfolio'>
                            <span className="title-text">PORTFOLiO</span>
                        </div>
                    </div>
                    <div className="body-portfoliopage" >
                        <div className="title-project">
                            <span className="title-project-text">{DataEn.Portfolio.Project.projectName}</span>
                        </div>
                        <div className="select-role-view">
                            <div className="view-btn-div ">
                                <button onClick={this.changeRoleToStudent} className="student-view view-btn">STUDENT</button>
                            </div>
                            <div className="view-btn-div btn-center">
                                <button onClick={this.changeRoleToAdmin} className="admin-view view-btn">ADMiN</button>
                            </div>
                            <div className="view-btn-div">
                                <button onClick={this.changeRoleToStore} className="store-view view-btn">STORE</button>
                            </div>
                        </div>
                    
                        <div className="project-image" >
                                <div className="role-image-div">
                                    <div className="carousel-box ">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                            
                                      
                                            <this.selectRoleImage Component={this.state.role} />
                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioPage;