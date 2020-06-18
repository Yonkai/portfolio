import Link from 'next/link'

// UI Theme
import theme from '../theme.js'

const ContentCard = (props) => {
  return (
    <div className='flex-container-content-card'>
      <section className='major-content-card'>
        <h2>
          {props.title}
        </h2>
        {/* Opitional Image */}
        {props.image ? <img className='card-image' src={props.image} /> : null}
        {/* Ternary operator to check for existence */}
        {props.skillBadges ? props.skillBadges.map((name, index) => <div key={index} className='skill-badge'>{name}</div>) : null}
        <p>
          {props.description}
        </p>
        {/* Line up URLs and anchor texts here from props */}
        {/* T. operator to check for existence */}
        {props.URLs ? props.URLs.map((name, index) =>
          <Link key={index} href={name}>
            <a>{props.anchorTexts[index]}</a>
          </Link>) : null}
        {props.children}
        <style jsx>
          {`
            .flex-container-content-card{
              display:flex;
            }

            .major-content-card{
                box-sizing:border-box;
                width:95%;
                border:3px solid ${theme.border.color};
                background-color:rgb(250,250,250);
                font-size:18px;
                padding:10px;
                line-height:1.4;
                margin:auto;
                margin-top:10px;
                background-size:cover;
                background-position:top;
            }

            h2{
              margin: 0;
              color:#131313;
              ${props.book ? `font-style:italic;` : ``}
            }
            p{
              margin:5px;
              color:#131313;
            }
            
            /* inspiration for anchor styling: https://css-tricks.com/having-fun-with-link-hover-effects/ */
            a {
                background: linear-gradient(to bottom,rgba(0,0,222,.1) 0%,rgba(0,0,222,.2) 100%);
                background-position: 0 100%;
                background-repeat: repeat-x;
                background-size: 30px 30px;
                color: #000;
                text-decoration: none;
                transition:background-size .5s;
                margin-right:15px;
                border:1px solid black;
                padding:3px;
            }
            
            a:hover, a:focus{
                background:linear-gradient(to bottom,rgba(42,42,150,.1) 0%,rgba(42,42,150,.2) 100%);
                background-position: 0 100%;
                background-size: 200px 0px;
                background-repeat: repeat-x;
                text-decoration: none;
            }

            .skill-badge{
              background:white;
              color:black;
              padding:5px;
              font-size:18px;
              border:2px solid ${theme.border.color};
              margin-right:3px;
              margin-top:3px;
              display:inline-block;
              font-variant:small-caps;
            }
            
            /* basic responsive CSS for large images */
            .card-image{
              height: auto;
              width: 100%;
            }
            `}
        </style>
      </section>
    </div>
  )
}

export default ContentCard
