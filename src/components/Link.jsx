function Link(props) {
    return (
      
      <a className="text-3xl hover:text-white" href={props.link}>{props.text}</a>
    )
  }
  
  export default Link