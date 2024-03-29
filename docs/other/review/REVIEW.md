#### 业务项目背后的思考
  - 广播电台：需要对接蜻蜓FM的直播流协议
    - 了解常见的直播流协议、JSBridge工作原理、离线包/接口预加载的实现原理
  - 个性化触达：组件复用性、通用方案
    - 各类数据通信方案的选取/区别、通用组件（原子组件、业务组件、其它项目适用性）、渲染庞大数据的手段及原理（分片、虚拟列表）
  - 单曲页：围绕 “性能优化” 进行考虑
    - 传统的性能优化手段（分析、优化）、新指标的原理/使用原因、关注用户的感官体验（开放标签跳转）
  - 音频组件封装：输出一款 能够打通云音乐Native播放能力的音频组件 上层封装
    - 处理Web音频的高级手段（AudioContext）、常见的组件设计原则/设计模式、拆包的成本/价值、组件文档的话术/格式/最佳实践


#### 你认为你在业务的杰出贡献、产出？
  - 单曲页性能优化
    - 背景：针对“云音乐的站外单曲播放页”进行的基于Web-Vitals的性能优化
    - 措施：深入分析工程结构；针对单曲页逻辑梳理（引用的包/版本）；减包、延迟加载、SSR等措施
    - 成果：
        - （工程内）提升页面秒开率，接近Lighthouse的体验基线；剔除冗余包，首屏资源体积大幅下降；日活千万级，ROI较高；
        - （工程外）沉淀了一套通用的性能优化方案，以文章形式记录了下来。在公司范围内推送了这篇文章
  - 公共音频组件
    - 背景：是一套 基于JSBridge的，能打通Native播放能力的公共组件
    - 措施：设计和开发组件；根据不同平台拆包；在组件内部处理客户端两端不一致问题
    - 成果：提升业务侧的接入效率；承接云音乐App内大部分WebView的播放场景（排行榜、新歌发布），后续会赋能给更多有播放需求的业务；


#### 目前在团队担任角色、职责，日常工作流程
  - 角色/职责：
    - 角色：云音乐平台组的前端开发；曾经担任过一名实习生导师
    - 职责：负责平台相关的PC、移动端开发；技术上参与性能优化专项建设、公共音频封装、和客户端对接JSBridge
  - 日常工作流程/技术负责人：
    - 单周四需求评审，双周四排期
    - 开发前：任务估时/人员安排；技术方案制定/评审
    - 开发中：跟进开发进度；和上下游负责人保持沟通；遇到风险及时向PM暴露
    - 开发后：项目复盘/反思（值得保持/发扬的，下次避免的）


#### 平时如何学习前端、学习习惯
  - 工作上
    - 输入：来自业务的方案制定/复盘、听取优秀同事的分享（年度歌单、性能优化相关）
    - 输出：组内分享（每半年一次）、公司范围内的文章发表（共2篇）
  - 私底下
    - 输入：逛技术社区（掘金、V2EX、Github）、参与技术大会（线下/直播）
    - 输出：定期更新个人的技术博客


#### 对前端的看法，未来趋势
  - 看法：
    - 是一件成熟产品的最终形态
    - 与用户最接近————需考虑各类用户的兼容/适配/性能；
    - 在开发过程中，承接着上下游（交互/视觉/后端/QA）————需保持上下游信息畅通/一致；
  - 未来趋势：
    - 5G时代/万物互联，特点：高速率、低延时。有交互的地方就有前端的价值（平面、立体）
    - 跨端开发：Hybrid App、PWA 可以与 Native App 相竞争；Flutter
    - 技术挑战：流媒体在体验性上考验；HTTP2的普及
    - 算法相关：TensorFlow（机器学习系统）也出了JS版本
    

#### 个人的未来规划
  - 短期规划：未来3年内，继续在前端方向专研（尤其是中后台赋能部分）。
    - 同时也要巩固基础、不断学习新技术（微前端、Serverless、Flutter）
    - 不断地去探索 为业务提效 的方案
  - 长期规划：全栈方向
    - 在学校学习的是Java
    - 也希望能深入nodejs
    - 同时对算法模型也有了解


#### 个人的优缺点
  - 优点：
    - （工作上）过程管理做的比较好，及时记录文档、项目沉淀；
        - 举例：
            - 场景：对H5页进行性能优化，
            - 行动：分析性能指标/瓶颈；深入研究工程结构；调研优化方案；验证效果；文档沉淀
            - 结果：
        - （性格上）乐于沟通，喜欢广交朋友，尽我的力量给团队营造一种积极向上的氛围
    - 缺点：
        - 作为一名开发，对于 自己开发的产品 所能提供的一些有效想法/提升市场竞争力措施，这类贡献较少（目前更多是在行动上）。
            - 解决方案：站在 产品/用户侧 对产品有效思考、了解同类竞品比较；为 提升产品竞争力 出一份力
        - 进行有效的会议沟通（常见于跨团队）
            - 解决方案：
                - 会议前梳理大致的提纲；
                - 过程中抓住核心重点；
                - 安排估时以及工作量；
                - 初步敲定后续解决方案
                - 多站在对方角度思考问题


#### 如何看待加班？
  - 分析加班原因：对一天的总结、学习新技术；项目赶进度、工作效率低
  - 解决办法：
    - 项目赶进度：合理安排人员、积极和PM/上下游沟通（保证消息同步）、提前暴露风险
    - 工作效率低：加强评审环节（是否没有理解/分析全面“需求”、是否没有提前透析“技术难点”），保证开发流程正常推进
  - 自身贡献：因为我目前单身，团队需要我的时候我一定会主动站到一线去。（因为这不仅利于团队解决问题，也可以不断提升自己）


#### 为什么当初选择杭州？
  - 客观角度：杭州互联网氛围是比较浓厚的（大部分互联网公司的核心部门在杭州）；是众多技术大会的举办点；是个高速成长的城市
  - 主观角度：大学时期来过杭州参加比赛；学校里一些优秀的师兄师姐也有选择在杭州就业

#### 为什么选择曲库？
  - 现状：在云音乐的技术成长达到一定瓶颈
    - 平时在业务/技术上也有不断和同行产品（QQ音乐、酷狗音乐）进行对比/学习（第一印象是QQ音乐的性能优化做的不错）
  - 投简历前：有向 曲库HR/组长/在腾讯工作的朋友 初步了解到QQ音乐这边曲库组的职能、背景
  - 与 个人规划 契合：
    - 希望能在中后台方面 进行前端侧 赋能（因为在C端、性能优化、兼容性方面了解比较深入；短期规划）
    - 往全栈方向发展（长期规划）
  - 与 目前所在岗位匹配度 比较高：
    - 之前有过和 云音乐曲库同事 的合作经验（了解曲库的大致工作职能）
    - 有稍微了解过AI方面的相关知识（室友在 网易新闻 做NLP，平时有聊到过一些 内容画像 方面）
        - 算法工作流程：
            - 1. 先是由 NLP 进行一个自然语言处理，建模贴特征（对文章提取关键词、找到对应标签）。然后把特征交给推荐团队；
            - 2. 推荐团队下的 召回组先召回（千万级别数据 -> 千级别数据），筛选提炼数据后
            - 3. 再由排序组进行：精排、混排（更丰富多样）、强制干预
            - “标签”可以把 一件事物 “更具有代表性的特点” 抽象出来。
        - 用户画像、内容画像
        - 推荐算法：召回、过滤、精排、混排（更丰富多样）
 
#### 曲库的背景、业务前景
  - 背景：
    - 负责基础平台、中后台产品开发。
    - 有独立的开发团队，也有公线的技术中台；
    - 与数据部门接触比较多
    - 更重要的是，希望前端往全栈方向发展（与本人的 长期规划 相匹配）；
    - 希望能在中后台方面 进行前端侧 赋能（与本人的 短期规划 相匹配）
  - 业务前景：
    - 了解到目前正在着手组建一个 “知识图谱平台”
    - 智能标签、对接AI模型
