import React from 'react'
import { connect } from 'react-redux'

function Header({ auth }) {
  const renderLeftContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return <li><a href='/auth/google'>Login with Google</a></li>
      default:
        return <li><a>Logout</a></li>
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <a className='left brand-logo'>Emaily</a>
        <ul className='right'>
          {renderLeftContent()}
        </ul>
      </div>
    </nav>
  )
}

function mapStateToProps(state) {
  const { auth } = state;
  return { auth }
}

export default connect(mapStateToProps)(Header)