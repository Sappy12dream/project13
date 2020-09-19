import React from 'react'

function Header({handleLogout}) {
    return (
        <div>
                      <button onClick={handleLogout}>logout</button>
        </div>
    )
}

export default Header
