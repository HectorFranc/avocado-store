import { useState, useEffect } from 'react'

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
      <div>Next.js!</div>

      {productList.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  )
}

export default HomePage
