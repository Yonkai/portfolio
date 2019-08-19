import Link from 'next/link'
import theme from '../theme.js'

const ViewMoreButtonHomepage = (props) => {
  return (
    <div className='view-more-button-container'>
      <div className='view-more-button'>
        <Link href='/committed'>
          <a className='view-more-text'>See More</a>
        </Link>
      </div>
      <style jsx>
        {`.view-more-button{
            display:flex;
            justify-items:center;
        }
        // inspiration for anchor styling: https://css-tricks.com/having-fun-with-link-hover-effects/
        a {
            width:100%;
            background:linear-gradient(to bottom,rgba(0,0,222,.1) 0%,rgba(0,0,222,.2) 100%);
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 50px 50px;
            font-size:35px;
            color: #000;
            text-decoration: none;
            transition:background-size .5s;
            margin:auto;
            text-align:center;
            border:${theme.border.width} solid slateblue;
        }
        
        a:hover,a:focus{
            background:linear-gradient(to bottom,rgba(0,0,222,.1) 0%,rgba(0,0,222,.2) 100%);
            background-position: 0 100%;
            background-size: 200px 0px;
            background-repeat: repeat-x;
            text-decoration: none;
            cursor:pointer;
        }
        `}

      </style>
    </div>
  )
}

export default ViewMoreButtonHomepage
