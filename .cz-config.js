module.exports = {
    types: [
        {value: ':tada: init', name: '🎉 init:     初始提交'},
        {value: ':zap: feat', name: '⚡ feat:     增加新功能'},
        {value: ':bug: fix', name: '🐛 fix:      修复bug'},
        {value: ':lipstick: style', name: '💄 style:    样式修改不影响逻辑'},
        {value: ':recycle: refactor', name: '♻ refactor: 代码重构'},
        {value: ':bookmark: release', name: '🔖 release:  发布'},
        {value: ':rocket: deploy', name: '🚀 deploy:   部署'},
        {value: ':memo: docs', name: '📝 docs:     修改文档'},
        {value: ':white_check_mark: test', name: '✅ test:     增删测试'},
        {value: ':wrench: chore', name: '🔧 chore:    更改配置文件'},
        {value: ':rewind: revert', name: '⏪ revert:   版本回退'},
        {value: ':package: add', name: '📦 add:      添加依赖'},
        {value: ':fire: del', name: '🔥 del:      删除代码/文件'}
    ],
    scopes: [
        {name: 'components'},
        {name: 'hooks'},
        {name: 'config'},
        {name: 'styles'},
        {name: 'utils'},
        {name: 'deps'},
        //scopes为空
        {name: ''}
    ],
    messages: {
        type: '选择更改类型:\n',
        scope: '选择一个 scope（可选）:\n',
        customScope: '请输入自定义的 scope:',
        subject: '简短描述:\n',
        body: '详细描述. 使用"|"换行:\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '请输入要关闭的 ISSUES （可选）:\n',
        confirmCommit: '确认提交?'
    },
    // 允许自定义范围
    allowCustomScopes: false,
    allowBreakingChanges: ['feat', 'fix']
};
