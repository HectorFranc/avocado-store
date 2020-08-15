import Navbar from '@components/Navbar/Navbar'
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>This is a footer</footer>
    </>
  )
}

export default Layout
