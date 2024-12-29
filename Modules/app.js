import {add,sub} from "./math.js";
import greet from "./greet.js";
import {getUser,setuser} from "./user.js";
import divide from "./calculator.js";
import { multiply } from "./calculator.js";
import { calculatesum as sum } from "./mathoperation.js";
import { toUpperCase, toLowerCase, capitalize } from './stringutils.js';
import config from "./config.js";
import {person} from "./person.js";
import * as utils from "./index.js";
import subtract1,{multiply1} from "./mathoperation1.js";
//import { functionA } from "./modleA.js";
//functionA();
multiply1(10,20)
subtract1(40,20)
utils.add(40,50)
utils.reverseString("rajkumar")
const person1=new person("santosh",25);
console.log(person1.getdetails())
console.log("AppName:",config.appName)
console.log("version:",config.version)
console.log("author:",config.author)
toUpperCase("lokesh")
toLowerCase("LOKESH")
capitalize("king")
sum(10,20)
divide(40,20)
multiply(40,20)
getUser("Raju")
setuser("Hemanth")
greet("Lokesh")
add(10,20)
sub(10,20)
