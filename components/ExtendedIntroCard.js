import Link from 'next/link'

const ExtendedIntroCard = (props) => {
  return (
    <div className='flex-container-extended-intro-card'>
      <section className='extended-intro-card'>
        <p>
      Let me give you a tour! In the <Link href='/committed'><a>committed section</a></Link> you
      can see some my more "major" projects. In the <Link href='/staging'><a>staging section</a></Link> you
      can find some more "minor" projects and other approximately programming related content. Enjoy your stay ☕☕☕.
        </p>
        <p>
      Want to get in touch? See the <Link href='/contact'><a>contact section</a></Link>.
        </p>
        <style jsx>
          {`
            .flex-container-extended-intro-card{
              display:flex;
            }

            p{
              color:black;
               
            } 

            .extended-intro-card{
                box-sizing:border-box;
                width:95%;
                border:solid orangered 5px;
                background-color:rgb(250,250,250);
                font-size:18px;
                padding:10px;
                line-height:1.4;
                margin:auto;
                margin-top:20px;
                box-shadow:0px 0px 4px 4px;
                background-size:cover;
                background-position:center;
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
            
            a:hover, a:focus {
                background: linear-gradient(to bottom,#ff990052 0%,#ff110080 100%);
                background-position: 0 100%;
                background-size: 200px 0px;
                background-repeat: repeat-x;
                text-decoration: none;
            }
            
            `}
        </style>
      </section>
    </div>
  )
}

export default ExtendedIntroCard
