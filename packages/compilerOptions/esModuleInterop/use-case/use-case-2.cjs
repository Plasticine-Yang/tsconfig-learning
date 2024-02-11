/* eslint-disable @typescript-eslint/no-var-requires */

const { bar, baz, bax } = require('../lib')

// 应当正常执行，因为 lib 确实具名导出了这些属性
console.log(bar, baz, bax)
