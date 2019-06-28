import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'
import SimpleIntroCard from '../components/SimpleIntroCard'

const Index = () => (
  <>
    <NavMenu />
    <Wave />
    <SimpleIntroCard />
    <div className='returned-flow' />

    <style global jsx>
      {`
        body{
          margin:0;
          // Forest theme
          background-color:#011;
        }
      
        .returned-flow{
          box-sizing:border-box;
          width:100%;
          height:200px;
          border:solid green 5px;
          background-color:white;
        }
      `}
    </style>
  </>
)

export default Index
