import { Category } from "./type"
export const Categories: Category[] = [
    {
        type: 'Dashboard',
        url: 'Default',
        avata:'dashboard.svg',
        subCat: [
            {
                type: 'Default',
                url: 'url',
            },
            {
                type: 'Analytics',
                url: 'url',
            },
            {
                type: 'CRM',
                url: 'url',
            },
            {
                type: 'E commerce',
                url: 'url',
            },
            {
                type: 'LMS',
                url: 'url',
                new:true
            },
            {
                type: 'Management',
                url: 'url',
            },
            {
                type: 'Saas',
                url: 'url',
            },
            {
                type: 'Support desk',
                url: 'url',
                new:true
            },
        ]
    },
    {
        type: 'Calendar',
        url: 'url',
        avata:'calendar.svg',
    },
    {
        type: 'Chat',
        url: 'url',
        avata:'chat.svg',
    },
    {
        type: 'Chat',
        url: 'url',
        avata:'chat.svg',
    },
    {
        type: 'Email',
        url: 'url',
        avata:'chat.svg',
        subCat:[
            {
                type:'Inbox',
                url:'url'
            },
            {
                type:'Email detail',
                url:'url'
            },
            {
                type:'Compose',
                url:'url'
            }
        ]
    },
    {
        type:'Events',
        url:'url',
        subCat:[
            {
                type:'Create an event',
                url:'url'
            },
            {
                type:'Event detail',
                url:'url'
            },
            {
                type:'Event list',
                url:'url'
            },
        ]

    }
    ,{
        type:'E commerce',
        url:'url',
        avata:'ecommerce.svg',
        subCat:[
            {
                type:'Product'
                ,url:'url'
                ,subCat:[
                    {
                        type:'Product list'
                        ,url:'url'
                    },
                    {
                        type:'Product grid'
                        ,url:'url'
                    },
                    {
                        type:'Product detail'
                        ,url:'url'
                    }
                ]
            }

        ]
    }

]
