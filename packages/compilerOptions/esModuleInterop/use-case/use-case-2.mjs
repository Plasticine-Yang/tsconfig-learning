import { bar, baz, bax } from '../lib'

// 应当正常执行，因为 lib 确实具名导出了这些属性
console.log(bar, baz, bax)
