import { NextPage } from "next"

import Footer from "../components/Footer"
import HeadCom from "../components/HeadCom"
import Navbar from "../components/Navbar"
import { filterData } from "../utils/common"
import Card from "../components/Card"
import Container from "../components/Container"
import PageView from "../components/PageView"

const Gadgets:NextPage = () => {
    return(
    <PageView title="GADGETS" category="electronics" />
    )
}

export default Gadgets