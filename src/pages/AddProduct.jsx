

import ImgUploaderSec  from '../components/add-products/imgUploaderSec.jsx'
import  AddProductsHeader from '../components/add-products/header.jsx'
import EnteredDataSec from '../components/add-products/enteredDataSec.jsx';
function AddProduct(){
return(

    < div className="w-[90%] fle items-center justify-center h-auto p-5 bg-(--bg-primary) text-(--text-primary) rounded-2xl - m-auto mt-5">
      <AddProductsHeader/>
      <ImgUploaderSec/>
      <EnteredDataSec/>
    </div>
   
)
}

export default AddProduct