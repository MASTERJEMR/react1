import { useState } from "react";
import { useParams } from "react-router-dom"
function Product(){
    const params = useParams()
    const {id}=useParams()
    const [product,setProduct]= useState({})
   


    fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            //.then(json=>console.log(json))
            .then((product)=>{
                console.log(product)
                setProduct(product)
            }),[];

    return(
        <div key={product.id}>  
          <div className="flex items-center" ><h2>Producto: {product.title}</h2></div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  "> 

                <div>
                    <img src={product.image} alt={product.title} 
                    srcset={`${product.image}  300w, ${product.image} 768w, ${product.image} 1280w`} 
                    sizes="(max-width: 300px) 300px, (max-width: 768px) 400px, 500px"
                    />
                </div>
                <div className="content-center">
                    <p>
                        
                        <h3>DESCRIPCION:</h3>{product.description}
                        <br/><h3>CATEGORIA:</h3>{product.category}
                        <br/><h3>PRECIO:</h3>$ {product.price}
                        <br />
                    </p>
                </div>

                
            
            </div>

        </div>
    )
}
export default Product 