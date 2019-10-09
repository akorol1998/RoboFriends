import React from 'react'


const Card = ({name, email, id})=>{
	return (
		<div className='bg-light-green ma3 br4 pa3 dib grow bw2 shadow-5 tc area'>
			<img src={`https://robohash.org/awwr${id}?200x200 `} alt='no img yet'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
};

export {Card};