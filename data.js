/* data for beach locations */
var beachLocations = {
    whiteplains: [
        {lat:21.300776, lng:-158.051877},
        {lat: 21.303286, lng:-158.045182},
        {lat:21.300968,lng:-158.044601},
        {lat: 21.299284,lng:-158.051803}
    ],
    Waimanalo: [
        {lat: 21.372965224424746,lng: -157.7071450461632},
        {lat:21.36848919193458, lng: -157.70903332130968},
        {lat:21.35649914519992, lng:-157.70697338478624},
        {lat: 21.345787206987513, lng:-157.70182354347764},
        {lat: 21.334754691315762, lng:-157.6946137656456},
        {lat: 21.32787893574863, lng: -157.6862023581749}
    ],
    barbersPoint: [
        {lat: 21.296811701394745,lng: -158.10407638549805},
        {lat: 21.32687713189918, lng: -158.1221866607666},
        {lat: 21.325376599500494, lng: -158.1302145551449},
        {lat: 21.295630742452143, lng: -158.1108168195492}

    ],
    kolina: [
        {lat: 21.325216691647935, lng: -158.12343393075525},
        {lat: 21.32457705849543, lng: -158.13467775094568},
        {lat: 21.35350402752141, lng: -158.14084798481144},
        {lat: 21.353099393361003, lng: -158.13042640686035}
    ],
    kahe: [
        {lat:21.353099393361003, lng: -158.13042640686035},
        {lat:21.353099393361003, lng:-158.13042640686035},
        {lat:21.353099393361003, lng: -158.13042640686035},
        {lat:21.353099393361003, lng: -158.13042640686035},
        {lat:21.354471995819637, lng: -158.13543978697174},
        {lat:21.360953012411922, lng: -158.13694182402008},
        {lat: 21.36123278284591, lng: -158.13196364408844}
    ],
    tracks: [
        {lat: 21.360093868854534, lng: -158.1314778327942},
        {lat: 21.36022328261391, lng: -158.1361651392857},
        {lat: 21.369235663549908, lng: -158.14011335095563},
        {lat:21.36931559349392, lng: -158.13629388531842}
    ],
    blackRocks: [
        {lat:21.36938601261368, lng: -158.1364130973816},
        {lat:21.36811637647111, lng: -158.14000592427345},
        {lat:21.372012940243803,lng: -158.1445334930906},
        {lat:21.375000979281776, lng: -158.1403613090515}
    ],
    waikiki: [
        {lat: 21.278011552971183, lng: -157.83154862591869},
        {lat: 21.27427245640841, lng: -157.82176392743236},
        {lat: 21.270873195265832, lng: -157.82704251477367},
        {lat: 21.27543218636304, lng: -157.8333725280488}
    ]

}

/* Trash reports Marker Data */ 
var trashMarkers = [
    [{
        position: {lat:21.300776, lng:-158.050877},
    },
    {
        type: 'marker',
        img: 'https://www.latimes.com/resizer/KdIk05pAdPq_mvVNxut7akgCYNg=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OEPP33I3W5GB3HI5VV2AGI3A6M.jpg',
        description: 'Ohhh, Ocean Trashhhh'
    }


    
    ],

    // [{
    //     position: {
    //         lat:21.10000, lng:-157.8000009
    //     },
    //     {
    //     type='marker';
    //     img: '';
    //     description:'';
    //     }

    // ]


    [{//tracks
        position: {lat:21.190304, lng:-157.132567},
        position: {lat: 21.003945, lng: -157.00004564},
        position: {lat: 21.140335, lng: -157.111111}
    },
    {
        type: 'marker',
        img: 'https://www.samuiislanddivers.com/wp-content/uploads/2018/04/ocean-trash.jpg',
        description: 'Such a messy mess'
    }


    
    ],

    [{//tracks
        
        position: {lat: 21.003945, lng: -157.00004564}
       
    },
    {
        type: 'marker',
        img: 'https://www.samuiislanddivers.com/wp-content/uploads/2018/04/ocean-trash.jpg',
        description: 'Such a messy mess'
    }


    
    ],

    [{//tracks
    
        position: {lat: 21.140335, lng: -157.111111}
    },
    {
        type: 'marker',
        img: 'https://www.samuiislanddivers.com/wp-content/uploads/2018/04/ocean-trash.jpg',
        description: 'Such a messy mess'
    }


    
    ],


    [{//blackRocks
        position: {lat:21.274061, lng:-157.827918},
    },
    {
        type: 'marker',
        img: 'https://cdnph.upi.com/svc/sv/i/7391494876437/2017/1/14948766072961/Coast-Guard-rescues-four-sea-turtles-tangled-in-trash.jpg',
        description: 'Found trash around here'
    }


    
    ],



    [{//kahe
        position: {lat:21.34030400, lng:-157.1299039},
    },
    {
        type: 'marker',
        img: 'https://www.latimes.com/resizer/KdIk05pAdPq_mvVNxut7akgCYNg=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/OEPP33I3W5GB3HI5VV2AGI3A6M.jpg',
        description: 'Wow my enviorment is so dirty'
    }


    
    ],


    [{//kolina
        position: {lat:21.315732, lng:-157.100049},
        position: {lat: 21.30111111, lng: -157.0620939}
    },
    {
        type: 'marker',
        img: 'https://thumbnails.cbc.ca/maven_legacy/thumbnails/100/715/STILL_MarianasTrench.jpg?crop=1.777xh:h;*,*&crop=w:0.5625xw;*,*&downsize=1280px:*',
        description: 'Ohhh, ocean trashhh'
    }


    
    ],

    [{//kolina
        
        position: {lat: 21.30111111, lng: -157.0620939}
    },
    {
        type: 'marker',
        img: 'https://thumbnails.cbc.ca/maven_legacy/thumbnails/100/715/STILL_MarianasTrench.jpg?crop=1.777xh:h;*,*&crop=w:0.5625xw;*,*&downsize=1280px:*',
        description: 'Ohhh, ocean trashhh'
    }


    
    ],


    [{//barbersPoint
        position: {lat:21.3199304, lng:-157.12939},
        position: {lat: 21.30123, lng: -157.11000},
        position: {lat: 21.30000432, lng: -157.1004632},
        position: {lat: 21.3203432, lng: -157.102345}
    },
    {
        type: 'marker',
        img: 'http://ww2.kqed.org/science/wp-content/uploads/sites/35/2013/06/tire-ledge.jpg',
        description: 'So much trash'
    }


    
    ],

    [{//barbersPoint
       
        position: {lat: 21.30123, lng: -157.11000},
       
    },
    {
        type: 'marker',
        img: 'http://ww2.kqed.org/science/wp-content/uploads/sites/35/2013/06/tire-ledge.jpg',
        description: 'So much trash'
    }


    
    ],

    [{//barbersPoint
       
        position: {lat: 21.30000432, lng: -157.1004632},
        
    },
    {
        type: 'marker',
        img: 'http://ww2.kqed.org/science/wp-content/uploads/sites/35/2013/06/tire-ledge.jpg',
        description: 'So much trash'
    }


    
    ],

    [{//barbersPoint
       
        position: {lat: 21.3203432, lng: -157.102345}
    },
    {
        type: 'marker',
        img: 'http://ww2.kqed.org/science/wp-content/uploads/sites/35/2013/06/tire-ledge.jpg',
        description: 'So much trash'
    }


    
    ],



    [{//waimanalo
        position: {lat:21.3409099304, lng:-157.6999939},
    },
    {
        type: 'marker',
        img: 'images/nice.jpg',
        description: 'Found this recently'
    }
    ],
    [{
        position: {lat:21.307596, lng:-158.115280}
    },
    {
        type: 'marker',
        img: 'http://news.nationalgeographic.com/content/dam/news/2015/06/06/monsternet/04monsternet.jpg',
        description: 'Poor Walrus, Hope he gets help'
    }
    ],


];