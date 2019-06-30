import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'
import SimpleIntroCard from '../components/SimpleIntroCard'
import ExtendedIntroCard from '../components/ExtendedIntroCard'

const Index = () => (
  <>
    <Head>
      <title>Frank Gunsch</title>
      <meta name='description' content='Frank Gunsch&apos;s Website; here you can find a selection of my web dev
       stuff and other content.' />
    </Head>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <ExtendedIntroCard />

    <style global jsx>
      {`
        body{
          margin:0;
          // Forest theme
          background-color:#011;
        }
      `}
    </style>
  </>
)

export default Index

// Query data information for seasons based themeing
