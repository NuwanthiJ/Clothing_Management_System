import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Model Height 5' 8", wearing size UK M Please bear in mind that the photo may be slightly different from the actual item in terms of colour due to lighting conditions or the display used to view Wash And Care : Hand wash with cold water, Wash inside out dark colors separately, Dry in a shade</p>
        <h6>Cotton: Hot Water Wash — Tumble Dry Warm.</h6>
        <h6>Linen: Cool Water Wash — Air Dry. Hand wash first time.</h6>
        <h6>Polyester: Cool Water Wash — Tumble Dry Warm or Air Dry</h6>
        <h6>Silk: Hand Wash or Cool Warm Wash — Tumble Dry Cool or Air Dry</h6>
      </div>
    </div>
  )
}

export default DescriptionBox
