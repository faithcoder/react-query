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
        <h1>Product List</h1>
        </>
    );
}