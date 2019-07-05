import Link from 'next/link'

const ContentCard = (props) => {
  return (
    <div className='flex-container-content-card'>
      <section className='major-content-card'>
        <h2>
          {props.title}
        </h2>
        {props.skillBadges.map((name, index) => <div key={index} className='skill-badge'>{name}</div>)}

        <p>
          {props.description}
        </p>
        {/* Line up URLs and anchor texts here from props */}
        {props.URLs.map((name, index) =>
          <Link key={index} href={name}>
            <a>{props.anchorTexts[index]}</a>
          </Link>)}
        <style jsx>
          {`
            .flex-container-content-card{
              display:flex;
            }

            .major-content-card{
                box-sizing:border-box;
                width:95%;
                border:solid ${props.borderColor} 5px;
                background-color:rgb(250,250,250);
                font-size:18px;
                padding:10px;
                line-height:1.4;
                margin:auto;
                margin-top:10px;
                background-image:url('../static/${props.imagePath}');
                background-size:cover;
                background-position:top;
            }

            h2{
              margin: 0;
              color:#131313;
            }
            p{
              margin:5px;
              color:#131313;
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
                margin-right:15px;
                border:3px solid orange;
            }
            
            a:hover, a:focus{
                background: linear-gradient(to bottom,#ff990052 0%,#ff110080 100%);
                background-position: 0 100%;
                background-size: 200px 0px;
                background-repeat: repeat-x;
                text-decoration: none;
            }

            .skill-badge{
              background:black;
              color:white;
              padding:5px;
              font-size:16px;
              border:3px solid green;
              margin-right:3px;
              margin-top:3px;
              display:inline-block;
              font-variant:small-caps;
            }
            
            `}
        </style>
      </section>
    </div>
  )
}

export default ContentCard
