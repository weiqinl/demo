var PI = 3.14;

var foo = function () {
  console.log('foo-foo')
  return 'func-foo'
}

setTimeout(() => {
  PI = 3.5;
}, 1000)

// export function bar() {
//   console.log('bar-bar')
// }

// export {
//   PI,
//   foo
// }


export var PI = PI;
export var foo = foo;