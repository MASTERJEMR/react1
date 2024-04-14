tipo de letra
Pizzara  https://www.fontsquirrel.com/fonts/FFF-Tusj 

Para formatear todo con alt + shif + f

1)useState se ejecuta una sola vez
const[usuarios,SetUsuarios]=useState([])
3)UseEffect 
formas para escribir useEffect(function) o useEffect(function,[]) para estas solo se ejecutaría una sola vez



UseEffect(()=>{}, []
)
//2) Eso pasa por primera vez y cada vez que cambia algo en el componente
retun ()

Para use effect si deseo que se ejecute una sola vez 
se deja el vector vacio por ejemplo
useEffect(()=>{
		window.addEventListener("resize",
		()=>{console.log("width",window.innerWidth)
		}
	)
},[])


Promesas y Maps
Promesas
 fetch => promise
cache = promise

observación
fetch ("/users")
.then() // Avisa cuando la appi se ejecuta bien
.cacth()// Avisa cuando pasa y esta mal
.finally() // Avisa cuando termina 

un ejemplo de crear una promesa desde cero es 
//res  rej son objetos que se crean por convención
const miPromesa = new promise ((res,rej)=>{ } )
console.log(miPromesa  )

Un ejemplo que funciona y puede ser utilizado para el proyecto  si se realiza la compra en un lapso de tiempo se puede 
mostrar un mensaje
const miPromesa = new Promise( (res,rej) =>{
        console.log("Pidiendo...")
        setTimeout( ()=>{
                console.log("Consegui algo de una api recien")
                res()
            },5000 )
    })

miPromesa.then(()=>{ console.log("Bien")})
miPromesa.cacth(()=>{ console.log("Mal")})
miPromesa.finally(()=>{ console.log("Finalizado")})



