import React, { Component } from 'react'
import Product from './Product';
import {} from './products.css'
export class ProductData extends Component {
    products = [
        {
            "title":"Strawberry",
            "type":"Fruits",
            "description":"Fresh Strawberries are available",
            "url":"https://tse3.mm.bing.net/th/id/OIP.z4hSFG3emrA9_Kz4vppiPwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$87.50",
            "rating":4
        },
        {
            "title":"Milk",
            "type":"Dairy",
            "description":"Homely Item",
            "url":"https://tse1.mm.bing.net/th/id/OIP.2uw1ufzt3eqSZuf0tX_SNQHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$27.50",
            "rating":5
        },
        {
            "title":"SoftDrinks",
            "type":"Drinks",
            "description":"Instant Drink",
            "url":"https://tse2.mm.bing.net/th/id/OIP.oG2V25yg3Nsh_6MX-ja_wAHaEm?w=295&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$27.50",
            "rating":5
        },
       
        {
            "title":"Mixed Dry Fruits",
            "type":"Dry fruit",
            "description":"Organic item",
            "url":"https://tse2.mm.bing.net/th/id/OIP.pdIjr_uWgdGfTZ7pQGa__QHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price":"$108.00",
            "rating":5
        }
        ]
        constructor(){
            super();
            this.state={
               products: this.products
            }
        }
  render() {
    return (
        <div>
        
        {this.state.products.map((element)=>{
             return <div className='features' key={element.price}>
             <Product  title={element.title} price={element.price} description={element.description} imageUrl={element.url}/> 
         </div>
        })}
            
        </div>
     

    )
  }
}

export default ProductData