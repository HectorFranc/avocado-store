import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((data) => data.json())
      .then(({ data }) => setProductList(data))
  }, [])

  return (
    <div>
      <Navbar />
      <div>Next.js!</div>

      {productList.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  )
}

export default HomePage
