import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Products from "../Products"
function ItemListContainer(){
    const params = useParams()
    console.log(params.cat)
    let a ="https://fakestoreapi.com/products/"
    if(params.cat){
        console.log("el valor de a es "+a)
        a="https://fakestoreapi.com/products/category/"+params.cat
        console.log(" el nuevo valor de a es  "+a)
    }
        


const [characters,setCharacters]=useState([])
useEffect(()=>{
        fakeStore();
    },[params.cat])

const fakeStore=async()=>{
    const response=await fetch(a)
    const jsonData=await response.json()
    setCharacters(jsonData);
}

return(

    <div className="grid gap-x-8 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8">
        {characters.map((character)=>{
                //console.log(character)
                return <Products
                id={character.id}
                title={character.title}
                image={character.image}
                description={character.description}
                price={character.price}
                />
            })}
    </div>
    
)
}
export default ItemListContainer