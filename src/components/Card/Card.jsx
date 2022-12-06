const Card = ({title, image, description, price}) => {
   
    return(
           <>
           <div className="card" style={{width: 18 +'rem'}}>
             <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text">{description}</p>
                   <p className="card-text">{price}</p>
                   <a href="#" className="btn btn-primary">comprar</a>
                </div>
           </div>
           </>
    )
}

export default Card;