import "./cardUnit.css"

const Card = ({title, image,  price}) => {

   
    return(
           <div className="card-single rounded ms-3 mt-3" style={{height: 400 , width: 16 +'rem'}}>
             <img src={image} className="mx-auto mt-0 object-fit-cover" style={{ height: 250,width: 250}} alt="..."/>
                <div className="card-body text-decoration-none">
                   <h5 className="card-title">{title}</h5>
                   <p className="card-text ">${price}</p>
                   <a href="https://wa.me/+543516468746" className="btn btn-primary">mas info...</a>
                </div>
           </div>
    )
}

export default Card;