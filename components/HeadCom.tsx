import Head from "next/head"

type props = {
    title: string
}

const HeadCom = ({title}: props) => {
    return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
    )
}

export default HeadCom