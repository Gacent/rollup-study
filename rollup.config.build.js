import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

export default {
  input:'./src/index.js', // 类似于webpack entry
  output:{  // webpack  output
    file:'./dist/bundle.js',
    format:'iife',// amd/es/iife/umd/cjs/system
    name:'calculator',// 输出格式为iife或umd时候必须提供，将会为全局变量window下注册
    global:{
      lodash:'_'  // 告诉rollup，lodash这个模块不打包，要取值 从全局变量_上取
    }
  },
  plugins:[
    babel({ // webpack module exclude
      exclude:/node_modules/
    }),
    resolve(),
    commjs(),
    terser(),
    postcss()
  ],
  external:['lodash'] // 不打包lodash，一般是使用CDN的时候。格式只能使用iife，并加一个属性globals
}