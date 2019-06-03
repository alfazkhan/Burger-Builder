import React from 'react';
import Auxi from '../../hoc/Auxi';
const layout = (props) => {

    let style = {
        backgroundColor : "salmon",
        marginBottom : '30px',
        height : '70px'
    };

    return(
        <Auxi>
    <div style={style}>ToolBar, Sidebar, Backdrop</div>
    <main>
        {props.children}
    </main>
    </Auxi>
    );

    
    };

export default layout