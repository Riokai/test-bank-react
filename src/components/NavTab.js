import React from 'react';

export class NavTab extends React.Component {

  constructor() {
    super()

    this.state = {
      active: 0
    }
  }

  handleActive(key) {
    this.setState({active: key})
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="nav nav-tabs">
            { this.props.items.map((item, key) => {
                return (
                  <li
                    className={ this.state.active === key ? 'active' : ''}
                    key={key}
                    style={{cursor: 'pointer'}}
                    onClick={this.handleActive.bind(this, key)}>
                    <a>{ item.title }</a>
                  </li>
                )
            }) }
          </ul>
          <div className="tab-content">
            { this.props.children.map((item, key) => {
                if (this.state.active === key) return React.cloneElement(item, {
                  active: true,
                  key: key
                })

                return React.cloneElement(item, {
                  key: key
                })
            }) }
          </div>
        </div>
      </div>
    )
  }
}

export class NavTabItem extends React.Component {

  render() {

    let classActive = this.props.active ? 'active' : ''

    return (
      <div className={`tab-pane ${classActive}`} key={this.props.key}>
        { this.props.children }
      </div>
    )
  }

}

// export NavTab
// export NavTabItem
