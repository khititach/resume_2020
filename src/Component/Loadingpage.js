import React from 'react'
import { useHistory } from 'react-router-dom';
import './LoadingPage.css'

import SakuraBG from './sakuraBG'

// import Door from '../Image/AF_door.jpg'
// import Wall from '../Image/AF_wall.jpg'

function Loadingpage() {

    const history = useHistory();
    setTimeout(() => { 
        // this.props.history.push('/');
        
        document.getElementById('wall-left').className += ' move-door'
        setInterval(() => {
            history.push('/resume')
        }, 1000);
    }, 5000)

    // const addClassName = function(event) {
    //     event.target.className.add('move-door')
    // }

    
    const handleClick =  function (){
        console.log('test')
        history.push('/')
    }

    return (
        <>
              
            <SakuraBG />
            <section className="talign-center">
                <div className="spinner icon-spinner-5" aria-hidden="true"></div>
                
            </section>
            <div>
                {/* <img id="wall-left" className="wall-img left-wall-img" src={Wall} />
                <img id="door-left" className="door-img left-door-img" src={Door} />
                <img id="door-right" className="door-img right-door-img" src={Door} />
                <img id="wall-right" className="wall-img right-wall-img" src={Wall} /> */}
            </div>

           
        </>
        
        
    )       
}


    



export default Loadingpage;