import React, {Component} from 'react';

import SectorItem from "./SectorItem";


class SectorList extends Component {

    render() {
        return (
            <ul>
            {
                this.props.sectors.map(sector =>
                    <li>
                        <SectorItem key={sector.id} sector={sector} />
                    </li>
                )
            }
            </ul>
        );
    }

}

export default SectorList;
