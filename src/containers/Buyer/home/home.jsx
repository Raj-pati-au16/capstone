import Header from '../../../components/header/header'
import Footer from '../../../components/footer/footer'
import './home.css'
import { useSelector } from 'react-redux'

const Home = ()=>{
    const products = useSelector((state)=>state.products)
    console.log(products)
    return(
        <>
        <Header/>
        <h2>Login to continue....</h2>
        <div className="wrapper">
            <div className="wave"></div>
        </div>
        <Footer/>
        </>
    )
}

export default Home;