import React from 'react'
import style from './style.module.scss'

const General17v1 = () => {
  return (
    <div>
      <div className="position-relative py-3 px-4 text-center">
        <div className={`${style.flag}`}>$2,156.20</div>
        <div className="font-size-70 pt-3 pb-w text-gray-4">
          <i className="fe fe-star" />
        </div>
        <h5 className="font-size-24 font-weight-bold mb-1">Strategy 2</h5>
        <div className="font-size-18 text-uppercase mb-3">2.1%</div>
        <div className="font-weight-bold font-size-18 text-uppercase mb-4">Stable Climb</div>
        <div className="border-top pt-3 font-italic">Created at 03/22</div>
        <div className="btn btn-success" style={{ width: '100%' }}>
          <strong>RUN</strong>
        </div>
      </div>
    </div>
  )
}

export default General17v1
