import Layout from '@components/Layout/Layout'
import fetch from 'isomorphic-unfetch'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps = async () => {
  const response = await fetch('https://avocado-store.vercel.app/api/avo')
  const { data: productList } = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
