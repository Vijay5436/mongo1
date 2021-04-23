const Server =require('../database');


const getAllPost =async (req,res)=>{
    try {
        const posts = await Server.find();
        res.json(posts);
    }
    catch(err){
        res.json({status : "false" , message : "error"})
    }
};

const storeAPost = async(req,res)=>{
    const post = new Server({
        frist_name : req.body.frist_name,
        last_name : req.body.last_name,
        age : req.body.age
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({status : "false" , message : "error"})
    })
};

module.exports ={
    storeAPost,
    getAllPost
}