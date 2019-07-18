const SimpleIntroCard = () => {
  return (
    <div className='faking-normal-flow'>
      <h1>Hello! I'm Frank, A <span>full stack web developer</span> from Poughkeepsie, New York.</h1>

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
                border:solid rgba(0,0,0,0.3) 5px;
                background-color:rgba(30,0,0,0.2);
                border-left:solid black 20px;
                border-right:solid black 20px;
              }
              h1{
                margin-top:90px;
                font-size:30px;
                color:rgb(250,250,250);
                text-align:center;
              }
              span{
                background: linear-gradient(90deg, rgba(252,176,69,.5) 0%, rgba(252,176,29,.4) 25%, rgba(253,160,49,.4) 50%, rgba(203,140,69,.5) 76%, rgba(252,176,69,.4) 100%);
              }
              picture{
                margin-top:-10px;
                display:flex;
                justify-content:center;
              }
              img{
                border-radius:100%;
                filter: opacity(75%);
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
