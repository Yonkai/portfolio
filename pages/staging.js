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
      <link rel='shortcut icon' type='image/x-icon' href='../static/focus.ico' />
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
      URLs={['../static/Franks-Resume.pdf']}
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
