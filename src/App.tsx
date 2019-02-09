import React, { Component, useCallback } from 'react';
import './App.scss';
import { Representative } from './reps/Rep.model';
import { RepDetail } from './reps/RepDetail';
import { RepResultRow } from './reps/RepResultRow';
import { SearchControls } from './SearchControls';

type AppState = {
  reps: Representative[];
  selectedRep?: Representative;
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      reps: []
    };
  }

  onSearchClick(stateAbbr: string, type: string) {
    const url = `${type}/${stateAbbr}`;
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ reps: res.results }));
  }

  selectRep(rep: Representative) {
    this.setState({ selectedRep: rep });
  }

  render() {
    return (
      <div>
        <div className="title">Who's My Representative?</div>
        <SearchControls onSearchClick={(s, t) => this.onSearchClick(s, t)} />
        <div className="results">
          <div className="results-grid">
            <div className="header result-row">
              <div>Name</div>
              <div>Party</div>
            </div>
            {this.state.reps.map((rep, idx) => (
              <RepResultRow
                key={idx}
                rep={rep}
                handleSelect={() => this.setState({ selectedRep: rep })}
              />
            ))}
          </div>
          {this.state.selectedRep && <RepDetail rep={this.state!.selectedRep} />}
        </div>
      </div>
    );
  }
}

export default App;
