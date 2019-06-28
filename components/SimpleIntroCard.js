const SimpleIntroCard = () => {
  return (
    <div className='faking-normal-flow'>
      <h1>Hello! I'm Frank, A full stack  developer from New York.</h1>
      <style jsx>{`
              .faking-normal-flow{
                box-sizing:border-box;
                width: 100%;
                height:400px;
                border:solid rgba(0,0,0,0.3) 5px;
                background-color:rgba(30,0,0,0.2);
              }
              h1{
                margin-top:120px;
                font-size:30px;
                color:white;
                text-align:center;
              }
      `}</style>
    </div>
  )
}

export default SimpleIntroCard
