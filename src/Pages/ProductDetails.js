import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams()
    console.log("params", params)
    return <div>
        <h1>
            ProductDetails
        </h1>
    </div>
}

export default ProductDetails