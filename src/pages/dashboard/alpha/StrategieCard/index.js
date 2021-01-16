import React from 'react'
import style from './style.module.scss'

const StrategieCard = (data) => {
  const strategie = data.data
  let buttonJsx = (
    <div className="btn btn-success" style={{ width: '100%' }}>
      <strong>RUN</strong>
    </div>
  )
  if(strategie.active) {
    buttonJsx = (
      <div className="btn btn-danger" style={{ width: '100%' }}>
        <strong>STOP</strong>
      </div>
    )
  }
  

  return (
    <div>
      <div className="position-relative py-3 px-4 text-center">
        <div className={`${style.flag}`}>$$$</div>
        <div className="font-size-70 pt-3 pb-w text-gray-4">
          <i className="fe fe-star" />
        </div>
        <h5 className="font-size-24 font-weight-bold mb-1">{strategie.name}</h5>
        <div className="font-size-18 text-uppercase mb-3">5.6%</div>
        <div className="font-weight-bold font-size-18 text-uppercase mb-4">{strategie.ai_engine}</div>
        <div className="border-top pt-3 font-italic">Created at {strategie.creation_date}</div>
        {buttonJsx}
      </div>
    </div>
  )
}

export default StrategieCard
