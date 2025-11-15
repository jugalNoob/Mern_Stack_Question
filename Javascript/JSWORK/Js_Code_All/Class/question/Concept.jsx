🧠 20. Class Best Practices

✅ Use get/set for controlled access

✅ Prefer composition over deep inheritance

✅ Use private fields for sensitive data

❌ Avoid overwriting methods with primitive values

✅ Use static for utilities or shared config

✅ Throw errors in abstract base methods to force overrides


| Concept             | Keyword / Feature  | Example                   |
| ------------------- | ------------------ | ------------------------- |
| Basic Class         | `class`            | `class A{}`               |
| Constructor         | `constructor`      | runs on `new`             |
| Methods             | prototype methods  | `greet(){}`               |
| Properties          | Public fields      | `count = 0`               |
| Get/Set             | `get` / `set`      | Encapsulation             |
| Static              | `static`           | Utility methods           |
| Inheritance         | `extends`, `super` | class B extends A         |
| Polymorphism        | override methods   | `makeSound`               |
| Encapsulation       | `#private`         | `#field`                  |
| Abstract pattern    | `new.target`       | throw if base             |
| Composition         | combine objects    | Car + Engine              |
| Mixins              | HOF pattern        | `const Mixin = Base=>...` |
| Singleton / Factory | static control     | design patterns           |
