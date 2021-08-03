#!/usr/bin/env node
const program = require('commander')
program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('add', '添加模板以及模板路径')
  .command('delete', '删除模板')
  .command('list', '展示所有模板')
  .command('init', '通过模板，生成项目')
  
// 解析命令行参数
program.parse(process.argv)