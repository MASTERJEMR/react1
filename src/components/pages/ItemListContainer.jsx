import { useState, useEffect } from "react"
import CartWidget from "../CartWidget"
import Products from "../Products"
function ItemListContainer(){

const [characters,setCharacters]=useState([])
useEffect(()=>{
        fakeStore();
    },[])
const fakeStore=async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const jsonData=await response.json()
    setCharacters(jsonData);
    
}

return(
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8">
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
    </>
)
}
export default ItemListContainer