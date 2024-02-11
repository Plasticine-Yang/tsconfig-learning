function foo() {
  console.log('function: foo')
}

foo.bar = {
  name: 'bar',
}

foo.baz = {
  name: 'baz',
}

foo.bax = 'bax'

foo.default = {
  name: 'default',
}

module.exports = foo
