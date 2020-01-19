const SimpleIntroCard = () => {
  return (
    <div className='faking-normal-flow'>
      <h1>Hello! I'm Frank, A <span>software developer</span> based in New York City.</h1>
      <picture>
        <img
          src='../static/hero-1-srcset/hero-1-cropped_r7eag0_c_scale,w_200.png'
          alt='Picture of me.'
          height='165px'
          width='165px' />
      </picture>
      <style jsx>{`
              .faking-normal-flow{
                box-sizing:border-box;
                width: 100%;
                height: 400px;
                border:solid rgba(0,0,0,0.0) 1px;
                // background-color:rgba(30,0,0,0.2);
                // border-left:solid black 20px;
                // border-right:solid black 20px;
              }
              h1{
                margin-top:90px;
                font-size:30px;
                color:#131313;
                text-align:center;
              }
              span{
                background:rgba(0,0,233,.3);
              }
              picture{
                margin-top:-10px;
                display:flex;
                justify-content:center;
              }
              img{
                border-radius:100%;
                filter: opacity(90%);
              }
              @media (max-width: 370px) {
                picture{
                  display:none;
                }
              }
      `}</style>
    </div>
  )
}
export default SimpleIntroCard
