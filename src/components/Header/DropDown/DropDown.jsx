import React from 'react'
import { Link } from 'react-router-dom'
import './DropDown.scss'

const DropDown = () => {
	
	return (
		<div className='dropdown'>
			<ul>
				<li><Link className='link' to="/category/1">Наушники</Link></li>
				<li><Link className='link' to="/category/2">Колонки</Link></li>
				<li><Link className='link' to="/category/3">Вкладыши</Link></li>
				<li><Link className='link' to="/category/4">Часы</Link></li>
				<li><Link className='link' to="/about/">О нас</Link></li>
			</ul>
		</div>
	)
}

export default DropDown