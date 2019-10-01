import React from 'react';
import {Layout} from 'antd';
import {
    Card,
    Cards,
} from 'one-ui-layout';
import { useDispatch } from 'react-redux';
import { useCtx } from 'one-ui-provider';
import Main from './ui/main';
import innerRouter from './router/innerRouter';
import Campaigns from './components/Campaigns';


interface Props {
}

export const App = (props: Props) => {
    // const dispatch = useDispatch();
    // const { resolver } = useCtx();
    return (
        <div>
            {innerRouter}
        </div>
    )
}