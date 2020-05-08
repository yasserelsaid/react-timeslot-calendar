import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import '../../styles/demo/main.scss';

import ReactTimeslotCalendar from './../react-timeslot-calendar.jsx';
import MarkdownSnippet from './../util/markdown-snippet.jsx';
/** Code snippets **/
import customTimeslotSnippet from './snippets/custom-timeslot.md';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialDate = moment([2017, 3, 24]);

  }
  render() {
    return (
      <div className = "app">
        <h1> React Timeslot Calendar </h1>
        { this._customTimeslotSnippetRender() }
      </div>
    );
  }

  _customTimeslotSnippetRender() {
    return (
      <div>
        <h3> Using Custom Timeslots and Callback </h3>
        <MarkdownSnippet snippet = { customTimeslotSnippet }/>
        <ReactTimeslotCalendar
          initialDate = { this.initialDate.format() }
          timeslots = { {
            monday: [['1', '2']], // 1:00 AM - 2:00 AM
            tuesday: [['1', '2']], // 1:00 AM - 2:00 AM
            wednesday: ['5'], // 5:00 AM
            thursday: [['4', '6'],['7', '8']], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
            friday: [['1', '2']], // 1:00 AM - 2:00 AM
            saturday: [['1', '2']], // 1:00 AM - 2:00 AM
            sunday: [['1', '2']]} // 1:00 AM - 2:00 AM
          }
          maxTimeslots = { 3 }
          onSelectTimeslot = { (timeslots, lastSelected) => {
            console.log('All Timeslots:');
            console.log(timeslots);

            console.log('Last selected timeslot:');
            console.log(lastSelected);
          } }
        />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.getElementById('react-timeslot-calendar'));
