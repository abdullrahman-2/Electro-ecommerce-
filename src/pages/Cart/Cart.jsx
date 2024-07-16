import { useDispatch, useSelector } from "react-redux";
import { RemoveItem, removeAll, increaseQuantity, decreaseQuantity } from "../rtk/Slice/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);

  function increaseQuantityHandler(product) {
    dispatch(increaseQuantity(product.id));
  }

  function decreaseQuantityHandler(product) {
    dispatch(decreaseQuantity(product.id));
  }

  function DeleteHandler(product) {
    dispatch(RemoveItem(product.id));
  }

  return (
    <div className="container">
      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Shopping cart</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
              <button onClick={() => dispatch(removeAll())} className="btn btn-danger">
                Remove All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={"cart item" + product.id}>
                <td colSpan="4">
                  <div className="row">
                    <div className="col-md-3">
                      <img height={100} src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="col-md-3">{product.title}</div>
                    <div className="col-md-3">
                      <button
                        onClick={() => increaseQuantityHandler(product)}
                        style={{ width: 70, margin: 10 }}
                        className="btn btn-info"
                      >
                        +
                      </button>
                      {product.quantity}
                      <button
                        onClick={() => decreaseQuantityHandler(product)}
                        style={{ width: 70, marginLeft: 10 }}
                        className="btn btn-info"
                      >
                        -
                      </button>
                    </div>
                    <div className="col-md-3">
                      <span style={{ fontWeight: 700, fontSize: 30 }}>
                        {product.price * product.quantity}$
                      </span>
                      <br />
                      <button className="btn btn-danger" onClick={() => DeleteHandler(product)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;