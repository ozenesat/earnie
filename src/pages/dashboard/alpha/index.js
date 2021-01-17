/* eslint-disable no-else-return */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import store from 'store'
import StrategieCard from './StrategieCard'

const DashboardAlpha = () => {
  const [strategies, setStrategies] = useState([])
  const accessToken = store.get('accessToken')
  useEffect(() => {
    axios({
      url: 'https://earnie-yt.herokuapp.com/api/get_strategies/',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(res => {
        setStrategies(res.data.strategies)
      })
      .catch(console.error)
  }, [])

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
