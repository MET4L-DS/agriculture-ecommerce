import { useSelector } from "react-redux";
import { ProductsContainer } from "../components";

const Products = () => {
    const { products } = useSelector((state) => state.main);

    return (
        <div className="col-[1/-1] grid grid-cols-subgrid px-6 py-20 sm:col-[2/-2] sm:px-0">
            <ProductsContainer products={products} />
        </div>
    );
};

export default Products;
