export default {
    "Entrance" : {
        "name":"Entrance",

        "upNeighbour":"Golden Gate",
        "downNeighbour":null,
        "leftNeighbour":null,
        "rightNeighbour":null,
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"

    },

    "Golden Gate" : {
        "name":"Golden Gate",

        "upNeighbour":"Golden Gate Stairs",
        "downNeighbour":"Entrance",
        "leftNeighbour":null,
        "rightNeighbour":null,
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    },

    "Golden Gate Stairs" : {
        "name":"Golden Gate Stairs",

        "upNeighbour":"RF ouse",
        "downNeighbour":"Golden Gate",
        "leftNeighbour":"E Block",
        "rightNeighbour":"Bridge",
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    },

    "E Block" : {
        "name":"E Block",

        "upNeighbour":null,
        "downNeighbour":"Golden Gate Stairs",
        "leftNeighbour":null,
        "rightNeighbour":"D Block",
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    },

    "Bridge" : {
        "name":"Bridge",

        "upNeighbour":null,
        "downNeighbour":"Golden Gate Stairs",
        "leftNeighbour":"B Block",
        "rightNeighbour":"A Block",
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    },

    "RF House" : {
        "name":"RF House",

        "upNeighbour":null,
        "downNeighbour":"Golden Gate Stairs",
        "leftNeighbour":"E Block",
        "rightNeighbour":"B Block",
        
        "juice":"some juice",
        "photo":"some photo",
        "video":"some video"
    }
}