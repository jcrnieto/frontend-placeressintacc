import "./card.css"

const Card = ({title, image, description, price}) => {

   
    return(
           <div className="card  rounded ms-3 mt-3 " style={{height: 400 , width: 16 +'rem'}}>
             <img src={image} className="mx-auto mt-0" style={{ height: 250,width: 250}} alt="..."/>
                <div className="card-body text-decoration-none">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text ">${price}</p>
                   <a href="#" className="btn btn-primary">comprar</a>
                </div>
           </div>
    )
}

export default Card;