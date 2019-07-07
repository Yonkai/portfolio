import ContentCard from './ContentCard'

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
            <input type='email' name='email' placeholder='Your email' required='true' />
            <textarea name='message' placeholder='Your Message' rows='5' require='true' />
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
                border: 5px solid #ccc;
                box-sizing: border-box;
              }
      
              /* Style inputs */
              input[type=email], select {
              width: 100%;
              padding: 12px 20px;
              margin: 8px 0;
              display: inline-block;
              border: 5px solid #ccc;
              box-sizing: border-box;
              }
      
              textarea{
                width: 100%;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: 5px solid  #ccc;
                cursor: pointer;
                background-color: #fff8ef;
                color:black;
              }
      
              /* Style the submit button */
              button {
                width: 100%;
                background-color: white;
                border:5px solid green;
                color: #011;
                padding: 14px 20px;
                margin: 8px 0;
                cursor: pointer;
              }
      
              input:focus, textarea:focus{
                border:1px solid purple;  
              }
      
              button:focus{
                background-color:lightgreen;  
              }
      
              /* Add a background color to the submit button on mouse-over */
              button:hover{
                background-color: lightgreen;
              }
            
            `}
      </style>
    </div>
  )
}

export default ContactCard
