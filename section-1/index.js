function createReactiveObject (obj) {
  const keys = Object.keys(obj);

  obj.$data = Object.assign({}, obj);

  keys.forEach( (key) => {
    Object.defineProperty(obj, key, {
      set: reactiveSetter.bind(obj,key),
      get: reactiveGetter.bind(obj)
    })
  })
}

let user = {
  name: 'ABC',
  score: 0

};

function reactiveSetter(property,value){
  this.$data[property] = value;
  console.log(`${property} has changed`);
}

function reactiveGetter(property) {
  console.log(`get ${property}`);
  return this.$data[property];
}

// -- ES5 --
// Object.defineProperty(user, 'name', {
//   get() {
//     return this.$name;
//   },
//   set(value) {
//     this.$name = value;
//     console.log("name changed")
//   }
// })

createReactiveObject(user);

user.name = 'KS';

console.log(user.name);
