export default ({ data }) => {
    return (
        <div className="card">
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="price">
                <h2>Category: <span>{data.category}</span></h2>
                <h2>Price : <span>{data.price}</span></h2>
            </div>
        </div>
    )

}