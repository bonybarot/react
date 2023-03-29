import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';


const Header = () => {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    let object1 ={"/home":"home", "/features":"features" , "/pricing": "Pricing" ,"/about":"About"}
    let content = Object.entries(object1).map((data,key)=>{
   
     
      return <MDBNavbarItem key={key}>
      <Link className="nav-link" to={data[0]}>{data[1]}</Link>
        {/* <MDBNavbarLink href='features'>Features</MDBNavbarLink> */}
      </MDBNavbarItem>

      
    })
   

    
    return (
        <>
          
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            
                {content}
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
  
        </>
    );
};

export default Header;