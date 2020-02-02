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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23dedef8' fill-opacity='0.5' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          `
      }
    </style>
  </>
)

export default Index

// TODO: Query data information for seasons based themeing
