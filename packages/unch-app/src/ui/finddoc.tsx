import * as React from 'react';
import Tabs from 'antd/lib/tabs';
import { Cards, Card } from 'one-ui-layout';

export const FindDoc = () => {
    return (
                <Cards>
                    <Card vscale={2} span={24} titleLabel="Find a Doctor">
                        <iframe src={" https://findadoc.unchealthcare.org/"} height="900" width="1400"/>
                    </Card>
                
                </Cards>
    )
}