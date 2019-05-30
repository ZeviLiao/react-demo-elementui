import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Button, Card } from 'element-react';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldHide: false,
        };
    }

    handleClose = () => {
        this.setState({ shouldHide: true });
    }

    render() {
        const { shouldHide } = this.state;
        return (
            <Card className={shouldHide ? 'hidden' : ''}
                // className="box-card"
                header={
                    <div className="clearfix">
                        <span>Card Name</span>
                        <span style={{ "float": "right" }}>
                            <Button type="text" onClick={this.handleClose}>X</Button>
                        </span>
                    </div>
                }
            >
                <div className="text item">List item 1</div>
                <div className="text item">List item 2</div>
                <div className="text item">List item 3</div>
                <div className="text item">List item 4</div>
            </Card>
        )
    }
}
