import { Representative } from './Rep.model';
import React, { Component } from 'react';

type RepResultRowProps = { rep: Representative; handleSelect: () => any };
export class RepResultRow extends Component<RepResultRowProps> {
  constructor(props: RepResultRowProps) {
    super(props);
  }

  render() {
    return (
      <div className="result-row" onClick={e => this.props.handleSelect()}>
        <div>{this.props.rep.name}</div>
        <div>{this.props.rep.party.substr(0, 1)}</div>
      </div>
    );
  }
}
