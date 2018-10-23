import React from 'react';
import NavDropdown from './dropdown';


  const dummyData = [
    {id: 1 ,name: 'Dewalt table saw' ,initial_price: 400},
    {id: 2 ,name: 'Dewalt 12" tile saw' ,initial_price: 600},
    {id: 3 ,name: 'Ryobi pressure washer',initial_price: 200},
    {id: 4 ,name: 'Epson large format printer',initial_price: 150}
  ];
  
  const htmlData = dummyData.map( item => {
   return (
   <div>
      <div className="table_display"><a href={`http://localhost:3000/show_item/${item.id}`}>click</a></div>
      <div className="table_display">{item.name}</div>
      <div className="table_display">{item.initial_price}</div>
    </div>
   )
  })
  
  
  const ShowMyItems = () => {
   
    return (
    <section>
      <NavDropdown/>
      <section>
      <span>My Items</span>
      <div class="table_display">view item</div>
      <div class="table_display">item name</div>
      <div class="table_display">asking price</div> 
      {htmlData}
      </section>
      <section>
      <span>My Offers</span>
      <div class="table_display">view item</div>
      <div class="table_display">item name</div>
      <div class="table_display">offer price</div> 
      {htmlData}
      </section>
      
    </section>
   ) 
  }
  
  export default ShowMyItems;