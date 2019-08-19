import { SocialIcon } from 'react-social-icons'

const SocialMediaIcons = (props) => {
  return (
    <div className='flex-container-social-media-icons'>
      <div className='icon'>
        <SocialIcon url='https://github.com/Yonkai' bgColor='#011' />
      </div>
      <div className='icon'>
        <SocialIcon url='https://medium.com/@fgunsch.webdev' bgColor='#011' />
      </div>
      <style jsx>
        {`.flex-container-social-media-icons{
            display:flex;
            justify-content:center;
        }
         .icon{
             margin-right:10px;
         }
         .icon:hover{
            // background:rgba(252,176,29,.8);
            border-radius:100%;
         }
        `}
      </style>
    </div>
  )
}

export default SocialMediaIcons
