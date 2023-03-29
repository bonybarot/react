import React from 'react';
import Card from "./Card.jsx"
import Prod3 from "./Prod3.jpg"

const Props = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-3'><Card title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)" img="https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL480_QL65_.jpg"/></div>
        <div className='col-md-3'><Card title="Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage)" img ="https://m.media-amazon.com/images/I/71293gyogZL._AC_UL480_QL65_.jpg"  descreption ="from web link"/></div>
        <div className='col-md-3'><Card title="Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) " img = {Prod3} descreption ="from src folder"/></div>
        <div className='col-md-3'><Card title="Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage) "img = {process.env.PUBLIC_URL + '/Prod4.jpg'}   descreption =" from public folder" /></div>
      </div>
    </>
  );
};

export default Props;











