import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Button, Card } from 'element-react';

export default class index extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        return (
            <Card
                className="box-card"
                header={
                    <div className="clearfix">
                        <span>Card Name</span>
                        <span style={{ "float": "right" }}>
                            <Button type="text">X</Button>
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
