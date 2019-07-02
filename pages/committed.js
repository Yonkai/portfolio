import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import MajorProjectHomepageCard from '../components/MajorProjectHomepageCard'
import FakeFlow from '../components/FakeFlow'
import theme from '../theme.js'

const major = () => (
  <>
    <Head>
      <title>Commited - Page for Major Projects</title>
      <meta name='description' content='Page for major projects.' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
    </Head>
    {/* <div>major</div> */}
    <NavMenu />
    <FakeFlow />
    {/* Change these to templated component with a Major project render prop comp. */}
    <MajorProjectHomepageCard
      title={'Bulletin Board System'}
      description={`An anonymous text board where users can talk about a variety of subjects.`}
      borderColor={'orangered'}
      skillBadges={['RESTful', 'expressjs', 'mysql', 'javascript', 'cssgrid', 'nextjs', 'nginx', 'ubuntu', 'pm2', 'react']}
    />
    <MajorProjectHomepageCard
      title={'Sorting Algorithm Visualizer'}
      description={'Visualizes sorting algorithms through a color wheel.'}
      borderColor={'orangered'}
      skillBadges={['html', 'css', 'javascript', 'jquery']}
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

export default major
