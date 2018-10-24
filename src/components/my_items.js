import React from 'react';

  const dummyData = [
    {id: 1 ,name: 'Dewalt table saw' ,initial_price: 400},
    {id: 2 ,name: 'Dewalt 12" tile saw' ,initial_price: 600},
    {id: 3 ,name: 'Ryobi pressure washer',initial_price: 200},
    {id: 4 ,name: 'Epson large format printer',initial_price: 150}
  ];
  
  const htmlData = dummyData.map( item => {
   return (
   <tr>
      <td><a href={`http://localhost:3000/show_item/${item.id}`}>click</a></td>
      <td>{item.name}</td>
      <td>{item.initial_price}</td>
    </tr>
   )
  })
  
  
  const ShowMyItems = () => {
   
    return (
    <section>
      <section>
      <span>My Items</span>
        <table>
          <tr>
            <td>view item</td>
            <td>item name</td>
            <td>asking price</td>
          </tr>
          {htmlData}
        </table>
      </section>
      <section>
      <span>My Offers</span>
        <table>
          <tr>
            <td>view item</td>
            <td>item name</td>
            <td>offer price</td>
          </tr>
          {htmlData}
        </table>
      </section>
      
    </section>
   ) 
  }
  
  export default ShowMyItems;