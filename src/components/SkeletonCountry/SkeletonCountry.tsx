import React from 'react'
import './SkeletonCountry.scss'

const SkeletonCountry: React.FC = () => {
	return (
		<div className='country__wrap-skeleton'>
			<div className="country__image-skeleton" />

			<div className="country__section-skeleton">

				<div className="country__title-skeleton" />

				<div className="country__info-skeleton">
					<div className="country__info_container-skeleton population-skeleton" />
					<div className="country__info_container-skeleton region-skeleton" />
					<div className="country__info_container-skeleton capital-skeleton" />
				</div>

			</div>
		</div>
	)
}

export default SkeletonCountry