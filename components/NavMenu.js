import Link from 'next/link'
import React, { Component } from 'react'

// BUG: Race conditions with state? Or more likely with the uncontrolled component
class NavMenu extends Component {
  constructor (props) {
    super(props)
    this.toggleMenuBool = this.toggleMenuBool.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.checkBoxRef = React.createRef()

    this.state = { menuToggle: false }
  }

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.checkBoxRef.current.click()
      event.stopPropagation()
      this.toggleMenuBool()
    }
  }

  toggleMenuBool () {
    this.setState(prevState => ({
      menuToggle: !prevState.menuToggle
    }))
  }
  render () {
    return (

      <nav className='nav-container'>
        <nav className='dropdown-menu'>
          {/* Uncontrolled component because of the form state */}
          <input ref={this.checkBoxRef} onClick={this.toggleMenuBool} defaultChecked={this.state.menuToggle} type='checkbox' id='menu' autoComplete='off' />
          <label htmlFor='menu'>
            <div className='nav-icon2-container' tabIndex='0' onKeyPress={this.handleKeyPress}>
              {/* https://codepen.io/designcouch/pen/Atyop?editors=0100 */}
              <div id='nav-icon2' className={this.state.menuToggle ? 'open' : 'close'}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </label>
          <div className='menu-content'>
            <ul className='menu-content-item'>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/major' as='/committed'>
                  <a>Commited</a>
                </Link>
              </li>

              <li>
                <Link href='/minor' as='/staging'>
                  <a>Staging</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Large screen nav menu: */}
        <nav className='large-screen-nav-bar'>
          <div className='large-screen-menu'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/major' as='/committed'>
              <a>Commited</a>
            </Link>
            <Link href='/minor' as='/staging'>
              <a>Staging</a>
            </Link>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </div>
        </nav>
        <style jsx>{`
                nav{
                  font-size:20px;
                }

                .nav-container{
                  position:fixed;
                  z-index:10;
                  width:100%;
                }

                .menu-content{
                    max-height:0px;
                    overflow:hidden;
                    transition:max-height .25s ease-in-out;
                    display:flex;
                }

                .menu-content-item{
                  margin:auto;
                }

                .menu-content-item li a{
                  text-align:center;
                }
        
                .dropdown-menu{
                    background:#FFF;
                    padding:5px;
                    box-shadow:1px 2px 3px rbga(0,0,0,0.3);
                }
        
                .dropdown-menu ul{
                    list-style-type:none;
                    padding:0;
                }
        
                .dropdown-menu a{
                    display:block;
                    padding:10px;
                    text-decoration:none;
                    color:#033;
                    font-weight:300;
                }
        
                .dropdown-menu label{
                    display:block;
                    cursor:pointer;
                }

                .dropdown-menu ul li{
                    list-style-type:none;
                    padding:10px;
                }
        
                input#menu{
                    // even with display none, there is still a checked and unchecked state
                    display:none;
                }
        
                input:checked ~ .menu-content {
                    max-height:400px;
                    transition:max-height .25s ease-in-out;
                }

                input:checked ~ .menu-content a:focus{
                  max-height:400px;
                  transition:max-height .25s ease-in-out;
                }

                .nav-icon2-container{
                  display:flex;
                  margin-top:5px;
                  margin-bottom:15px;
                }

                #nav-icon2 {
                    width: 60px;
                    height: 45px;
                    position: relative;
                    margin:auto;
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    -webkit-transition: .5s ease-in-out;
                    -moz-transition: .5s ease-in-out;
                    -o-transition: .5s ease-in-out;
                    transition: .5s ease-in-out;
                    cursor: pointer;
                  }

                
                #nav-icon2 span {
                  display: block;
                  position: absolute;
                  height: 9px;
                  width: 50%;
                  background: #022;
                  opacity: 1;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .5s ease-in-out;
                  -moz-transition: .5s ease-in-out;
                  -o-transition: .5s ease-in-out;
                  transition: .5s ease-in-out;
                }
                
                #nav-icon2 span:nth-child(even) {
                  left: 50%;
                  border-radius: 0 9px 9px 0;
                }
                
                #nav-icon2 span:nth-child(odd) {
                  left:0px;
                  border-radius: 9px 0 0 9px;
                }
                
                #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {
                  top: 0px;
                }
                
                #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {
                  top: 18px;
                }
                
                #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {
                  top: 36px;
                }
                
                #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {
                  -webkit-transform: rotate(45deg);
                  -moz-transform: rotate(45deg);
                  -o-transform: rotate(45deg);
                  transform: rotate(45deg);
                }
                
                #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {
                  -webkit-transform: rotate(-45deg);
                  -moz-transform: rotate(-45deg);
                  -o-transform: rotate(-45deg);
                  transform: rotate(-45deg);
                }
                
                #nav-icon2.open span:nth-child(1) {
                  left: 5px;
                  top: 7px;
                }
                
                #nav-icon2.open span:nth-child(2) {
                  left: calc(50% - 5px);
                  top: 7px;
                }
                
                #nav-icon2.open span:nth-child(3) {
                  left: -50%;
                  opacity: 0;
                }
                
                #nav-icon2.open span:nth-child(4) {
                  left: 100%;
                  opacity: 0;
                }
                
                #nav-icon2.open span:nth-child(5) {
                  left: 5px;
                  top: 29px;
                }
                
                #nav-icon2.open span:nth-child(6) {
                  left: calc(50% - 5px);
                  top: 29px;
                }

                .large-screen-nav-bar{
                  display:none;
                }

                //Switch navigatio menu for larger screens, reserve hamburger menu for smaller screens
                @media (min-width: 700px) {
                  .dropdown-menu{
                    display:none;
                  }

                  .large-screen-nav-bar{
                    display:block;
                    color:red;
                    margin:0;
                  }
                  
                  .large-screen-menu{
                    display:grid;
                    width:100%;
                    grid-template-columns:1fr 1fr 1fr 1fr;
                    font-size:20px;
                    justify-items:center;
                    background:rgba(0,0,0,0.0);
                  }
                  
                  .large-screen-menu a{
                    color:rgba(245,245,240);
                    text-decoration:none;
                    width:100%;
                    padding-top:20px;
                    padding-bottom:25px;
                    text-align: center;
                    align-self:start;
                    transition:border-bottom .2s ease-in-out;
                    background:rgba(3,3,3,0.7);
                  }

                  .large-screen-menu a:hover{
                    border-bottom:5px solid rgba(253,160,49,1);
                    transition:border-bottom .2s ease-in-out;
                  }
              }

                `
        }</style>
      </nav>
    )
  }
}

export default NavMenu
