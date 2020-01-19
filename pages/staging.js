import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import theme from '../theme.js'
import FakeFlow from '../components/FakeFlow'
import ContentCard from '../components/ContentCard'

const minor = () => (
  <>
    <Head>
      <title>Staging - Page for Other Content</title>
      <meta name='description' content='Other programming content' />
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
    {/* <div>minor</div> */}
    <NavMenu />
    <FakeFlow />
    {/* TODO: Hero image background + Form */}
    {/* TODO: Change these to flex-box or css-grid collapsing items */}

    <ContentCard
      title={'Résumé'}
      description={'A brief account of a person’s education, qualifications, and previous experience, typically sent with a job application.'}
      borderColor={'skyblue'}
      skillBadges={['resume', 'PDF', 'Classical media']}
      URLs={['../static/Frank-Gunsch-CV.pdf']}
      anchorTexts={['View Resume']}
    />

    <ContentCard
      title={'Codepen'}
      description={'I use codepen to test code and make silly animations.'}
      borderColor={'skyblue'}
      skillBadges={['canvasjs', 'css-animations']}
      URLs={['https://codepen.io/Yonkai/']}
      anchorTexts={['View my Codepen']}
    />

    <ContentCard
      title={'Bogoloops'}
      description={'How fast can you browser execute 1,000,000 empty for loops?'}
      borderColor={'skyblue'}
      skillBadges={['jquery', 'sass', 'HTML5Boilerplate']}
      URLs={['https://github.com/Yonkai/bogoloops', 'https://yonkai.github.io/bogoloops/']}
      anchorTexts={['View on my Github', 'View Live']}
    />

    <ContentCard
      title={'Infinite Monkey Grid'}
      description={'If you give a monkey a typewriter eventually it will write shakespear. Generates random data.'}
      borderColor={'skyblue'}
      skillBadges={['css-grid', 'HTML5Boilerplate', 'javascript']}
      URLs={['https://github.com/Yonkai/infinitegrid', 'https://yonkai.github.io/infinitegrid/']}
      anchorTexts={['View on my Github', 'View Live']}
    />

    <ContentCard
      title={'Ironman Generator'}
      description={'(WIP) Application that lets people generate "fantasy" game characters.'}
      borderColor={'skyblue'}
      skillBadges={['css-grid', 'React', 'javascript', 'npm', 'LoDash', 'Data Scraping']}
      URLs={['https://github.com/Yonkai/ironman-challenge-maker']}
      anchorTexts={['View on my Github']}
    />

    <ContentCard
      title={'SVG Quiz Generator'}
      description={'Generates Geography Quizes based on SVG files, example is using a custom made SVG map of a fantasy world.'}
      borderColor={'orangered'}
      skillBadges={['html', 'css', 'javascript', 'Inkscape', 'Create-React-App', 'Lodash', 'SVG', 'react-maps', 'css-grid']}
      URLs={['https://github.com/Yonkai/map-quiz-game-generator',
        'https://osrsmapquiz.com/']}
      anchorTexts={['View on my Github', 'View Live']}
    />

    <ContentCard
      title={'Galaxy Names API'}
      description={'Selecting random and semi-random galaxy names, this API is out of this world.'}
      borderColor={'orangered'}
      skillBadges={['javascript', 'npm', 'NodeJS']}
      URLs={['https://www.npmjs.com/package/galaxies-data',
        'https://github.com/Yonkai/random-galaxy-name']}
      anchorTexts={['View on NPM', 'View on Github']}
    />
    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
          font-family: 'Anaheim', sans-serif;
          font-display: fallback; /* Define how the browser behaves during download */
        }`}
    </style>
  </>
)

export default minor
