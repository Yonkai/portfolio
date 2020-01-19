// UI Theme
import theme from '../theme.js'

// React Components
import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'
import SimpleIntroCard from '../components/SimpleIntroCard'
import ExtendedIntroCard from '../components/ExtendedIntroCard'
import ContentCard from '../components/ContentCard'
import TemplatedContainer from '../components/TemplatedContainer'
import SocialMediaIcons from '../components/SocialMediaIcons'
import ViewMoreHomepageButton from '../components/ViewMoreHomepageButton'
import ContactCard from '../components/ContactCard'

const Index = () => (
  <>
    <Head>
      <title>Frank Gunsch - Homepage</title>
      <meta name='description' content='Frank Gunsch&apos;s Website.' />
      <meta name='author' content='Frank Gunsch, fgunsch.webdev@gmail.com' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
      <link rel='apple-touch-icon' sizes='180x180' href='../static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='../static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='../static/favicon-16x16.png' />
      <link rel='manifest' href='../static/site.webmanifest' />
      <link rel='mask-icon' href='../static/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <ExtendedIntroCard />

    <ContentCard
      title={'Bulletin Board System'}
      description={`An anonymous text board where users can talk about a variety of subjects.`}
      skillBadges={['RESTful', 'axios', 'expressjs', 'mysql', 'javascript', 'photoshop', 'cssgrid', 'nextjs', 'nginx', 'ubuntu', 'pm2', 'react']}
      URLs={['https://github.com/Yonkai/BBS', 'https://www.daydreaming.me/']}
      anchorTexts={['View on my Github', 'View Live']}
      image={'../static/CardImages/BBS2.png'}
    />

    <ContentCard
      title={'Sorting Algorithm Visualizer'}
      description={'Visualizes sorting algorithms through a color wheel.'}
      skillBadges={['html', 'css', 'javascript', 'jquery']}
      URLs={['https://github.com/Yonkai/visualized-sorting-algorithms-in-javascript',
        'https://yonkai.github.io/visualized-sorting-algorithms-in-javascript/']}
      anchorTexts={['View on my Github', 'View Live']}
      image={'../static/CardImages/Color_Wheel_Wide.png'}
    />

    <ContentCard
      title={'SVG Quiz Generator'}
      description={'Generates Geography Quizes based on SVG files, example is using a custom made SVG map of a fantasy world.'}
      skillBadges={['html', 'css', 'javascript', 'Inkscape', 'Create-React-App', 'Lodash', 'SVG', 'react-maps', 'css-grid']}
      URLs={['https://github.com/Yonkai/map-quiz-game-generator',
        'https://osrsmapquiz.com/']}
      anchorTexts={['View on my Github', 'View Live']}
      image={'../static/CardImages/SVG.png'}
    />

    <ContentCard
      title={'Résumé'}
      description={'A brief account of a person’s education, qualifications, and previous experience, typically sent with a job application.'}
      skillBadges={['resume', 'PDF', 'classical media']}
      URLs={['../static/Frank Gunsch - Resume 2020.pdf']}
      anchorTexts={['View Resume']}
    />

    {/* Make a seperate component for view more work button then pass it */}
    <ContactCard />

    <TemplatedContainer borderColor={'orangered'} padding={'10px'}>
      <ViewMoreHomepageButton />
    </TemplatedContainer>

    {/* Pass in icons as child component, render with props.children, or pass in a component as a prop and render that. */}
    <TemplatedContainer borderColor={'orangered'} text={'fgunsch.webdev@gmail.com'}>
      <SocialMediaIcons />
    </TemplatedContainer>
    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
          font-family: 'Anaheim', sans-serif;
          font-display: fallback; /* Define how the browser behaves during download */
        }
      `}
    </style>
  </>
)

export default Index

// TODO: Query data information for seasons based themeing
