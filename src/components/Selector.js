import React from 'react';

class Selector extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="page-header">
            <h1>{ this.props.title}</h1>
          </div>
        </div>
        <div className="row select-section form-select">
          <div className="col-md-3">
            <select className="form-control">
              <option value="default">请选择学院</option>
              <option value="50">人文学院</option>
              <option value="51">外国语学院</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

Selector.defaultProps = {
}

export default Selector;
