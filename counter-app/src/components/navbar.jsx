import React from 'react';

const NavBar = (props) => {
    return(
        <nav className='navbar navbar-light bg-light'>
            <a style={{fontSize: 30}} className='navbar-brand  mb-0 h1' href='#'>
                Shop{''}
                <span style={{fontSize: 25, fontWeight: 'bold', color: "white"}} className='bagde p-2 m-2 bg-secondary'>{props.totalCounters}</span>
            </a>
        </nav>
    );
};

export default NavBar;
