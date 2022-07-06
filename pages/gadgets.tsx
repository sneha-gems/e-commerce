import { NextPage } from "next"
import Card from "../components/Card"
import Container from "../components/Container"

import Footer from "../components/Footer"
import HeadCom from "../components/HeadCom"
import Navbar from "../components/Navbar"

type props = {
    props: {data: any}
}

export const getStaticProps = async(): Promise<props> => {
    const res = await fetch("https://fakestoreapi.com/products").then((res) => res.json()).catch((err) => console.log(err))

    return {
        props: {
            data: res
        }
    }

}

const Women:NextPage = ({data}: any) => {
    const womenCloth: Array<{}> = []
    data.map((item: any) => {
        if(item?.category === "electronics"){
            womenCloth.push(item)
        }
    })
    return(
    <>
    <HeadCom title="women" />
    <Navbar/>
    <Container>
    {womenCloth && womenCloth.map((item: any, index: number) => {
        return(<>
        <Card data={item} key={index}/>
        </>)
    })}
    </Container>
    <Footer/>
    </>
    )
}

export default Women