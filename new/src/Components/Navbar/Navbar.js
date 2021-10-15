import React,{useState, useEffect} from 'react';
import './Navbar.css';
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['navbar'];
      if(scrolled){
        navbarClasses.push('scrolled');
      }
    return (
        
    <div className="navbar">
            <div className={navbarClasses.join(" ")}>
                <div className="navigation">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                </li>
                    </ul>
                    </div>
           </div>
   </div>
    );
}