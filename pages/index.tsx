import type { NextPage } from 'next'
import Footer from '../components/Footer'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <HeadCom title="home" />
      <main>
        <Navbar />
        <p>Hello</p>
      </main>

      <Footer /> 
    </div>
  )
}

export default Home
