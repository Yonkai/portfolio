import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'
import FakeFlow from '../components/FakeFlow'
import ContactCard from '../components/ContactCard'

const contact = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta name='description' content='Contact me.' />
      <meta name='author' content='Frank Gunsch, fgunsch.webdev@gmail.com' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
    </Head>
    <NavMenu />
    <FakeFlow />
    <ContactCard />

    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
          font-family: 'Anaheim', sans-serif;
        }`}
    </style>

  </>
)

export default contact
