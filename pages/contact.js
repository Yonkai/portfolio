import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'

const contact = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta name='description' content='Contact me.' />
    </Head>
    {/* <div>contact</div> */}
    <NavMenu />

    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
        }`}
    </style>

  </>
)

export default contact
