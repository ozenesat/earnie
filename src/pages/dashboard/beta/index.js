import React, { useState } from 'react'
import axios from 'axios'
import store from 'store'
// import { Helmet } from 'react-helmet'
import { Input, Cascader, Checkbox, Form, Button, notification } from 'antd'

const DashboardBeta = () => {
  const [enabled, setEnabled] = useState(false)
  const [created, setCreated] = useState(false)
  if (enabled) setEnabled(true)
  const accessToken = store.get('accessToken')
  const onFinish = values => {
    // eslint-disable-next-line prefer-destructuring
    // values.ai_engine = values.ai_engine[0]
    axios({
      url: 'https://earnie-yt.herokuapp.com/api/create_strategy',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      data: values
    })
      .then(() => {
        notification.success({
          message: `${values.name} Strategy is created!`,
        })
        values = null
        setCreated(true)
      })
      .catch(console.error)
  }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo)
    }
  const engines = [
    {
      value: 'skyrocket',
      label: 'Sky Rocket',
    },
    {
      value: 'stableclimb',
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
  const onClick = (event) => {
    event.preventDefault()
    setCreated(false)
  }

  if(created) {
    return (
      <Button
        type="primary"
        size="x-large"
        className="text-center w-100"
        htmlType="submit"
        onClick={onClick}
      >
        <strong>Create a New Strategy</strong>
      </Button>
    )
  }

  return (
    /* <div>
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
      </div> */

    /* !!! FORM START !!! */
    <div className="card">
      <div className="card-body">
        <h5 className="mb-4">
          <strong>Strategy</strong>
        </h5>
        <Form 
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="row">
            <div className="col-md-6">
              <Form.Item name="name" label="Name">
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
              <Form.Item name="Eod_take_profit" label="End of Day Take Profit">
                <Input placeholder="1" type="number" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item name="Eod_stop_loss" label="End of Day Stop Loss">
                <Input placeholder="-1" type="number" />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item name="is_private" label="Privacy">
                <Cascader options={privacy} />
              </Form.Item>
            </div>
            <div className="col-md-4">
              <Form.Item name="ai_engine" label="AI Engine">
                <Cascader options={engines} />
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item valuePropName="checked" name="confirm">
                <Checkbox className="text-uppercase">
                  I ACKNOWLEDGE THAT EARNIE DOES NOT GUARANTEE ANY PROFIT OR LOSS.
                </Checkbox>
              </Form.Item>
              <Button
                type="primary"
                size="large"
                className="text-center w-100"
                htmlType="submit"
                disabled={enabled}
              >
                <strong>Save</strong>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default DashboardBeta
