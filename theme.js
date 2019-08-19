const theme = {
  body: {
    color: 'rgba(0,0,244,.02)',
    margin: 0
  },
  border: {
    color: 'rgba(0,20,40,0.7)',
    width: '3px'
  },
  anchors: {
    gradient: 'linear-gradient(to bottom,rgba(0,0,222,.1) 0%,rgba(0,0,222,.2) 100%)'

  },
  anchorfocusandhover: `a {
    background: linear-gradient(to bottom,#ff990052 0%,#ffedd3 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 30px 30px;
    color: #000;
    text-decoration: none;
    transition:background-size .5s;
}

a:hover, a:focus{
    background: linear-gradient(to bottom,rgba(12,12,200,0.4) 0%,rgba(12,12,200,0.8) 100%);
    background-position: 0 100%;
    background-size: 200px 0px;
    background-repeat: repeat-x;
    text-decoration: none;
}`
}

export default theme
