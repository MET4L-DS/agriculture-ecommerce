import { ProductsContainer } from "../components";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const { wishlistItems } = useSelector((state) => state.wishlist);
    return (
        <div className="col-[2/-2] grid grid-cols-subgrid">
            <ProductsContainer products={wishlistItems} />
        </div>
    );
};

export default Wishlist;
