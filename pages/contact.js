import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'
import FakeFlow from '../components/FakeFlow'

const contact = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta name='description' content='Contact me.' />
    </Head>
    <NavMenu />
    <FakeFlow />
    <form method='POST' action='https://formspree.io/fgunsch.webdev@gmail.com'>
      <label for='full-name'>Full Name</label>
      <input type='text' name='name' id='full-name' placeholder='First and Last' required='' />
      <input type='email' name='email' placeholder='Your email' />
      <textarea name='message' placeholder='Your Message' />
      <button type='submit'>Send Message</button>
    </form>

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
