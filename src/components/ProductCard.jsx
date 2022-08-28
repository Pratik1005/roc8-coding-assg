const ProductCard = ({data}) => {
  const {imgSrc, title, oldPrice, newPrice, discount, size} = data;
  return (
    <div className="card-vertical-ctn mg-sm">
      <img className="card-img" src={imgSrc} alt={title} />
      <div className="card-title">
        <h4>{title}</h4>
        <span className="material-icons">favorite</span>
      </div>
      <p className="card-subtitle">Size: {size}</p>
      <div className="card-pricing">
        <p className="card-price fw-bold">₹{newPrice}</p>
        <p className="card-price-cut">₹{oldPrice}</p>
        <p className="card-price-discount">save ({discount}%)</p>
      </div>
      <button className="btn btn-icon-text">
        <span className="material-icons">shopping_cart</span>
        Add to cart
      </button>
    </div>
  );
};

export {ProductCard};
