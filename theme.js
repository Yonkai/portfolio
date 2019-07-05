const theme = {
  body: {
    color: '#011',
    margin: 0
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
    background: linear-gradient(to bottom,#ff990052 0%,#ff110080 100%);
    background-position: 0 100%;
    background-size: 200px 0px;
    background-repeat: repeat-x;
    text-decoration: none;
}`
}

export default theme
