ChatGPT said:

Here are HARD + NESTED OBJECT examples using
Object.keys, Object.values, Object.entries,
Object.assign, Object.freeze, Object.seal,
Object.hasOwn, Object.fromEntries, etc.

These examples are interview level but still easy to understand.

🔥 1. Nested Object – Loop through all keys (deep traversal)
const user = {
  name: "Jugal",
  address: {
    city: "Delhi",
    pin: 110092,
    geo: {
      lat: 28.7041,
      lng: 77.1025
    }
  }
};

function getAllKeys(obj) {
  let keys = [];

  for (let key of Object.keys(obj)) {
    keys.push(key);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys = keys.concat(getAllKeys(obj[key])); // recursion
    }
  }
  return keys;
}

console.log(getAllKeys(user));


Output:

["name", "address", "city", "pin", "geo", "lat", "lng"]

🔥 2. Deep Freeze (freeze nested objects)

Object.freeze() freezes only first level.
We need to freeze all nested levels manually.

function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key of Object.keys(obj)) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}

const settings = {
  theme: "dark",
  user: {
    name: "Jugal",
    roles: {
      admin: true,
      editor: false
    }
  }
};

deepFreeze(settings);

settings.theme = "light";       // ❌ ignored
settings.user.name = "Sharma";  // ❌ ignored
settings.user.roles.admin = false; // ❌ ignored

console.log(settings);

🔥 3. Convert Deep Nested Object → Key Paths

Very useful in interviews (flatten object).

Input
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

Output
{ "a":1, "b.c":2, "b.d.e":3 }

Code
function flattenObject(obj, parent = "", result = {}) {
  for (let [key, value] of Object.entries(obj)) {
    const newKey = parent ? parent + "." + key : key;

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

console.log(flattenObject(obj));

🔥 4. Deep Merge Using Object.assign + Recursion

Simply using Object.assign() is shallow.
We make it deep merge for nested objects.

function deepMerge(target, source) {
  for (let key of Object.keys(source)) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const obj1 = {
  user: { name: "Jugal", skills: { js: true } }
};

const obj2 = {
  user: { age: 22, skills: { node: true } }
};

console.log(deepMerge(obj1, obj2));


Output:

{
  user: {
    name: "Jugal",
    age: 22,
    skills: {
      js: true,
      node: true
    }
  }
}

🔥 5. Check if Nested Key Exists (like lodash _.has)
function hasNested(obj, path) {
  const keys = path.split(".");

  for (let key of keys) {
    if (!Object.hasOwn(obj, key)) return false;
    obj = obj[key];
  }
  return true;
}

const order = {
  id: 1,
  delivery: {
    address: {
      city: "Delhi"
    }
  }
};

console.log(hasNested(order, "delivery.address.city")); // true
console.log(hasNested(order, "delivery.pincode")); // false

🔥 6. Deep Object Transform Using Object.entries()

Convert nested object values → uppercase.

function deepUpper(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      deepUpper(value);
    } else if (typeof value === "string") {
      obj[key] = value.toUpperCase();
    }
  }
  return obj;
}

const data = {
  user: {
    name: "jugal",
    city: "delhi",
    meta: {
      status: "active"
    }
  }
};

console.log(deepUpper(data));

🔥 7. Convert Nested Object → Array of Paths (Keys + Values)
function toKeyValuePaths(obj, parent = "") {
  const result = [];

  for (let [key, value] of Object.entries(obj)) {
    const newKey = parent ? `${parent}.${key}` : key;

    if (typeof value === "object") {
      result.push(...toKeyValuePaths(value, newKey));
    } else {
      result.push({ path: newKey, value });
    }
  }

  return result;
}

const res = toKeyValuePaths({
  user: { id: 1, info: { city: "Delhi" } }
});

console.log(res);


Output:

[
  { path: "user.id", value: 1 },
  { path: "user.info.city", value: "Delhi" }
]

🎁 Want More?

I can give you:

✅ Hard Nested Questions (asked in interviews)
✅ Deep clone vs shallow clone examples
✅ Nested Object with arrays
✅ Hard problems with Object.freeze / seal
✅ Real-life use cases (MongoDB documents, API payloads, DTOs)

Just tell me!