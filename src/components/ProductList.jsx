import axios from "axios";
import { useQuery } from "react-query";

const retrieveProducts = async () => {
    const response = await axios.get("http://localhost:8080/api/products");
    return response.data;
}

export default function ProductList() {
    const {data: products, error, isLoading} = useQuery({
        queryKey: ["products"]
        queryFn: retrieveProducts,
    });
    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    return (
        <>
        <div className="flex flex-col justify-center items-center w-3/5">
            <h2 className="text-3xl my-2"></h2>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <img src="{product.thumbnail}" alt="{product.title}" />
                        <p>{product.title}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}