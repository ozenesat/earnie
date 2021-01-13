import React from 'react'
import { Helmet } from 'react-helmet'
import General19 from 'components/kit/widgets/General/19'
import { Input, Cascader, Checkbox, Form } from 'antd'

const DashboardBeta = () => {
  const engines = [
    {
      value: 'skyRocket',
      label: 'Sky Rocket',
    },
    {
      value: 'stableClimb',
      label: 'Stable Climb',
    }
  ]
  const privacy = [
    {
      value: true,
      label: 'Private',
    },
    {
      value: false,
      label: 'Public',
    }
  ]

  return (
    <div>
      <Helmet title="Dashboard: Beta" />
      <div className="row">
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Account Information</strong>
              </div>
              <div className="text-muted">Block with important Account information</div>
            </div>
            <div className="card-body">
              <General19 />
            </div>
          </div>
        </div>
      </div>

      {/* !!! FORM START !!! */}
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Strategy
            </strong>
          </h5>
          <Form layout="vertical">
            <div className="row">
              <div className="col-md-6">
                <Form.Item name="strategyName" label="Name">
                  <Input placeholder="Sandwich8" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="confidence" label="Confidence">
                  <Input placeholder="0.01" type="number" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="intraday_take_profit" label="Take Profit">
                  <Input placeholder="0.08" type="number" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="intraday_stop_loss" label="Stop Loss">
                  <Input placeholder="-0.05" type="number" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="endday_take_profit" label="End of Day Take Profit">
                  <Input placeholder="1" type="number" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="endday_stop_loss" label="End of Day Stop Loss">
                  <Input placeholder="-1" type="number" />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="privacy" label="Privacy">
                  <Cascader options={privacy} />
                </Form.Item>
              </div>
              <div className="col-md-4">
                <Form.Item name="ai_engine" label="AI Engine">
                  <Cascader options={engines} />
                </Form.Item>
              </div>
              <div className="col-12">
                <Form.Item valuePropName="checked" name="confirm3">
                  <Checkbox className="text-uppercase">
                    I CONFIRM THAT EARNIE DOES NOT GUARANTEE ANY PROFIT OR LOSS.
                  </Checkbox>
                </Form.Item>
                <Form.Item name="confirm4">
                  <button type="button" className="btn btn-light px-5">
                    Save
                  </button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default DashboardBeta
