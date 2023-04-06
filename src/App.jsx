import { useEffect, useState } from 'react'
import Card from "./Card"
import "./app.css"

function App() {
    const [data, setData] = useState([])
    const [inp1, setInp1] = useState(null)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    function all() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setData(data))
    }
    function getOne(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setData([data]))
    }
    function inp(e){
        setInp1(e.target.value)
    }
    function getLimit(){
        fetch(`https://fakestoreapi.com/products/${inp1}`)
            .then(res => res.json())
            .then(data => setData([data]))
    }

    return (
        <div className='app'>
            <div className='container'>
                <div className="btns">
                    <button onClick={all} className='btn'>All</button>
                    <input onChange={inp} type="number" />
                    <button onClick={getLimit} className='btn btn1'>Click</button>
                </div>
                <div className="cards">
                    {data.map((item, i) => {
                        return (
                            <Card data={item} key={i} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default App