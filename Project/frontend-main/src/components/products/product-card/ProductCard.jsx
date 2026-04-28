import React from "react";

function ProductCard() {
  return (
    <div className="card w-25">
      <div className="card-header">
        <img src="" width={"100%"} height={270} alt="" />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6 ">
            <h4 className="text-success fw-bold">name</h4>
          </div>
          <div className="col-6">****</div>
        </div>
        <div className="row">
          <div className="col-6">60000</div>
          <div className="col-6">electronics</div>
        </div>
        <div className="row">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <button className="btn w-100 btn-outline-success">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
