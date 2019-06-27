import Link from 'next/link'
import React, { Component } from 'react'

class NavMenu extends Component {
  constructor (props) {
    super(props)
    this.toggleMenuBool = this.toggleMenuBool.bind(this)
    this.state = { menuToggle: false }
  }

  toggleMenuBool () {
    this.setState(prevState => ({
      menuToggle: !prevState.menuToggle
    }))
  }
  render () {
    return (

      <div>
        <nav className='dropdown-menu'>
          {/* Uncontrolled component because of the form state */}
          <input type='checkbox' id='menu' />
          <label htmlFor='menu'>
            {/* https://codepen.io/designcouch/pen/Atyop?editors=0100 */}
            <div id='nav-icon2' className={this.state.menuToggle ? 'open' : 'closed'} onClick={this.toggleMenuBool}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </label>
          <div className='menu-content'>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/major' as='/commited'>
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
        <style jsx>{`
                nav{
                    font-size:20px;
                    font-family:arial;
                }
        
                .menu-content{
                    max-height:0px;
                    overflow:hidden;
                    transition:max-height .5s ease-in-out;
                }
        
                .dropdown-menu{
                    background:#B0B;
                    padding:5px;
                    border-bottom:3px solid #000;
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
                    color:#000;
                }
        
                .dropdown-menu label{
                    display:block;
                    cursor:pointer;
                }

                .dropdown-menu ul li{
                    list-style-type:none;
                    padding:20px;
                }
        
                input#menu{
                    // even with display none, there is still a checked and unchecked state
                    display:none;
                }
        
                input:checked ~ .menu-content{
                    max-height:400px;
                    transition:max-height .5s ease-in-out;
                }

                #nav-icon2 {
                    width: 60px;
                    height: 45px;
                    position: relative;
                    margin:20px;
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
                  background: #d3531a;
                  opacity: 1;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: .25s ease-in-out;
                  -moz-transition: .25s ease-in-out;
                  -o-transition: .25s ease-in-out;
                  transition: .25s ease-in-out;
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


                `
        }</style>
      </div>
    )
  }
}

export default NavMenu
