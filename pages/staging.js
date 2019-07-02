import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'

const minor = () => (
  <>
    <Head>
      <title>Staging - Page for Other Programming Stuff</title>
      <meta name='description' content='Other programming content' />
    </Head>
    {/* <div>minor</div> */}
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

export default minor
