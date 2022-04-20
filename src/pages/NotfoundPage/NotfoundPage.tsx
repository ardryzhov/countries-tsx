import React from 'react'
import { Link } from 'react-router-dom'
import './NotfoundPage.scss'

const NotfoundPage: React.FC = () => {
	return (
		<div className='notfoundpage_wrap'>
			<div className="notfound_content">
				<h1>Oops! 404</h1>
				<p>Not found page. go to home page?</p>
				<p><Link to='/'>home</Link></p>
			</div>
		</div>
	)
}

export default NotfoundPage