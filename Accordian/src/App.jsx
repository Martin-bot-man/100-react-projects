import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, settotalPages]= useState(0);

const fetchProducts = async ()=>{
  const res = await fetch('https://dummyjson.com/products?limit=100');
  const data = await res.json();


  if(data && data.products){
    setProducts(data.products)
  }

}
  useEffect(()=>{
    fetchProducts()

  })

  const selectPageHandler = (selectedPage)=> {
    setpage(selectedPage);
  }

  return (
    
      <div className="App">
        <h1>React Pagination application</h1>
        {products.length && (
          <div className='pagination'>
            <span onClick={()=> selectPageHandler(page-1)} >Back</span>
          </div>
        )}


      </div>
  )
}

export default App
