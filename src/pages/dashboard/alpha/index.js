/* eslint-disable no-else-return */
import React from 'react'
import StrategieCard from './StrategieCard'
import data from './data.json'

const DashboardAlpha = () => {
  const {strategies} = data

  if(strategies.length > 0) {
    const strategieJsx = strategies.map(strategie => (
      <div className="col-lg-4">
        <div className="card">
          <StrategieCard data={strategie} />
        </div>
      </div>
    ))
    return (
      <div className="row">
        {strategieJsx}
      </div>
    )
  } else {
    return (
      <div className="row">
        <h1>You do not have any strategies yet!</h1>
      </div>
    )
  }
}

export default DashboardAlpha
