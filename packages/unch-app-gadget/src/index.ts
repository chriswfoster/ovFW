import 'one-ui-styles/index.less';

import { init } from 'unch-app';
import {Event} from 'one-interact';
import { Log } from 'one-log';
import { enableTrace } from "one-trace";
import { loader } from 'one-gadget-loader';
import { bindEvents, bindHotKeyEvents } from 'one-gadget-voice';
import { BrowserLogger } from 'one-web-logger';
import { VoiceEvent } from 'one-interact-voice';
import { HAServer } from 'one-server-ha';
import {
    Action as KeyAction,
    Types as KeyActionTypes,
} from 'one-state-hotkeys';

// set up the logger
const log = new Log([
    new BrowserLogger(),    // browser console
]);

// load the gadget,
loader({
    log,
    url: './settings.json', // application settings
}, async (options: any) => {
    const {
        user,       // finesse user object
        settings,   // settings.json as json object
        resolver,   // url resolver
    } = options;

    // logged in agent id
    const agentId = user.getId();

    // enable user specific trace
    enableTrace(agentId, {
        log,
        settings,
    });

    // initialize the app
    log.debug(
        'unch-app-gagdet',
        'initializing gadget', {
            agentId,
            settings,
        }
    );

    // wait for to app initializes
    const { store }= await init('app', {
        log,
        settings,
        resolver,
        agentId,
        server: new HAServer(
            settings['servers']
        ),
        epicserver: new HAServer(
            settings['epicservers']
        )
    });

    // // deliver voice events
    bindEvents({
        log,
        settings,
        user,
    }, (event: Event):void =>{
            const { type,data:{ani,dnis,match,callertype, ctype = "patient" } } = event;
            console.log("unch-app-gagdet ------------",event);

            let pnumber = ani;
            // if(match){
            //     pnumber = match;
            // }
            log.debug(
                'unch-app-gagdet',
                'Call events ', {
                    type
                });
                if (type === VoiceEvent.END) {
                    store.dispatch ({
                        type: 'VOICE-RESET',
                        payload: event,
                    });

                    store.dispatch ({
                        type: 'one-patients-reset',
                        payload: {},
                    });
                    store.dispatch ({
                        type:"one-caller-reset",
                        payload : {}
                    })
                }
                else if (type === VoiceEvent.ARRIVE) {
                    store.dispatch ({
                        type: 'VOICE-SET',
                        payload: event,
                    });
                    let dispatchtype= "caller-patient";
                    if(ani === '4697069696' || ani === '4434243682'){
                        dispatchtype= "caller-provider";
                    }
                    
                    store.dispatch ({
                        type: dispatchtype,
                        payload: {
                            // number: "608-271-9000"
                            number:pnumber,
                            dnis:dnis
                        }
                    });
                }

    });

    // deliver hotkey events
    bindHotKeyEvents({
        log,
        settings,
        user,
    }, (data: any): void => {
        console.debug(
            'bindHotKeyEvents',
            data,
        );
        const action: KeyAction<KeyActionTypes> = {
            payload: data,
            type: KeyActionTypes.SET,
        };
        store.dispatch(action);
    });

}).then((options: any) => {
    const { settings, /*services*/ } = options;
    log.debug(
        'unch-app-gadget',
        'gadget container initiatilzed', {
            settings,
        }
    );
}).catch((exp: any) => {
    log.debug(
        'unch-app-gadget',
        'error loading gadget',
        exp,
    );
});
