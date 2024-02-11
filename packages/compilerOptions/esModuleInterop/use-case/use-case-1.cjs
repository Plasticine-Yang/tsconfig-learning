/* eslint-disable @typescript-eslint/no-var-requires */

const foo = require('../lib')

// 应当正常执行，因为 lib 确实默认导出了一个函数
foo()
