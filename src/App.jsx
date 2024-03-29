import React, { useState } from 'react'
import Cart from './Components/Cart'
export const UserContext=React.createContext()
function App() {
  const [products,setProducts]=useState([
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images":"https://www.gizchina.com/wp-content/uploads/images/2020/01/1789-innckce8022903.jpg",
         
    
  },
  {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images":"https://zoneofdeals.com/storage/2023/12/iphone-x.jpg"
  },
  {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": "https://zoneofdeals.com/storage/2023/01/Samsung-Galaxy-A10.jpg"
  },
  {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": "https://5.imimg.com/data5/SELLER/Default/2023/9/339811383/BV/BR/RH/195428570/oppo-f19-mobile-phone-1000x1000.jpeg"
  },
  {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": "https://5.imimg.com/data5/SELLER/Default/2024/3/403080931/CS/ZK/OB/214654811/huawei-p60-pro-dual-sim-12gb-512gb-global-model-mna-lx9-factory-unlocked-black-1000x1000.jpg"
  }
  ])

  return (<>
  <UserContext.Provider value={{products,setProducts}}>
    <Cart/>
    </UserContext.Provider>
  </>
  
  )
}

export default App