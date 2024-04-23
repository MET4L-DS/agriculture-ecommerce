import { ProductsContainer } from "../components";
import { useSelector } from "react-redux";

import { SectionHeader } from "../components";
import { FaLeaf } from "react-icons/fa6";

const Wishlist = () => {
    const { wishlistItems } = useSelector((state) => state.wishlist);
    return (
        <div className="col-[1/-1] grid grid-cols-subgrid gap-4 px-6 py-20 font-semibold sm:col-[2/-2] sm:px-0">
            <SectionHeader
                icon={FaLeaf}
                tagColor="green-500"
                tagText="Wishilist"
                title="Wishlisted Products"
            />
            <ProductsContainer products={wishlistItems} />
        </div>
    );
};

export default Wishlist;
