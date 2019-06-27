import NavMenu from '../components/NavMenu.js'

const Index = () => (
  <>
    <NavMenu />
    <div className='test' />
    <style global jsx>
      {`
        body{
          margin:0;
        }
        .test{
          height:1000px;
          width:100px;
          background-color:red;
          position:absolute;
          top:100px;
          z-index:-1;
        }
      `}
    </style>
  </>
)

export default Index
