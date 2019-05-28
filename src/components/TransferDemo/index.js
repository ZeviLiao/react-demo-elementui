import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Transfer } from 'element-react';

class TransferDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [1]
    }

    this._handleChange = this.handleChange.bind(this);
    this._filterMethod = this.filterMethod.bind(this);
    this._renderFunc = this.renderFunc.bind(this);
  }

  get data() {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `Option ${i}`,
        disabled: i % 4 === 0
      });
    }
    return data;
  }

  filterMethod(query, item) {
    return item.label.indexOf(query) > -1;
  }

  handleChange(value) {
    this.setState({ value })
  }

  renderFunc(option) {
    return <span>{option.key} - {option.label}</span>;
  }

  get style() {
    return {
      marginLeft: '20px',
      padding: '6px 5px'
    }
  }

  render() {
    const { value } = this.state;

    return (
      <Transfer
        value={value}
        filterable
        // leftDefaultChecked={[2, 3]}
        // rightDefaultChecked={[1]}
        renderContent={this.renderFunc}
        titles={['Source', 'Target']}
        buttonTexts={['To left', 'To right']}
        footerFormat={{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }}
        onChange={this._handleChange}
        data={this.data}
      >
      </Transfer>
    )
  }
}

export default TransferDemo
