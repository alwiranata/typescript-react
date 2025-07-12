import { useSearchParams } from "react-router"

const ListProductPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSearchParams = (sortValue: string  , id: string) => {
        searchParams.set("v", sortValue )
        searchParams.set("t", id)
        setSearchParams(searchParams)
    }
    return (
        <>
            <h1>List Product</h1>
            <ul>
                <li>Sort : {searchParams.get("v")}</li>
                <li>id :{searchParams.get("t")}</li>
            </ul>
            <div style={{display: "flex" , gap: 8, flexDirection :"row"}}>
            <button onClick={() => handleSearchParams("price-asc" , "20")}>Sort Price asc</button>
            <button onClick={() => handleSearchParams("price-decs" , "30")}>Sort Price desc</button>
            <button onClick={() => handleSearchParams("popular" , "40")}>popular</button>
            </div>
        </>
    )
}

export default ListProductPage