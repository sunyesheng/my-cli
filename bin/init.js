#!/usr/bin/env node

// 添加命令 模块 commander.js
const program = require('commander')
// 颜色插件
const chalk = require('chalk')
// loading旋转效果
const ora = require('ora')
// 从github下载 插件
const download = require('download-git-repo')
// __dirname指向的是当前的绝对路径 ./指向的是当前的工作路径
const tplObj = require(`${__dirname}/../template`)

program
  // 命令使用规则 定义命令的别名描述和用法
  .usage('<command> [options]')
program.parse(process.argv)
// 当没有输入参数的时候给个提示
if (program.args.length < 1) return program.help()

//两个参数 第一个选择用什么模板 第二个选择用什么文件夹名字
let templateName = program.args[0]
let projectName = program.args[1]
// 校验是否输入了参数 并且参数是否存在
if (!tplObj[templateName]) {
  console.log(chalk.red('\n 模板不存在 使用slist查看模板! \n '))
  return
}
// 校验是否输入了文件名称参数
if (!projectName) {
  console.log(chalk.red('\n 项目文件名不能为空! \n '))
  return
}

// downlod 下载路径 从main分支中获取
url = tplObj[templateName] + '#main'
// 打印白色 的正在等待信息
console.log(chalk.white('\n 开始生成项目... \n'))
// 出现加载图标
const spinner = ora("正在加载...");
spinner.start();
// 执行下载方法并传入参数
download (
  url,
  projectName,
  err => {
    if (err) {
      // 旋转图标结束 失败 提示错误信息
      spinner.fail();
      console.log(chalk.red(`生成模板错误. ${err}`))
      return
    }
    // 结束加载图标 成功
    spinner.succeed();
    // 提示绿色的成功信息
    console.log(chalk.green('\n 成功生成模板'))
    console.log('\n 开始你的项目')
    console.log(`\n    cd ${projectName} \n`)
    }
)