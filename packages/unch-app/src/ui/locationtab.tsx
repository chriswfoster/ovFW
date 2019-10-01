import * as React from 'react';
import Tabs from 'antd/lib/tabs';
import { Cards, Card } from 'one-ui-layout';
import { useDispatch, useSelector } from 'react-redux';

export const LocationTab = () => {
    return (
        <Cards>
            <Card vscale={2} span={24} titleLabel="Clinic Information">
                <iframe src={" https://www.uncmedicalcenter.org/uncmc/hospitals-locations/"} height="900" width="1400" />
            </Card>
        
        </Cards>
    );
};