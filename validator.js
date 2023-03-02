const joi=require('joi')
const validator=(schema)=>(payload)=>
schema.validate(payload,{abortEarly:false});

const signupSchema=joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(3).max(10).required(),
    confirmPassword:joi.ref('password'),
    address:{
        state:joi.string().length(2).required(),
    },
    DOB:joi.date().greater(new Date("2012-01-01")).required(),
    referred:joi.boolean().required(),
    referralDetails:joi.string().when('referred',{is:true,then:joi.string().required().max(3).max(50),
    otherwise:joi.string().optional()}),
    hobbies:joi.array().items(joi.string(),)
});    

exports.validatesignup=validator(signupSchema);