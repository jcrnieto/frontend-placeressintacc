import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductId } from "../../redux/actions";
import "./cardId.css";

const CardId = () => {
  const dispatch = useDispatch();
  const idProduct = useSelector((state) => state.productId);
  console.log("esto es idproduct", idProduct);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  return (
    <div class="container">
      <section class="mx-auto my-5" >
        <div class="card-id"  >
          <div
            class="bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img src={idProduct.image} class="img-fluid" />
            <a href="#!">
              <div class="mask" style={{ backgroundcolor: "FBFBFB" }}></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title font-weight-bold">
              <a>{idProduct.title}</a>
            </h5>

            <p class="card-text">{idProduct.description}</p>
            <hr class="my-4" />
            <div className="d-flex justify-content-center ">
              <a
                href="https://wa.me/+543516468746"
                class="btn btn-primary"
                target="_blank"
              >
                Consultar
              </a>
              <Link to={"/"}>
                <button type="button" class="btn btn-secondary ">
                  Volver a Menú Principal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardId;
