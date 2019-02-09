import React from 'react';
import './SearchControls.scss';
import { STATE_NAMES } from './common/constants';

type SearchControlsProps = {
  onSearchClick: (state: string, type: string) => void;
};
type SearchControlsState = {
  selectedState: string;
  selectedType: string;
};
export class SearchControls extends React.Component<
  SearchControlsProps,
  SearchControlsState
> {
  constructor(props: SearchControlsProps) {
    super(props);
    this.state = {
      selectedState: STATE_NAMES[0],
      selectedType: 'representatives'
    };
  }

  render() {
    return (
      <div className="controls">
        <select
          name="repType"
          onChange={e => this.setState({ selectedType: e.currentTarget.value })}
          defaultValue="representatives"
        >
          <option value="representatives">Representative</option>
          <option value="senators">Senator</option>
        </select>
        <select
          name="state"
          onChange={e =>
            this.setState({ selectedState: e.currentTarget.value })
          }
          defaultValue={STATE_NAMES[0]}
        >
          {STATE_NAMES.map(stateName => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            this.props.onSearchClick(
              this.state.selectedState,
              this.state.selectedType
            )
          }
        >
          Go!
        </button>
      </div>
    );
  }
}
