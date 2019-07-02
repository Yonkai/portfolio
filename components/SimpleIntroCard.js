const SimpleIntroCard = () => {
  return (
    <div className='faking-normal-flow'>
      <h1>Hello! I'm Frank, A <span>full stack web developer</span> from Poughkeepsie, New York.</h1>
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
                margin-top:120px;
                font-size:30px;
                color:rgb(250,250,250);
                text-align:center;
              }
              span{
                background: linear-gradient(90deg, rgba(252,176,69,.5) 0%, rgba(252,176,29,.4) 25%, rgba(253,160,49,.4) 50%, rgba(203,140,69,.5) 76%, rgba(252,176,69,.4) 100%);
              }
      `}</style>
    </div>
  )
}

export default SimpleIntroCard
