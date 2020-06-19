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
    {/* Spaces automatically absorbed in html. */}
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

    <ContentCard
      title={'Code: The Hidden Language of Computer Hardware and Software by Charles Petzold'}
      book
      description={`An absolutely incredible book that builds up the step-by-step process of building
       a computer alongside the fascinating and thrilling history of these events. 
       Basic first principles such as ancient encoding systems, electricity, chemistry, 
       and circuits are covered, leading into more “advanced” subjects such as logic gates, 
       adding machines, feedback loops, flip-flops, memory assemblages, and finally proceeding 
       onto microprocessors, automation, bus systems, operating systems, peripherals, and coding 
       languages like assembly and C. I completely mentally nuked this book in 3 days 
      and loved it and think every beginner programmer should read it.`}
      skillBadges={['Computers 101']}
      URLs={['https://www.amazon.com/Code-Language-Computer-Developer-Practices-ebook/dp/B00JDMPOK2/ref=sr_1_2?dchild=1&keywords=code+book&qid=1592445361&s=digital-text&sr=1-2']}
      anchorTexts={['See On Amazon']}
      image={'../static/BookImages/Hidden-Code-Edits.png'}
    />

    <ContentCard
      title={'Deep Work by Cal Newport'}
      book
      description={`Cal Newport is a computer science professor with experience at MIT, in his book 
      he goes over how he managed to both increase the productivity of his academic life while 
      experiencing an increasingly busy home life by structuring his day based on focusing intensely
      on niche subjects while avoiding small distractions and using proper scheduling, akin to
      reducing the context switches of an OS to further performance of the CPU. He talks about
      training your mind to avoid shallow distractions like the encroaching burdens of email
      and social media and their modern hyper addictive natures. He also studies and shows
      the habits and routines of successful people along the way. I highlighted probably 
      a half the book and have begun to integrate the suggested habits into my own day-to-day
      life to my own emotional and mental benefits.`}
      skillBadges={['Scheduling', 'Self care']}
      URLs={['https://www.calnewport.com/books/deep-work/']}
      anchorTexts={['See Book Page']}
      image={'../static/BookImages/Book-Deep-Work-With-Edit.png'}
    />

    <ContentCard
      title={'Cracking the Coding Interview Gayle by Laakmann McDowell'}
      book
      description={`Despite never really experiencing any of the questions in this book
       in my own numerous coding interviews for whatever reasons, I still found this book 
       super helpful in understanding the quintessential academics that undergrads experience 
       and it has benefited me quite a bit and sent me down many a rabbit holes, especially the
       sections on Big O Notation.`}
      skillBadges={['Computer Science']}
      URLs={['http://www.crackingthecodinginterview.com/']}
      anchorTexts={['See Book Page']}
      image={'../static/BookImages/Cracking-The-Coding-Interview-Edit.png'}
    />

    <ContentCard
      title={'Why We Sleep by Matthew Walker'}
      book
      description={`A book about sleeping, something that before reading I was, 
      to my surprise, absolutely terrible at, I learned a fair bit of trivia along the way. 
      This book has improved my life massively.`}
      skillBadges={['Sleep 101']}
      URLs={['https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144324/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=']}
      anchorTexts={['See Book']}
      image={'../static/BookImages/Sleep-Edit.png'}
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
