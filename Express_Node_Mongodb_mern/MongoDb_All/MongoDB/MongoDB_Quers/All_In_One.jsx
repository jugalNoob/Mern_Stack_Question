📚 MongoDB Operators Cheat Sheet
1️⃣ Date Operators


| Operator      | Description              | Example                                                   |
| ------------- | ------------------------ | --------------------------------------------------------- |
| `$year`       | Extracts year            | `{ $expr: { $eq: [{ $year: "$eventDate" }, 2024] } }`     |
| `$month`      | Extracts month           | `{ $expr: { $eq: [{ $month: "$eventDate" }, 3] } }`       |
| `$dayOfMonth` | Day of month             | `{ $expr: { $eq: [{ $dayOfMonth: "$eventDate" }, 15] } }` |
| `$dayOfWeek`  | 1 = Sunday, 7 = Saturday | `{ $expr: { $eq: [{ $dayOfWeek: "$eventDate" }, 1] } }`   |
| `$dayOfYear`  | Day count from Jan 1st   | `{ $expr: { $eq: [{ $dayOfYear: "$eventDate" }, 100] } }` |
| `$week`       | Week of the year         | `{ $expr: { $eq: [{ $week: "$eventDate" }, 12] } }`       |


2️⃣ Arithmetic Operators


| Operator    | Description                      | Example                                   |
| ----------- | -------------------------------- | ----------------------------------------- |
| `$add`      | Adds numbers or dates            | `{ $add: ["$price", 10] }`                |
| `$subtract` | Subtracts numbers or dates       | `{ $subtract: ["$price", 5] }`            |
| `$multiply` | Multiplies numbers               | `{ $multiply: ["$price", 2] }`            |
| `$divide`   | Divides numbers                  | `{ $divide: ["$price", 2] }`              |
| `$mod`      | Remainder of division            | `{ $mod: ["$price", 3] }`                 |
| `$abs`      | Absolute value                   | `{ $abs: { $subtract: ["$price", 50] } }` |
| `$ceil`     | Round up                         | `{ $ceil: "$price" }`                     |
| `$floor`    | Round down                       | `{ $floor: "$price" }`                    |
| `$round`    | Round to nearest integer/decimal | `{ $round: ["$price", 2] }`               |



3️⃣ Field Update Operators


| Operator  | Description                           | Example                               |
| --------- | ------------------------------------- | ------------------------------------- |
| `$max`    | Updates field if value is **greater** | `{ $max: { score: 90 } }`             |
| `$min`    | Updates field if value is **less**    | `{ $min: { score: 50 } }`             |
| `$inc`    | Increment/decrement a field           | `{ $inc: { score: 5 } }`              |
| `$mul`    | Multiply field value                  | `{ $mul: { score: 2 } }`              |
| `$rename` | Rename a field                        | `{ $rename: { oldName: "newName" } }` |



4️⃣ Array Expression Operators (Aggregation)


| Operator        | Description                 | Example                                       |
| --------------- | --------------------------- | --------------------------------------------- |
| `$isArray`      | Check if value is an array  | `{ $isArray: "$tags" }`                       |
| `$size`         | Number of elements in array | `{ $size: "$tags" }`                          |
| `$arrayElemAt`  | Element at specific index   | `{ $arrayElemAt: ["$tags", 2] }`              |
| `$concatArrays` | Concatenate arrays          | `{ $concatArrays: ["$tags", "$categories"] }` |
| `$reverseArray` | Reverse array               | `{ $reverseArray: "$tags" }`                  |



5️⃣ Array Query Operators


| Operator     | Description                                | Example                                                                    |
| ------------ | ------------------------------------------ | -------------------------------------------------------------------------- |
| `$all`       | Must contain all values                    | `{ hobbies: { $all: ["jugal", "sharma"] } }`                               |
| `$in`        | Any value matches                          | `{ hobbies: { $in: ["jugal", "sharma"] } }`                                |
| `$elemMatch` | Single element matches multiple conditions | `{ projects: { $elemMatch: { duration: { $gt: 12 }, role: "Manager" } } }` |
| `$size`      | Exact array length                         | `{ skills: { $size: 5 } }`                                                 |


6️⃣ Array Update Operators


| Operator               | Description                               | Example                                      |
| ---------------------- | ----------------------------------------- | -------------------------------------------- |
| `$pull`                | Remove elements matching condition        | `{ $pull: { skills: "PHP" } }`               |
| `$pop`                 | Remove first (-1) or last (1) element     | `{ $pop: { skills: 1 } }`                    |
| `$pullAll`             | Remove multiple values                    | `{ $pullAll: { skills: ["PHP", "Java"] } }`  |
| `$push`                | Add elements to array                     | `{ $push: { skills: "Node.js" } }`           |
| `$` (Positional)       | Update first array element matching query | `{ $set: { "skills.$": "Python" } }`         |
| `$[]` (All Positional) | Update all elements in array              | `{ $set: { "skills.$[]": "UpdatedSkill" } }` |



7️⃣ String Operators (Aggregation)

| Operator      | Description                         | Example                                         |
| ------------- | ----------------------------------- | ----------------------------------------------- |
| `$concat`     | Concatenate strings                 | `{ $concat: ["$firstName", " ", "$lastName"] }` |
| `$strcasecmp` | Case-insensitive string comparison  | `{ $strcasecmp: ["$name1", "$name2"] }`         |
| `$toUpper`    | Convert string to uppercase         | `{ $toUpper: "$name" }`                         |
| `$toLower`    | Convert string to lowercase         | `{ $toLower: "$NAME" }`                         |
| `$substrCP`   | Substring using Unicode code points | `{ $substrCP: ["$name", 0, 4] }`                |
