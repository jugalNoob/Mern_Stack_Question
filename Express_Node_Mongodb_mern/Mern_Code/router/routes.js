import { Router } from "express";

const router = Router();
import { ClickButton} from "../middleware/simple.js";

import Paraget from '../controller/Param_quary/Param.js'
import  GetQuary from '../controller/Param_quary/quary.js'
import  GetStream from '../controller/Stream/Base_stream.js'

// Router-level middleware
// router.use((req, res, next) => {
//     console.log("Router-Level Middleware Running");
//     next();
// });


//---->Stream Important ---------------->

router.get('/stream' , GetStream)


// --->Quary Important --------------->>
router.get("/search", GetQuary);


//--- Params Important ---------------->>
router.get("/home/:id/:name",ClickButton, Paraget);


// --------> Quary Important 


//--------------------
// set A header  
//-----------------


router.get('/header', (req, res) => {
    // Set the Content-Type header
    res.set('Content-Type', 'application/json');

    // Send a JSON response
    res.send({ message: "Header set successfully" });
});


export default  router