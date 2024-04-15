import React, {useContext} from 'react'
// import { UserContext } from '../context/UserContext'
import pills from '../images/pills.jpg'

const MedCard = ({medication}) => {
    const {id, name, form, instruction, rating} = medication
      return (
        <div className="col bg-dark">
          <img
            src={pills}
            className="card-img-top img-fluid img-thumbnail"
            alt="medication-card"
          />
          <div className="card-body" key={id}>
            <h3 className="card-title text-light fw-bolder">{name}</h3>
            <p className="card-text text-light fw-bold">Form : {form}</p>
            <p className="card-text text-light fw-bold">Instruction : {instruction}</p>
            <p className="card-text text-light fw-bold">Rating : {rating}</p>
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