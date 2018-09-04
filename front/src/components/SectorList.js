import React, {Component} from 'react';


class SectorList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.sectors.map(sector =>
                <ul>
                    <li key={sector.id}>{sector.name}</li>
                    {
                        sector.items && <SectorList sectors={sector.items}/>
                    }
                </ul>
            )
        );
    }
}

export default SectorList;
