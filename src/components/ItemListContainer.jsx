function ItemListContainer(props) {

  return (
    <a className="text-3xl hover:text-white" href={props.link}>{props.greeting}</a>
   
   
  )
}

export default ItemListContainer