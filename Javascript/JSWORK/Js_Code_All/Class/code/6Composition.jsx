8) Composition, Mixins, and Abstract patterns

Prefer composition when appropriate:

Composition:

class Engine { start(){ console.log('engine on'); } }
class Car {
  constructor(engine){ this.engine = engine; }
  start(){ this.engine.start(); }


class Engine { start(){ console.log('engine on'); } }
class Car {
  constructor(engine){ this.engine = engine; }
  start(){ this.engine.start(); }
}




Mixin example:

const SayMixin = Base => class extends Base {
  say() { console.log('hi'); }
};
class Base {}
class Mixed extends SayMixin(Base) {}
new Mixed().say();


Abstract-like base:

class AbstractAnimal {
  constructor(){ if (new.target === AbstractAnimal) throw new Error('Abstract'); }
  speak(){ throw new Error('must override speak'); }
}