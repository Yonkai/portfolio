// UI Theme
import theme from '../theme.js'

const TemplateContainer = (props) => {
  return (
    <div className='flex-container-templated-container'>
      <section className='templated-container'>
        <div>
          {props.children}
          <p>{props.text}</p>
        </div>
        <style jsx>
          {`
                .flex-container-templated-container{
                  display:flex;
                }
    
                .templated-container{
                    box-sizing:border-box;
                    width:95%;
                    border:solid ${theme.border.color} ${theme.border.width};
                    background-color:rgb(250,250,250);
                    font-size:18px;
                    padding:${props.padding};
                    line-height:1.4;
                    margin:auto;
                    margin-top:10px;
                }
  
                p{
                    margin:5px;
                    text-align:center;
                }
  
                h2{
                    margin:0;
                }
  
                h3{
                    margin:0;
                }
                
                // inspiration for anchor styling: https://css-tricks.com/having-fun-with-link-hover-effects/
                a {
                    background: ${theme.anchors.gradient};
                    background-position: 0 100%;
                    background-repeat: repeat-x;
                    background-size: 30px 30px;
                    color: #000;
                    text-decoration: none;
                    transition:background-size .5s;
                }
                
                a:hover, a:focus{
                    background: ${theme.anchors.gradient};
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

TemplateContainer.defaultProps = {
  borderColor: 'red',
  padding: '10px'
}

export default TemplateContainer
