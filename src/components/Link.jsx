function Link(props) {
    return (
      
      <a className="text-2xl hover:text-white" href={props.link}>{props.text}</a>
    )
  }
  
  export default Link