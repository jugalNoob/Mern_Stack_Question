// Option 1: Export the function directly


const Paraget = async (req, res) => {
  const { id, name } = req.params;
// http://localhost:9000/home/10/jugal
   res.send({
        message: "Route Params Example",
        userId: id,
        userName: name,
           query: req.query
    });
};

export default Paraget;




// Option 2: Export inline
// export default async function Paraget(req, res) {
//   const { id, name } = req.params;
//   res.send({ id, name });
// }


// 4) Mixed Params + Query Example
// -----------------------------
// router.get('/shop/:city', (req, res) => {
//     // URL Example:
//     // /shop/delhi?page=2&limit=10

//     res.send({
//         city: req.params.city,
//         page: req.query.page,
//         limit: req.query.limit
//     });
// });
