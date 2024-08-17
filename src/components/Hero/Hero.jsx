import './Hero.css'
const Hero = (props) => {
  return (
    <div className="hero">
        <img src={props.img} alt="" />
        <div className="items">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button style={{display : (props.btn.show)? "inline" : "none"}}>{props.btn.content}</button>
        </div>
    </div>
  )
}

export default Hero