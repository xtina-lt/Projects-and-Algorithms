/*
- build a stop light
    - 4 lights; red, yellow, green and white
    - 4 types of vehicles
        - human powered ( bicycle ) 
            - can ONLY go if light is green
        - personal/private transportation ( private )
            - can ONLY go if light is green or yellow
            - must slow down to 20mph at yellow light
        - public transportation ( public )     x
            - can only go if light is white
            - no need to slow down
        - emergency vehicles ( emergency )     x
            - can go on any light
            - must slow down to 30 mph at yellow and white lights
            - must slow down to 20 mph at red lights
*/

/* starter code */
const VEHICLE_TYPES = {
    bicycle: 'bicycle',
    privateVehicle: 'private',
    publicVehicle: 'public',
    emergencyVehicle: 'emergency'
}

const LIGHTS = {
    white: 'white',
    green: 'green',
    yellow: 'yellow',
    red: 'red'
}

stopLight = ( vehicleType, speed, lightColor) => {
    // subtract speed
    switch (vehicleType) {
        case 'emergency' : 
            // must slow down to 30 mph at yellow and white lights
            // must slow down to 20 mph at red lights
            return (lightColor === 'yellow' || lightColor === 'white') ? 30 : (lightColor === 'red') ? 20 : speed;
        case 'private' : 
            // can ONLY go if light is green or yellow
            // must slow down to 20mph at yellow light
            return (lightColor === 'yellow') ? 20 : (lightColor== 'green') ? speed : 0;
        case 'public' : 
            // can only go if light is white
            // no need to slow down
            return (lightColor === 'white') ? speed : 0;
        case 'bicycle' : 
            // can ONLY go if light is green
            return (lightColor === 'green') ? speed : 0;
    }
}

if ( stopLight( VEHICLE_TYPES.bicycle, 20, LIGHTS.white)  !== 0 )
    console.log("bicycle 20 white failed")

if ( stopLight( VEHICLE_TYPES.privateVehicle, 40, LIGHTS.yellow) !== 20 )
    console.log("private 40 yellow failed")

if ( stopLight( VEHICLE_TYPES.emergencyVehicle, 60, LIGHTS.red) !== 20 )
    console.log("emergency 60 red failed")

if ( stopLight( VEHICLE_TYPES.publicVehicle, 15, LIGHTS.yellow) !== 0 )
    console.log("public 15 yellow failed")