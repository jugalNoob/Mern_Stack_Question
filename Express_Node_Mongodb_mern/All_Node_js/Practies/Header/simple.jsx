app.get('/user/:id/:name',  usermain,(req, res) => {

  
     const { id, name } = req.params;
  

    console.log("Param ID:", id);
    console.log("Param Name:", name);
       // Correct header
    res.set('Content-Type', 'application/json');

    console.log('User ID:', req.params.id);

    let obj = {
        name: 'jugal sharma',
        roll: 'karan sharma'
    };

 

    res.send(obj);
});

