import ClickMe from './components/button/clickMe'
import Button from './components/button/Button'

export const REGISTERED_COMPONENTS = [
    {
        component: ClickMe,
        name: 'ClickMe',
        inputs: [
            {
                name: 'click_text',
                type: 'string',
                defaultValue: 'clicked',
            },
        ],
        defaultStyles: {
            textAlign: 'center',
            fontSize: "40px",
            color: "red",
            border: "3px solid red"
        },
        canHaveChildren: true,
        // noWrap: true,
    }, {
        component: ClickMe,
        name: 'ABC',
        inputs: [
            {
                name: 'click_text',
                type: 'string',
                defaultValue: 'clicked',
            },
        ],
        hideFromInsertMenu: true,
        // noWrap: true,
    }
    // , {
    //     component: Button,
    //     name: 'Button',
    //     override: true,
    //     noWrap: false,
    //     // defaultStyles: {
    //     //     textAlign: 'center',
    //     //     fontSize: "40px",
    //     //     color: "red",
    //     //     border: "3px solid red",
    //     //     // all:
    //     // },
    // },
]