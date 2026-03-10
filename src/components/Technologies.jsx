import React from 'react'
import {NavLink} from 'react-router'
import {Outlet} from 'react-router'

function Technologies() {
  return (
    <div >
        <ul className='flex justify-around text-2xl mt-10 mb-10'>
            <li>
                <NavLink to="java">Java</NavLink>
            </li>
            <li>
                <NavLink to="node">Node</NavLink>
            </li>
            <li>
                <NavLink to="vue">Vue</NavLink>
            </li>
        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Technologies