const Card = ({title, image, description, price}) => {
      
    return(
           <div className="card border-custom-color rounded" style={{height: 400 , width: 16 +'rem'}}>
             <img src={image} className="mx-auto" style={{ height: 250,width: 250}} alt="..."/>
                <div className="card-body">
                   <h5 className="card-title">{title}</h5>
                   {/*<p className="card-text">{description}</p>*/}
                   <p className="card-text">${price}</p>
                   <a href="#" className="btn btn-primary">comprar</a>
                </div>
           </div>
    )
}

export default Card;