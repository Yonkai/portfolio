import Head from 'next/head'
import NavMenu from '../components/NavMenu.js'
import FakeFlow from '../components/FakeFlow'
import ContentCard from '../components/ContentCard'
import theme from '../theme.js'

const books = () => (
  <>
    <Head>
      <title>Book - Frank Gunsch's Reading List</title>
      <meta name='description' content='Page for some books I have enjoyed.' />
      <meta name='author' content='Frank Gunsch' />
      <link href='https://fonts.googleapis.com/css?family=Anaheim&display=swap' rel='stylesheet' />
      <link rel='apple-touch-icon' sizes='180x180' href='../static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='../static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='../static/favicon-16x16.png' />
      <link rel='manifest' href='../static/site.webmanifest' />
      <link rel='mask-icon' href='../static/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
    {/* major */}
    <NavMenu />
    <FakeFlow />
    <ContentCard
      title={'Grokking Algorithms by Aditya Bhargava'}
      book
      description={`This is a book that to me is about 
          attempting to learn the nature of important software in a concise but 
          nonstandard way that isn’t just explanation preceding code snippets, to 
          me being able to see multiple perspectives of the same problems is
          very important to comprehension. I wish the book had gone in more detail on 
          some of the more advanced algorithms like those relating to search engines 
          because of the peculiar writing style, but it was otherwise a damn cool book.`}
      skillBadges={['Algorithmic Design']}
      URLs={['https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230']}
      anchorTexts={['See On Amazon']}
      image={'../static/BookImages/Bhargava-Algorithms-Crop-2.png'}
    />

    <style global jsx>
      {`body{
          margin:${theme.body.margin};
          // Forest theme
          background-color:${theme.body.color};
          font-family: 'Anaheim', sans-serif;
          font-display: fallback; /* Define how the browser behaves during download */
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0C6.716 0 0 6.716 0 15c8.284 0 15-6.716 15-15zM0 15c0 8.284 6.716 15 15 15 0-8.284-6.716-15-15-15zm30 0c0-8.284-6.716-15-15-15 0 8.284 6.716 15 15 15zm0 0c0 8.284-6.716 15-15 15 0-8.284 6.716-15 15-15z' fill='%23dedef8' fill-opacity='0.78' fill-rule='evenodd'/%3E%3C/svg%3E");
        }

        `}
    </style>
  </>
)

export default books