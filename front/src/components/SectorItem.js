import React, {Component} from 'react';

import SectorList from "./SectorList";

class SectorItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: false,
            isChecked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    render() {
        return (
            <div>
            {!this.state.isCollapsed && this.props.sector.items ? '+' : '--'}
            <input
                name="isChecked"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.handleCheckChange}
            />
            <button onClick={this.handleClick}>{this.props.sector.name}</button>

            {
                this.state.isCollapsed &&
                this.props.sector.items &&
                <SectorList sectors={this.props.sector.items}/>
            }
            </div>
        );
    }

    handleClick() {
        this.setState((prevState) => ({
            isCollapsed: !prevState.isCollapsed
        }));
    }

    handleCheckChange() {
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked
        }));
    }
}

export default SectorItem;
