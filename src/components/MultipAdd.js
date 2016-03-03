import React from 'react'

export default class MultipAdd extends React.Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="col-md-2 text-right" htmlFor>选择文件:</label>
          <div className="col-md-4">
            <input
              id="upLoad"
              type="file"
              name="excel" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2">
            <button className="btn btn-info" type="submit">添加</button>
          </div>
        </div>
      </div>
    )
  }
}
