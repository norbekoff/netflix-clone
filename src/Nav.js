
import React, {useEffect, useState} from 'react'

function Nav() {

    const [isTrue, SetTrue] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll', e => {
           if(window.scrollY > 100) {
               SetTrue(true)
           } else SetTrue(false)
       });


       return () => {
           window.removeEventListener('scroll')
       };


    }, [])


    return (
        <div className={`nav ${isTrue && "nav__black"}`}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="netflix logo"
            className='nav__logo'
            />
            <img 
            src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" 
            alt="netflix logo"
            className='nav__avatar'
            />
        </div>
    )
}

export default Nav
