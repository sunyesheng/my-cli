## 学习命令行工具 制作仿vue-cli的脚手架
	制作一个简易的脚手架，可用通过命令行快速生成git仓库中的框架代码。
## sys命令
	展示所有命令
## sadd命令
	sadd 依据询问 输入模板名称和模板的github地址（用户名+仓库名）
	将模板信息保存到根目录中的template.json中
## sdelete命令
	sdelete 依据询问 输入模板名称将模板删除
## slist命令
	selist 展示当前template.json中所有的模板信息
## sinit命令
	sinit <模板名称> <生成项目文件名称>
	可以快速生成github仓库中已有的项目名称
	未实现动态模板生成
## 过程中使用的包
	·commander				命令模块
	·chalk					命令行颜色
	·ora					加载过程动画
	·download-git-repo		从github等库下载
	·inquirer				交互式命令
	·fs						node.js自带文件操作
## 使用方法
	·git clone ...          下载仓库
	·npm i/npm install 		下载所需依赖项
	·npm link 				链接到包文件夹
	·开始使用命令