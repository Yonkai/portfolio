import NavMenu from '../components/NavMenu.js'
import Wave from '../components/Wave.js'

const Index = () => (
  <>
    <NavMenu />
    <Wave />
    <div className='test' />
    <style global jsx>
      {`
        body{
          margin:0;
          background-color:#222;
        }
      `}
    </style>
  </>
)

export default Index
