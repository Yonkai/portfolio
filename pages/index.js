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
      <link rel='shortcut icon' type='image/x-icon' href='../static/focus.ico' />
    </Head>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <ExtendedIntroCard />

    <ContentCard
      title={'Bulletin Board System'}
      description={`An anonymous text board where users can talk about a variety of subjects.`}
      borderColor={'orangered'}
      skillBadges={['RESTful', 'expressjs', 'mysql', 'javascript', 'photoshop', 'cssgrid', 'nextjs', 'nginx', 'ubuntu', 'pm2', 'react']}
      URLs={['https://github.com/Yonkai/BBS', 'https://www.daydreaming.me/']}
      anchorTexts={['View on my Github', 'View Live Version']}
    />

    <ContentCard
      title={'Sorting Algorithm Visualizer'}
      description={'Visualizes sorting algorithms through a color wheel.'}
      borderColor={'orangered'}
      skillBadges={['html', 'css', 'javascript', 'jquery']}
      URLs={['https://github.com/Yonkai/visualized-sorting-algorithms-in-javascript',
        'https://yonkai.github.io/visualized-sorting-algorithms-in-javascript/']}
      anchorTexts={['View on my Github', 'View Live Version']}
    />

    <ContentCard
      title={'Résumé'}
      description={'A brief account of a person’s education, qualifications, and previous experience, typically sent with a job application.'}
      borderColor={'skyblue'}
      skillBadges={['resume', 'PDF', 'classical media']}
      URLs={['../static/frank-gunsch-webdev-resume.pdf']}
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
        }
      `}
    </style>
  </>
)

export default Index

// TODO: Query data information for seasons based themeing
