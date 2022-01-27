import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import data from "../products.json";
function Product(props) {
  const [pro, setPro] = useState({ userData: [] });
  useEffect(() => {
    setPro({ ...pro, userData: data.products });

    let arr = [];
    arr = JSON.parse(localStorage.getItem("mycart"));
  }, []);
  return (
    <div className="container">
      <nav className="nav">
        <a className="nav-link text-center" href="Validation.js">
          Cart <i className="fa fa-shopping-cart mr-2"></i>{" "}
          {props.mycounter != null ? props.mycounter.length : ""}
        </a>
      </nav>

      <div className="row">
        {pro.userData.map((ele) => (
          <div className="col-sm-12 col-lg-4 col-md-4 ">
            <div className="card h-100">
              <div className="card-body">
                <div className="">
                  {" "}
                  <img
                    id="image"
                    src={`images/${ele.images}`}
                    className="card-img img-fluid"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div className="card-body bg-light text-center">
                <div className="mb-2">
                  <h6 className="font-weight-semibold mb-2">
                    {" "}
                    <a
                      href="/some/valid/uri/abc"
                      className="text-default "
                      data-abc="true"
                    >
                      {ele.pname}{" "}
                    </a>{" "}
                  </h6>{" "}
                  <a href="Validation.js" className="text-muted">
                    {" "}
                  </a>
                </div>
                Price:-<h3 className="mb-0 font-weight-bold">{ele.price}</h3>
                <div>
                  {" "}
                  <i className="fa fa-star star"></i>{" "}
                  <i className="fa fa-star star"></i>{" "}
                  <i className="fa fa-star star"></i>{" "}
                  <i className="fa fa-star star"></i>{" "}
                </div>
                <div className="text-muted mb-3">
                  {" "}
                  Quantity :-{ele.quantity}
                </div>
                <button
                  type="button"
                  onClick={() => props.addCart(ele.pno)}
                  className="btn bg-cart"
                >
                  <i className="fa fa-cart-plus mr-2"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container text-center">
        <button
          type="button"
          onClick={() => props.clearCart()}
          className="btn bg-dark"
        >
          <i className="fa fa-trash mr-2"></i> Clear Cart
        </button>
      </div>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    mycounter: state.count,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    addCart: function (id) {
      console.log(id);
      if (localStorage.getItem("mycart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("mycart"));

        if (arr.includes(id)) {
          alert("product already added");
        } else {
          arr.push(id);
          localStorage.setItem("mycart", JSON.stringify(arr));
          dispatch({ type: "defined", payload: id });
          alert("product add to cart");
        }
      } else {
        let arr = [];

        arr.push(id);
        localStorage.setItem("mycart", JSON.stringify(arr));
        dispatch({ type: "new", payload: id });
        alert("product add to cart");
      }
    },

    clearCart: function () {
      alert("All the products removed from cart");
      dispatch({ type: "reset" });
      localStorage.clear("mycart");
    },
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(Product);
