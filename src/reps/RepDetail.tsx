import React, { Component } from 'react';
import { Representative } from './Rep.model';
import './RepDetail.scss';
type RepDetailProps = {
  rep: Representative
}
export class RepDetail extends Component<RepDetailProps> {
  constructor(props: RepDetailProps) {
    super(props);
  }

  render() {
    const rep = this.props.rep;
    const names = this.props.rep.name.split(' ');
    const first = names[0];
    const last = names[1];
    return (
      <div className="info-grid">
        <div className="info-header">Info</div>
        <div className="info-row">{first}</div>
        <div className="info-row">{last}</div>
        {rep.district && (
          <div className="info-row">District {rep.district}</div>
        )}
        <div className="info-row">{rep.phone}</div>
        <div className="info-row">{rep.office}</div>
      </div>
    );
  }
}
