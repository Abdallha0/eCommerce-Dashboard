

import ImgUploaderSec  from '../components/add-products/imgUploaderSec.jsx'
import  AddProductsHeader from '../components/add-products/header.jsx'
import EnteredDataSec from '../components/add-products/enteredDataSec.jsx';
import { useState } from 'react';
import api from "../lib/api.js"

function AddProduct(){
  const [productImages, setProductImages] = useState([]);
const addProduct = (formData) => {
    return api.post("/products", formData)
   .catch((err)=>{
      console.log(err.response.data);
      throw err;
   })
   
}
return(

    < div className="w-[90%] flex flex-col items-center justify-center h-auto  bg-(--bg-primary) text-(--text-primary) rounded-2xl  m-auto ">
      <AddProductsHeader/>
      <div className='flex flex-col md:flex-row justify-between items-start gap-3'>
      <ImgUploaderSec onImagesChange={setProductImages}/>
      <EnteredDataSec addProduct={addProduct} productImages={productImages}/>
      </div>
    </div>
   
)
}

export default AddProduct