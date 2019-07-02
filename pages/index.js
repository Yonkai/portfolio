// UI Theme
import theme from '../theme.js'

// React Components
import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'
import SimpleIntroCard from '../components/SimpleIntroCard'
import ExtendedIntroCard from '../components/ExtendedIntroCard'
import MajorProjectHomepageCard from '../components/MajorProjectHomepageCard'
import TemplatedContainer from '../components/TemplatedContainer'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Index = () => (
  <>
    <Head>
      <title>Frank Gunsch - Homepage</title>
      <meta name='description' content='Frank Gunsch&apos;s Website.' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
    </Head>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <ExtendedIntroCard />
    {/* Change these to templated component with a Major project render prop comp. */}
    <MajorProjectHomepageCard
      title={'Bulletin Board System'}
      description={`An anonymous text board where users can talk about a variety of subjects`}
      borderColor={'orangered'}
    />
    <MajorProjectHomepageCard
      title={'Sorting Algorithm Visualizer'}
      description={'Visualizes sorting algorithms through a color wheel.'}
      borderColor={'orangered'}
    />
    {/* Pass in icons as child component, render with props.children */}
    <TemplatedContainer borderColor={'orangered'}>
      <SocialMediaIcons />
    </TemplatedContainer>
    <TemplatedContainer
      text={'View More Projects'}
      borderColor={'orangered'}
    />
    <TemplatedContainer
      text={'Footer'}
      borderColor={'orangered'}
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

export default Index

// TODO: Query data information for seasons based themeing
