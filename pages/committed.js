import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import ContentCard from '../components/ContentCard'
import FakeFlow from '../components/FakeFlow'
import theme from '../theme.js'

const major = () => (
  <>
    <Head>
      <title>Commited - Page for Major Projects</title>
      <meta name='description' content='Page for major projects.' />
      <meta name='author' content='Frank Gunsch' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
      <link rel='shortcut icon' type='image/x-icon' href='../static/focus.ico' />
    </Head>
    {/* major */}
    <NavMenu />
    <FakeFlow />
    <ContentCard
      title={'Bulletin Board System'}
      description={`An anonymous text board where users can talk about a variety of subjects.`}
      borderColor={'orangered'}
      skillBadges={['RESTful', 'axios', 'expressjs', 'mysql', 'javascript', 'cssgrid', 'nextjs', 'nginx', 'ubuntu', 'pm2', 'react']}
      URLs={['https://github.com/Yonkai/BBS', 'https://www.daydreaming.me/']}
      anchorTexts={['View on Github', 'View Live Version']}
    />

    <ContentCard
      title={'Sorting Algorithm Visualizer'}
      description={'Visualizes sorting algorithms through a color wheel.'}
      borderColor={'orangered'}
      skillBadges={['html', 'css', 'javascript', 'jquery']}
      URLs={['https://github.com/Yonkai/visualized-sorting-algorithms-in-javascript',
        'https://yonkai.github.io/visualized-sorting-algorithms-in-javascript/']}
      anchorTexts={['View on Github', 'View Live Version']}
    />

    <ContentCard
      title={'Portfolio'}
      description={'You\'re on it!'}
      borderColor={'orangered'}
      skillBadges={['NextJS', 'css-in-js', 'javascript', 'SEO']}
      URLs={['https://github.com/Yonkai/portfolio']}
      anchorTexts={['View on Github']}
    />
    <ContentCard
      title={'Banking Site Remake'}
      description={'Remake of frontend index of a local bank near me'}
      borderColor={'orangered'}
      skillBadges={['Responsive Design', 'css-grid', 'sass']}
      URLs={['https://github.com/Yonkai/local-banking-site-remade',
        'https://yonkai.github.io/local-banking-site-remade/#']}
      anchorTexts={['View on Github', 'View Live Version']}
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
