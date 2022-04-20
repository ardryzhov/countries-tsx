import React from 'react'
import './SkeletonCountryCard.scss'

const SkeletonCountryCard: React.FC = () => {
	return (
		<div className="country__card_wrap-skeleton">

			<div className="card__content-skeleton">
				<div className="button__back-skeleton" />

				<div className="country__section-skeleton">

					<div className="country__section_img-skeleton" />

					<div className="country__info-skeleton">
						<div className="country__info_name-skeleton" />

						<div className="country__info_about-skeleton">
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
							<div className="info__about-skeleton"/>
						</div>

						<div className="country__info_border-skeleton">
							<div className="info_border_title-skeleton"/>

							<div className="info_border_array-skeleton">
								<div className="info__border_links-skeleton">
									<div className="info__border_link-skeleton"/>
									<div className="info__border_link-skeleton"/>
									<div className="info__border_link-skeleton"/>
									<div className="info__border_link-skeleton"/>
									<div className="info__border_link-skeleton"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkeletonCountryCard