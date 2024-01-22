import ClickMe from './components/button/clickMe'

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
            color: "red"
        },
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
        hideFromInsertMenu: true
    },
]