

const CartItems = ({ id, name, image, color, price, amount }) => {
    return (
        <>
            <div className="cartItems_container">
                <div className="grid_five_cartItems">
                    <div className="cart_image__name">
                        <div>
                            <figure>
                                <img src={image}
                                    alt={id} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;