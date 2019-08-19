import ContentCard from './ContentCard'

// UI Theme
import theme from '../theme.js'

const ContactCard = (props) => {
  return (
    <div>
      <ContentCard title={'Contact!'}
        description={null}
        borderColor={'green'}
        skillBadges={null}
        URLs={null}
        anchorTexts={[null, null]}>

        {/* Uncontrolled component */}
        <div className='form-container'>
          <form method='POST' action='https://formspree.io/fgunsch.webdev@gmail.com'>
            <input type='text' name='name' id='full-name' placeholder='Your Full Name' />
            <input type='email' name='email' placeholder='Your email' required />
            <textarea name='message' placeholder='Your Message' rows='5' required />
            <button type='submit'>Send Message</button>
          </form>
        </div>

      </ContentCard>
      <style jsx>
        {`
                  * {
                    box-sizing:border-box;
                  }
                
                /* Style inputs */
                input[type=text], select {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 3px solid ${theme.border.color};
                box-sizing: border-box;
              }
      
              /* Style inputs */
              input[type=email], select {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              display: inline-block;
              border: 3px solid ${theme.border.color};
              box-sizing: border-box;
              }
      
              textarea{
                width: 100%;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: 3px solid ${theme.border.color};
                cursor: pointer;
                color:black;
              }
      
              /* Style the submit button */
              button {
                width: 100%;
                background-color: white;
                border: 3px solid ${theme.border.color};
                color: #011;
                padding: 14px 20px;
                margin: 8px 0;
                cursor: pointer;
              }
      
              input:focus, textarea:focus{
                border: 3px solid ${theme.border.color};
              }
      
              button:focus{
                background-color:rgba(0,0,100,.1);  
              }
      
              /* Add a background color to the submit button on mouse-over */
              button:hover{
                background-color: rgba(0,0,100,.1);
              }
            
            `}
      </style>
    </div>
  )
}

export default ContactCard
