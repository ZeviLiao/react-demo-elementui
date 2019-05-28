import React, { Component } from 'react'
import { Button, Dialog } from 'element-react';

export default class DialogDemo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogVisible: false
        };
    }
    render() {
        return (
            <div>
                <Button type="text" onClick={() => this.setState({ dialogVisible: true })}>Click to open the Dialog</Button>
                <Dialog
                    title="Tips"
                    size="tiny"
                    visible={this.state.dialogVisible}
                    onCancel={() => this.setState({ dialogVisible: false })}
                    lockScroll={false}
                >
                    <Dialog.Body>
                        <span>This is a message</span>
                    </Dialog.Body>
                    <Dialog.Footer className="dialog-footer">
                        <Button onClick={() => this.setState({ dialogVisible: false })}>Cancel</Button>
                        <Button type="primary" onClick={() => this.setState({ dialogVisible: false })}>Confirm</Button>
                    </Dialog.Footer>
                </Dialog>
            </div>
        )
    }
}
