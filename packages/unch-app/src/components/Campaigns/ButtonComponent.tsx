import React, {useState} from 'react';
import { Button } from 'antd';


const ButtonComponent = (props: any) => {
    const [playMode, setPlayMode] = useState(false);
    const [pause, setPause] = useState(false);

    const pauseHandler = () => {
        setPause(!pause);
        if (!playMode) {
            setPlayMode(true);
        }
    }

    const playHandler = () => {
        if (playMode) {
            setPause(false);
            setPlayMode(false);
        }
    }

    return (
        <div  className="cardsFlex">
            <Button 
                onClick={pauseHandler}
                style={{marginRight: '20px'}} 
                // disabled={!!randomDisable}
                icon={pause ? "pause-circle" : "caret-right"} 
                type="primary"
            ></Button>
            <Button 
                onClick={playHandler}
                disabled={!playMode} 
                
                icon="stop" 
                type="danger"
            ></Button>
        </div>
    )
}
export default ButtonComponent;