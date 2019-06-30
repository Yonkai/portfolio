import Link from 'next/link'

const ExtendedIntroCard = () => {
  return (
    <section className='extended-intro-card'>
      <p>
      Hey there! I'm Frank Gunsch, a Web Developer and person with other
      passions like walking, fishing, and making memes. Welcome to my little corner
      of the internet, please make yourself comfortable ☕☕☕.
      </p>
      <p>
      Let me give you a tour! In the <Link href='/major' as='/commited'><a>commited section</a></Link> you
      can see some my more "major" projects. In the <Link href='/minor' as='/staging'><a>staging section</a></Link> you
      can find some more minor projects and other interesting stuff.
      </p>
      <p>
      Want to get in touch? See the <Link href='/contact'><a>contact section</a></Link> to send me an email
      or even send me a letter! (Haha don't actually do that we're in the future now friend.)
      </p>
      <style jsx>
        {`
            .extended-intro-card{
                box-sizing:border-box;
                width:100%;
                border:solid darkgreen 5px;
                background-color:white;
                font-size:18px;
                padding:10px;
                line-height:1.4;
            }
            
            // inspiration for anchor styling: https://css-tricks.com/having-fun-with-link-hover-effects/
              a {
                background: linear-gradient(to bottom,#ff990052 0%,#ffedd3 100%);
                background-position: 0 100%;
                background-repeat: repeat-x;
                background-size: 30px 30px;
                color: #000;
                text-decoration: none;
                transition:background-size .5s;
            }
            
            a:hover {
                background: linear-gradient(to bottom,#ff990052 0%,#ff110080 100%);
                background-position: 0 100%;
                background-size: 200px 0px;
                background-repeat: repeat-x;
                text-decoration: none;
            }
            
            `}
      </style>
    </section>
  )
}

export default ExtendedIntroCard
