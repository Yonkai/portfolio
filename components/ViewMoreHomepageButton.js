import Link from 'next/link'

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
            background: linear-gradient(to bottom,#ff990052 0%,#ffedd3 100%);
            background-position: 0 100%;
            background-repeat: repeat-x;
            background-size: 50px 50px;
            font-size:35px;
            color: #000;
            text-decoration: none;
            transition:background-size .5s;
            margin:auto;
            text-align:center;
            border:5px solid orange;
        }
        
        a:hover {
            background: linear-gradient(to bottom,#ff990052 0%,#ff110080 100%);
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
