
//validators to handle errors
const createToDoValidator =
    (req,res,next) =>{

        //Handling user input validation by stating that user input is required
        if(!req.body.text){
            //throw error ('text is required')
            return res.json({success:false,error:{text:['text is required']}})
            next()
        }
        
    }

    module.exports = createToDoValidator;