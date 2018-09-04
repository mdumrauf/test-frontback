import React, {Component} from 'react';

import SectorList from "./SectorList";

class SectorItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
            {!this.state.isCollapsed && this.props.sector.items ? '+' : '--'} <button onClick={this.handleClick}>{this.props.sector.name}</button>

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
}

export default SectorItem;
