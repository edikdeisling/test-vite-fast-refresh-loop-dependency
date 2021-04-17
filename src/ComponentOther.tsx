import React, { PureComponent } from 'react';
import { router } from './router';

class ComponentOther extends PureComponent {
    bar() {
        router.go();
    }
    render() {
        return <div>Component other</div>;
    }
}

export default ComponentOther;
