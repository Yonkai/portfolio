import NavMenu from '../components/NavMenu.js'

const Index = () => (
  <>
    <NavMenu />
    <div className='test' />
    <style global jsx>
      {`
        body{
          margin:0;
          background-color:grey;
        }
      `}
    </style>
  </>
)

export default Index
