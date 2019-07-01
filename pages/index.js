import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'
import SimpleIntroCard from '../components/SimpleIntroCard'
import ExtendedIntroCard from '../components/ExtendedIntroCard'

const Index = () => (
  <>
    <Head>
      <title>Frank Gunsch - Homepage</title>
      <meta name='description' content='Frank Gunsch&apos;s Website.' />
    </Head>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <ExtendedIntroCard />

    <style global jsx>
      {`body{
          margin:0;
          // Forest theme
          background-color:#011;
        }`}
    </style>
  </>
)

export default Index

// TODO: Query data information for seasons based themeing
