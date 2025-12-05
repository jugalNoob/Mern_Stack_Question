const GetQuary=async(req,res)=>{
    // URL Example:
    // http://localhost:9000/search?name=jugal&age=22

    res.send({
        message: "Query Params Example",
        query: req.query
    });


}

export default GetQuary