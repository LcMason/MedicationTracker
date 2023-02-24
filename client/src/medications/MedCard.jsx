import React from 'react'
import medicationtracker from '../images/medicationtracker.jpg'

const MedCard = ({medication}) => {
    const {id, name, form, instruction, rating} = medication
    
      return (
        <div className="col bg-dark">
          <img
            src={medicationtracker}
            className="card-img-top img-fluid img-thumbnail"
            alt="medication-card"
          />
          <div className="card-body" key={id}>
            <h3 className="card-title fw-bolder">{name}</h3>
            <p className="card-text">Form || {form}</p>
            <p className="card-text">Instruction || {instruction}</p>
            <p className="card-text">Rating || {rating}</p>
            <div className="pb-2">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
          </div>
        </div>
      )
    }

    export default MedCard