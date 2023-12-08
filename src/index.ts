// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

import {logMessage} from './function/basic'
import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters'

logMessage("Hello TS")
isUserSignedIn("ABC", "XXX")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log(sum)