import React from 'react';
import {Card, Button} from 'antd'

export default class AudioElement extends React.Component<any, any>{
    constructor(props: any){
        super(props)
    }

    render(){
        return (
            <Card style={{width: '30vw', minWidth: 405}}>
                Audio Element
                <Button icon="delete" onClick={() => this.props.delete(this.props.index)}></Button>
            </Card>
        )
    }

}