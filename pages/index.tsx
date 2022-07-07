import type { NextPage } from 'next'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'

import Footer from '../components/Footer'
import HeadCom from '../components/HeadCom'
import Navbar from '../components/Navbar'
import getData from '../utils/api'

type props = {
  props: {dehydratedState: DehydratedState}
}
export const getStaticProps = async(): Promise<props> => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('women', getData)

  return {
      props: {
          dehydratedState: dehydrate(queryClient)
      }
  }

}

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
