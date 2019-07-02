import Link from 'next/link'

const MajorProjectHomepageCard = (props) => {
  return (
    <div className='flex-container-major-project-homepage-card'>
      <section className='major-project-homepage-card'>
        <h2>
          {props.title}
        </h2>
        <p>
          {props.description}
        </p>
        <Link href='github.com'>
          <a>View on Github</a>
        </Link>
        <Link href='github.com'>
          <a>View Live Version</a>
        </Link>

        <style jsx>
          {`
            .flex-container-major-project-homepage-card{
              display:flex;
            }

            .major-project-homepage-card{
                box-sizing:border-box;
                width:95%;
                border:solid ${props.borderColor} 5px;
                background-color:rgb(250,250,250);
                font-size:18px;
                padding:10px;
                line-height:1.4;
                margin:auto;
                margin-top:10px;
            }

            h2{
              margin: 0;
            }
            p{
              margin:5px;
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
    </div>
  )
}

export default MajorProjectHomepageCard
