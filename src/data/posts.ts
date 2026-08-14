
/**
 * 博客文章元数据
 *
 * - id：路由用编号，如 '001' → /posts/001
 * - file：public/blog 下的 Markdown 文件名（不含 .md），可与 id 不同
 *   例如 file: 'Vue3_Study' 对应 public/blog/Vue3_Study.md
 */
export const blogPosts = [
  { id: '001', file: '1.vue2', title: 'Vue2的学习', summary: 'Vue2基础知识总结', date: '2026-05-12' },
  { id: '002', file: '2.Markdown', title: 'md的学习', summary: 'md知识点总结', date: '2026-05-14' },
  { id: '003', file: '3.Vue3', title: 'Vue3的学习', summary: 'vue3的新内容', date: '2026-05-16' },
  { id: '004', file: '4.algorithms', title: '每天两个算法题', summary: '算法学习', date: '2026-05-16' },
  { id: '005', file: '5.promise', title: '异步学习', summary: 'promise和async/await语法糖', date: '2026-05-17' },
  { id: '006', file: '6.ts', title: 'ts学习', summary: '记录ts的部分语法', date: '2026-05-18' },
  { id: '007', file: '7.MySql', title: 'MySql', summary: 'MySql数据库的学习', date: '2026-05-19' },
  { id: '008', file: '8.Pinia', title: 'Pinia', summary: 'Pinia的学习', date: '2026-05-19' },
  { id: '009', file: '9.syntactic-sugar', title: '一些语法糖', summary: '一些语法糖', date: '2026-05-22' },
  { id: '010', file: '10.sql', title: 'sql语法基础', summary: 'sql', date: '2026-05-23' },
  { id: '011', file: '11.libraries', title: '好用的第三方库', summary: '好用的第三方库推荐', date: '2026-05-24' },
  { id: '012', file: '12.Es6', title: 'es6牛逼语法', summary: '记录es6语法', date: '2026-05-24' },
  { id: '013', file: '13.knowladge', title: '杂七杂八的知识点', summary: '不知道从哪搞得杂七杂八的知识点，感觉很重要，记录下来', date: '2026-05-25' },
  { id: '014', file: '14.Node.js', title: 'Node.js学习', summary: 'node.js学的总结', date: '2026-05-25' },
  { id: '015', file: '15.express', title: 'express从入门到精通', summary: 'express学习笔记', date: '2026-05-31' },
  { id: '016', file: '16.issue', title: '前后端链接的问题', summary: '在前后端连接的过程中遇到的问题', date: '2026-06-02' },
  { id: '017', file: '17.Ajax', title: 'Ajax接受数据', summary: '不刷新整个页面，通过 JavaScript 向服务器发送/接收数据', date: '2026-06-03' },
  { id: '018', file: '18.FistProject', title: '面试题知识库项目知识点总结', summary: '第一个项目，里面总结了开发过程中知识点的学习和易错点', date: '2026-06-05' },
  { id: '019', file: '19.Regex', title: '正则表达式(Regex)', summary: '正则表达式的学习，它是一个高级文本查找与替换的硬核工具', date: '2026-06-24' },
  { id: '020', file: '20.github', title: 'github自动部署服务器', summary: '学习使用如何将github中的代码自动推送到对应的服务器并自动部署', date: '2026-06-27' },
  { id: '021', file: '21.uniapp', title: 'uni-app学习', summary: '学习如何使用uniapp以及和vue3原生写法的区别', date: '2026-06-28' },
  { id: '022', file: '22.python', title: 'python学习', summary: 'python入门到精通', date: '2026-07-15' },
  { id: '023', file: '23.fastapi', title: 'fastapi学习', summary: 'fastapi入门到精通', date: '2026-07-22' },
  { id: '024', file: '24.Pydantic', title: 'Pydantic校验学习', summary: '学习Pydantic对fastapi的数据进行校验', date: '2026-07-23' },
  { id: '025', file: '25.version', title: '软件版本号的规范', summary: '记录开发过程总版本号命名的问题', date: '2026-07-28' },
  { id: '026', file: '26.SQLAlchemy', title: 'SQLAlchemy对象关系映射', summary: '基于python的orm概念，SQLAlchemy的学习', date: '2026-08-01' },
  { id: '027', file: '27.AI', title: 'AI效率提升', summary: '如何规范化的使用ai，提升ai的效率和准确率', date: '2026-08-06' },
  { id: '028', file: '28.broker', title: '消息中间件(Message Broker)', summary: '消息中间件的概念、作用与部署学习', date: '2026-08-14' },
]

/** 根据路由参数 id（如 '001'）查找文章 */
export function findPostById(id: string) {
  return blogPosts.find((post) => post.id === id)
}
