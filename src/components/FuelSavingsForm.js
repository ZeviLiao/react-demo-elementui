import React from 'react';
import { Tabs } from 'element-react';
import TransferDemo from './TransferDemo';
import DialogDemo from './DialogDemo';
import SelectDemo from './SelectDemo';



const FuelSavingsForm = () => (
  <div>
    <h2>Demo</h2>
    <hr />

    <Tabs type="card" value="1">
      <Tabs.Pane label="User" name="1">
        <DialogDemo />
      </Tabs.Pane>
      <Tabs.Pane label="Config" name="2">
        <TransferDemo />
      </Tabs.Pane>
      <Tabs.Pane label="Role" name="3">
        <div style={{ height: '300px', backgroundColor: '#eee' }}>
          <SelectDemo />
        </div>
      </Tabs.Pane>
      <Tabs.Pane label="Task" name="4">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="5">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="6">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="7">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="8">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="9">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="10">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="11">Task</Tabs.Pane>
      <Tabs.Pane label="Task" name="12">Task</Tabs.Pane>
    </Tabs>



  </div>
);


export default FuelSavingsForm;
