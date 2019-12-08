# 贡献指南

很高兴您有兴趣为本项目做贡献。在提交您的贡献之前，请确保花一点时间通读以下准则：

## Issue 报告指南

如果提交的是 Bug 报告，请务必使用本项目提供的issue模板。

## Pull Request 指南

1. commit 信息请遵循 [commit规范](https://github.com/conventional-changelog/commitlint)。
2. 如果增加了新功能，请一并增加新功能对应的测试用例。
3. 务必保证 `npm run build` 时能够编译成功，`npm run test` 时能够通过所有测试用例。

## 开发配置

您需要 Node.js 版本10+，克隆仓库后运行：

```bash
$ npm install # or yarn
$ npm run bootstrap
```

## 代码风格

* 请务必遵循本项目 ESlint 配置的代码风格
