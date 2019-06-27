import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'

const Index = () => (
  <>
    <NavMenu />
    <Wave />
    <div className='faking-normal-flow' />
    <div className='faking-normal-flow' />
    <div className='returned-flow' />

    <style global jsx>
      {`
        body{
          margin:0;
          // Forest theme
          background-color:#011;
        }
        .faking-normal-flow{
          box-sizing:border-box;
          width: 100%;
          height:200px;
          border:solid black 5px;
          background-color:rgba(200,0,0,0.2);
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
