// setup IE-11 polyfills
import "one-web-ie11";
import './index.less';


import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'one-ui-provider';

import {
    Actions,
    Action as VoiceAction
} from 'one-state-interact-voice';

import {
    Action as KeyAction,
    Types as KeyActionTypes,
} from 'one-state-hotkeys';

import {
    Action as ScreenPOPAction,
    Types as ScreenPOPTypes,
} from 'one-state-hotkeys';


import { App } from './app';
import { build } from './store';

export const init = (root: string, context: any): Promise<any> => {
    return new Promise((resolve) => {
        const store = build(context);
        const app = (
            <Provider store={store} context={...context}>
                <App />
            </Provider>
        );

        ReactDOM.render(
            app,
            document.getElementById(
                root,
            ),
            // done initializing
            () => resolve({
                store,
                // update state on voice events
                voice: (event: Event): void => {
                    const action: VoiceAction<Actions> = {
                        payload: event,
                        type: Actions.SET,
                    };
                    store.dispatch(action);
                },

                hotkeys: (data: any): void => {
                    const action: KeyAction<KeyActionTypes> = {
                        payload: data,
                        type: KeyActionTypes.SET,
                    };
                    store.dispatch(action);
                },
                screenpop: (data: any): void => {
                    const action: ScreenPOPAction<ScreenPOPTypes> = {
                        payload: data,
                        type: ScreenPOPTypes.SET,
                    };
                    store.dispatch(action);
                }
            }),
        );
    });
}
