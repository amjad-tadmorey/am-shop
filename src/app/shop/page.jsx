import { Products, ShopToolBar } from "@/sections"

const Shop = () => {
    return (
        <div className="d-flex gap-5 justify-content-between">
            <ShopToolBar />
            <Products />
        </div>
    )
}

export default Shop