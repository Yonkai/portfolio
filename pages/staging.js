import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'
import FakeFlow from '../components/FakeFlow'
import ContentCard from '../components/ContentCard'

const minor = () => (
  <>
    <Head>
      <title>Staging - Page for Other Programming Stuff</title>
      <meta name='description' content='Other programming content' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
    </Head>
    {/* <div>minor</div> */}
    <NavMenu />
    <FakeFlow />
    {/* TODO: Hero image background + Form */}
    {/* TODO: Change these to flex-box or css-grid collapsing items */}

    <ContentCard
      title={'Résumé'}
      description={'A brief account of a person’s education, qualifications, and previous experience, typically sent with a job application.'}
      borderColor={'skyblue'}
      skillBadges={['resume', 'PDF', 'legacy media']}
      URLs={['https://github.com/Yonkai/visualized-sorting-algorithms-in-javascript']}
      anchorTexts={['View Resume']}
    />

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

export default minor
