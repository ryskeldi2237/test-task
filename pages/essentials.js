import Header from "../components/Header"
import Main from "../components/Main"
import Wrapper from "../components/Wrapper"
import Slider from "../components/Slider"
import Footer from "../components/Footer"
export default function Essentials({products}) {
  return (
    <>
      <Header />
      <Main />
      <Wrapper />
      <Slider products={products}/>
      <Footer />
    </>
  )
}
export const getServerSideProps = async () => {
  try{
    const data = await fetch(`${process.env.api_url}/db`)
    const products = await data.json()
    return {
      props: {
        products:products.products
      },
    }
  }catch(error){
    console.log(error)
  }
}
