import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box fade">
            Reviews (122)
          </div>
        </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis iste porro, amet sapiente corporis alias illum unde perspiciatis obcaecati nemo, aperiam quae culpa vero autem reiciendis ut? Rerum ipsam eveniet ipsa assumenda iusto neque, exercitationem quas voluptates quae ea eius magni illo in. Voluptatibus.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, vitae perspiciatis eveniet aliquam libero nulla debitis et maxime delectus deserunt explicabo corrupti.
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox