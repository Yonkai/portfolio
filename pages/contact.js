import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'
import FakeFlow from '../components/FakeFlow'
import ContentCard from '../components/ContentCard'

const contact = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta name='description' content='Contact me.' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
    </Head>
    <NavMenu />
    <FakeFlow />
    <ContentCard title={'Contact Form'}
      description={null}
      borderColor={'gold'}
      skillBadges={null}
      URLs={null}
      anchorTexts={[null, null]}>
      <div className='form-container'>
        <form method='POST' action='https://formspree.io/fgunsch.webdev@gmail.com'>
          <input type='text' name='name' id='full-name' placeholder='Your Full Name' required='' />
          <input type='email' name='email' placeholder='Your email' />
          <textarea name='message' placeholder='Your Message' rows='15' />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </ContentCard>

    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
          font-family: 'Anaheim', sans-serif;
        }
        * {
          box-sizing:border-box;
        }

        /* Style inputs */
          input[type=text], select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 5px solid #ccc;
          box-sizing: border-box;
        }

        /* Style inputs */
        input[type=email], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 5px solid #ccc;
        box-sizing: border-box;
        }

        textarea{
          width: 100%;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: 5px solid  #ccc;
          cursor: pointer;
          background-color: #fff8ef;
        }

        /* Style the submit button */
        button {
          width: 100%;
          background-color: white;
          border:5px solid #ccc;
          color: #011;
          padding: 14px 20px;
          margin: 8px 0;
          cursor: pointer;
        }

        /* Add a background color to the submit button on mouse-over */
        button:hover {
          background-color: grey;
        }
        
        `}
    </style>

  </>
)

export default contact
