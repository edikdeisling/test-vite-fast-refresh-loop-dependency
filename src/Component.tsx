import React, { ComponentType, PureComponent } from 'react';
import { STATES_CONST } from './states';

/**
 * This could be a redux connect
 */
function connect(Cmp: ComponentType) {
    return Cmp
}

class Component extends PureComponent {
    render() {
        return <div>States const: {STATES_CONST}</div>;
    }
}

export default connect(Component);
