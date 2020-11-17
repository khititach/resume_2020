import React from 'react'
// import './style.css'

class NavBar extends React.Component{
    // listener = null;
    // state = {
    //     nav:false
    //   }
    //   componentDidMount() {
    //      window.addEventListener("scroll", this.handleScroll);
    //    }
    //    componentWillUnmount() {
    //       window.removeEventListener('scroll');
    //     }
    //    handleScroll= () => {
    //      if (window.pageYOffset > 0) {
    //          if(!this.state.nav){
    //            this.setState({ nav: true });
    //          }
    //      }else{
    //          if(this.state.nav){
    //            this.setState({ nav: false });
    //          }
    //      }
    //     }
        render() {
             return (
        
            // <nav className={`navbarItems ${this.state.nav && 'sticky'}`}>
            <nav className="navbarItems sticky">
                <span className="navbar-logo">K.KHiTiTACH</span>
                <div className="menu-icon">

                </div>
                <ul  className="nav-menu">
                    {/* <li><a className='nav-item' href="#home">HOME</a></li> */}
                    <li><a className='nav-item' href="#about">ABOUT</a></li>
                    <li><a className='nav-item' href="#education">EDUCATiON</a></li>
                    <li><a className='nav-item' href="#skill">SKiLL</a></li>
                    <li><a className='nav-item' href="#portfolio">PORTFOLiO</a></li>
                    <li><a className='nav-item' href="#contact">CONTACT</a></li>
                </ul>
            </nav>
           
        
      
    )      
        }
    
}

export default NavBar;