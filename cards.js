export const cards = [
    //normal cards
    { 
        text: "要一起进行特训吗？", 
        options: [
            { effect: { event: "none", strength: 1, money: -1, stability: 1, popularity: 0 }, text: "太好了！" }, 
            { effect: { event: "none", strength: -1, money: 1, stability: -1, popularity: -1 }, text: "我可能不太想..." }
        ] 
    },
    { 
        text: "我们一起去唱K吧？", 
        options: [
            { effect: { event: "none", strength: 1, money: -2, stability: 1, popularity: 0 }, text: "我想去！" }, 
            { effect: { event: "none", strength: -1, money: 1, stability: -2, popularity: 0 }, text: "也许我们不该" }
        ] 
    },
    { 
        text: "好想去旅游啊！", 
        options: [
            { effect: { event: "none", strength: 0, money: -5, stability: 3, popularity: 1 }, text: "走吧走吧！" }, 
            { effect: { event: "none", strength: 0, money: 1, stability: -2, popularity: 0 }, text: "我不喜欢到处走" }
        ] 
    },
    { 
        text: "考试要来不及复习了，要不办一场学习会吧！", 
        options: [
            { effect: { event: "none", strength: -2, money: -1, stability: 1, popularity: -1 }, text: "我们一起加油～" }, 
            { effect: { event: "none", strength: 1, money: 1, stability: -3, popularity: 0 }, text: "自己学就好了" }
        ] 
    },
    { 
        text: "一起去听音乐会吧！", 
        options: [
            { effect: { event: "none", strength: 2, money: -2, stability: 1, popularity: 0 }, text: "真的吗，什么时候" }, 
            { effect: { event: "none", strength: -1, money: 1, stability: -2, popularity: -1 }, text: "我听不太懂" }
        ] 
    },
    { 
        text: "哇！是粉丝！一起合照吧！", 
        options: [
            { effect: { event: "none", strength: 1, money: 0, stability: 1, popularity: 3 }, text: "啾～💗" }, 
            { effect: { event: "none", strength: 0, money: -3, stability: -1, popularity: -2 }, text: "迟疑😕" }
        ] 
    },
    { 
        text: "我的琴有些旧了，可以换把新的吗？", 
        options: [
            { effect: { event: "none", strength: 3, money: -5, stability: 2, popularity: 0 }, text: "你该用更好的" }, 
            { effect: { event: "none", strength: -1, money: 0, stability: -1, popularity: -1 }, text: "省点钱吧" }
        ] 
    },
    { 
        text: "是时候录制一首单曲了！", 
        options: [
            { effect: { event: "none", strength: 3, money: -3, stability: 3, popularity: 3 }, text: "终于到这一天了吗" }, 
            { effect: { event: "none", strength: 0, money: 1, stability: 0, popularity: -2 }, text: "还早呢" }
        ] 
    },
    { 
        text: "要不在街边举办一场快闪！一定会很有趣", 
        options: [
            { effect: { event: "none", strength: 1, money: -1, stability: 1, popularity: 2 }, text: "想想就令人激动" }, 
            { effect: { event: "none", strength: 0, money: 1, stability: 0, popularity: 0 }, text: "不会扰民？" }
        ] 
    },
    { 
        text: "一起去吃个大餐吧！", 
        options: [
            { effect: { event: "none", strength: 2, money: -2, stability: 1, popularity: 0 }, text: "我的肚子已经饿扁了！" }, 
            { effect: { event: "none", strength: -1, money: 2, stability: -1, popularity: 0 }, text: "吃太多不利于演奏" }
        ] 
    },
    { 
        text: "我想设计属于我们的周边，要做吗？", 
        options: [
            { effect: { event: "none", strength: -2, money: 4, stability: -1, popularity: 2 }, text: "是周边！是谷子！" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: 0 }, text: "不如提升自己音乐" }
        ] 
    },
    { 
        text: "生日快乐！一起过生日吧！", 
        options: [
            { effect: { event: "none", strength: 0, money: -1, stability: 2, popularity: 0 }, text: "生日快乐！" }, 
            { effect: { event: "none", strength: -1, money: 2, stability: -2, popularity:  0}, text: "我还有事..." }
        ] 
    },
    { 
        text: "最近手腕好痛，可能腱鞘炎又复发了", 
        options: [
            { effect: { event: "none", strength: 3, money: -2, stability: 2, popularity: 0 }, text: "快去医院看看" }, 
            { effect: { event: "none", strength: -2, money: 1, stability: -1, popularity: 0 }, text: "自己上点药算了" }
        ] 
    },
    { 
        text: "贝斯手，我听不到你的声音…", 
        options: [
            { effect: { event: "none", strength: 1, money: 0, stability: -2, popularity: 0 }, text: "我的错，我会注意..." }, 
            { effect: { event: "none", strength: -1, money: 0, stability: -1, popularity: 0 }, text: "你叫唤什么呢？" }
        ] 
    },
    { 
        text: "鼓手，你的节奏乱了…", 
        options: [
            { effect: { event: "none", strength: 1, money: 0, stability: -1, popularity: 0 }, text: "骚瑞～" }, 
            { effect: { event: "none", strength: -1, money: 0, stability: -1, popularity: 0 }, text: "朝她扔鼓棒" }
        ] 
    },
    { 
        text: "学习好累，有的时候我觉得不想去学校了，全职搞音乐多好", 
        options: [
            { effect: { event: "none", strength: 2, money: -3, stability: -3, popularity: 3 }, text: "很有建设性的意见" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你想当中专乐队？" }
        ] 
    },
    { 
        text: "你说，我们要更注重乐队的影响力，还是专注于产出自己喜欢的歌曲？", 
        options: [
            { effect: { event: "none", strength: 0, money: 2, stability: 0, popularity: 2 }, text: "影响力" }, 
            { effect: { event: "none", strength: 2, money: 0, stability: 2, popularity: 0 }, text: "初心" }
        ] 
    },
    { 
        text: "最近的歌太难了，我想放松一下，泡个温泉", 
        options: [
            { effect: { event: "none", strength: 2, money: -2, stability: 2, popularity: 0 }, text: "我要泡牛奶的" }, 
            { effect: { event: "none", strength: -1, money: 2, stability: -1, popularity: 0 }, text: "我恐水" }
        ] 
    },
    { 
        text: "换个风格吧，我们尝试新的音乐！", 
        options: [
            { effect: { event: "none", strength: 1, money: 0, stability: 1, popularity: 2 }, text: "也许我们该试试电子舞曲" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: -1 }, text: "摇滚不容亵渎" }
        ] 
    },
    { 
        text: "要不要做个更有挑战性的作品？", 
        options: [
            { effect: { event: "none", strength: 2, money: 0, stability: -1, popularity: 1 }, text: "我喜欢挑战" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: -1 }, text: "你有这本事吗" }
        ] 
    },
    { 
        text: "有的乐队在模仿我们的风格！我们怎么办", 
        options: [
            { effect: { event: "none", strength: 1, money: 1, stability: -2, popularity: 1 }, text: "也许只能改变了" }, 
            { effect: { event: "none", strength: 0, money: -1, stability: 0, popularity: -1 }, text: "也许只能妥协了" }
        ] 
    },
    { 
        text: "喂，你们的配合不是很好啊！回去没有自己练吗？", 
        options: [
            { effect: { event: "none", strength: 1, money: 0, stability: -3, popularity: 0 }, text: "我们再练练" }, 
            { effect: { event: "none", strength: -1, money: 0, stability: 0, popularity: 0 }, text: "你自己也不怎么样" }
        ] 
    },

    //special cards
    { 
        text: "要排练一首新曲子吗？我们的曲子有点不够了…", 
        type: "special", 
        options: [
            { effect: { event: "none", strength: 2, money: 0, stability: 0, popularity: 0, increaseSongCount: 1 }, text: "终于要新曲子了！" },
            { effect: { event: "none", strength: 0, money: 0, stability: 1, popularity: 0 }, text: "没时间" }
        ] 
    },
    { 
        text: "城市志愿者活动，要参加吗？", 
        type: "special", 
        options: [
            { effect: { event: "none", strength: 0, money: 0, stability: 1, popularity: 1, volunteer: 1 }, text: "有我在！" }, 
            { effect: { event: "none", strength: 1, money: 0, stability: -1, popularity: -2 }, text: "我没空" }
        ] 
    },
];


// 学园祭卡牌集
export const festivalCards = [
    {
        text: "学校即将举行学园祭，是否参加？",
        options: [
            { effect: { event: "festival", if_last: 0, stage: 0, strength: 1, money: 1, stability: 1, popularity: 1 }, text: "我们参加！" },   // 选择参加学园祭
            { effect: { event: "festival", if_last: 1, stage: 0, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "时机未到" }  // 不参加学园祭
        ]
    },
    {
        text: "执行委员会来让我们填写申请表，我们要报名唱自己的歌吗？",
        options: [
            { effect: { event: "festival", if_last: 0, stage: 1, strength: 1, money: 1, stability: 1, popularity: 1 }, text: "终于到展示的时候了吗..." },  // 报名唱歌
            { effect: { event: "festival", if_last: 1, stage: 1, strength: -2, money: -2, stability: -2, popularity: -2 }, text: "想想就令人害怕" }  // 不报名
        ]
    },
    {
        text: "要开始表演了！大家加油！",
        options: [
            { effect: { event: "festival", songIndex: 0, if_last: 0, stage: 2 }, text: "加油！" },  // 开始表演
            { effect: { event: "festival", if_last: 1, stage: 2 }, text: "太紧张了，我不要" }  // 不表演
        ]
    },
    {
        text: "大家好！我们是一支还没有名字的乐队～",
        options: [
            { effect: { event: "festival", if_last: 0, stage: 3 }, text: "好耶" },
            { effect: { event: "festival", if_last: 0, stage: 3 }, text: "啊？" }
        ]
    },
    {
        text: "请听我们的演奏，我们会留下爪痕的！",
        options: [
            { effect: { event: "festival", if_last: 0, stage: 4 }, text: "好耶" },  // 演奏第一首歌
            { effect: { event: "festival", if_last: 0, stage: 4 }, text: "好像很可怕额" }  // 演奏第二首歌
        ]
    },
    {
        text: "演奏了《xxx》, 你觉得怎么样？",
        options: [
            { effect: { event: "festival", if_last: 1, stage: 5, festival: 1, strength: 2, money: 2, stability: 2, popularity: 2}, text: "这就是少女乐队！" },
            { effect: { event: "festival", if_last: 1, stage: 5, strength: -1, money: -1, stability: -1, popularity: -1}, text: "很糟糕" }
        ]
    }
];


export const liveCards = [
    {
        text: "学校旁边的LiveHouse，在招募呢！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 0, strength: 1, money: 1, stability: 1, popularity: 1 }, text: "我们参加！" },
            { effect: { event: "live", if_last: 1, stage: 0, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "时机未到" }
        ]
    },
    {
        text: "一起来排练吧！为了Live",
        options: [
            { effect: { event: "live", if_last: 0, stage: 1, strength: 1, money: 1, stability: 1, popularity: 1 }, text: "排练！" },
            { effect: { event: "live", if_last: 0, stage: 1, strength: -2, money: -2, stability: -2, popularity: -2 }, text: "太麻烦了" }
        ]
    },
    {
        text: "吉他Solo，要准备吗！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 2, strength: 2, money: 0, stability: 0, popularity: 0 }, text: "要准备才行" },
            { effect: { event: "live", if_last: 0, stage: 2, strength: 0, money: 1, stability: 1, popularity: 1 }, text: "太麻烦了" }
        ]
    },
    {
        text: "贝斯Solo，要准备吗！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 3, strength: 1, money: 0, stability: 0, popularity: 0 }, text: "要准备才行" },
            { effect: { event: "live", if_last: 0, stage: 3, strength: 0, money: 1, stability: 1, popularity: 1 }, text: "反正也没人在意..." }
        ]
    },
    {
        text: "鼓的Solo呢？",
        options: [
            { effect: { event: "live", if_last: 0, stage: 4, strength: 1, money: 0, stability: 0, popularity: 0 }, text: "叮叮叮咚咚咚" },
            { effect: { event: "live", if_last: 0, stage: 4, strength: 0, money: 1, stability: 1, popularity: 1 }, text: "们都苦塞纳..." }
        ]
    },
    {
        text: "Live House那边说我们要自己卖票",
        options: [
            { effect: { event: "live", if_last: 0, stage: 5, strength: -1, money: 0, stability: -1, popularity: 1 }, text: "少女乐队展开攻势！" },
            { effect: { event: "live", if_last: 0, stage: 5, strength: 0, money: -5, stability: 0, popularity: 0 }, text: "我们直接自己包了吧" }
        ]
    },
    {
        text: "能叫到人来吗，我们没有观众",
        options: [
            { effect: { event: "live", if_last: 0, stage: 6, strength: -1, money: -1, stability: -1, popularity: 1 }, text: "少女乐队展开攻势！" },
            { effect: { event: "live", if_last: 0, stage: 6, strength: 0, money: 0, stability: 0, popularity: -5 }, text: "音乐是孤高的" }
        ]
    },
    {
        text: "我的天！怎么来台风了",
        options: [
            { effect: { event: "live", if_last: 0, stage: 7, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "这是孤独摇滚吗..." },
            { effect: { event: "live", if_last: 0, stage: 7, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "这是孤独摇滚吗..." }
        ]
    },
    {
        text: "终于要上台了！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 8, strength: 1, money: 0, stability: 1, popularity: 0 }, text: "我好激动！" },
            { effect: { event: "live", if_last: 0, stage: 8, strength: 0, money: 1, stability: 0, popularity: 1 }, text: "我好紧张！" }
        ]
    },
    {
        text: "啊！鼓从刚刚开始就对不上拍！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 9, strength: 0, money: 0, stability: 0, popularity: -1 }, text: "怎么办！" },
            { effect: { event: "live", if_last: 0, stage: 9, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "这剧情是不是有点熟悉" }
        ]
    },
    {
        text: "啊！贝斯和鼓的配合也出现问题了！",
        options: [
            { effect: { event: "live", if_last: 0, stage: 10, strength: 0, money: 0, stability: -1, popularity: -1 }, text: "怎么办！" },
            { effect: { event: "live", if_last: 0, stage: 10, strength: 0, money: 0, stability: -1, popularity: -1 }, text: "这剧情是不是更熟悉了" }
        ]
    },
    {
        text: "啊！观众有的走了",
        options: [
            { effect: { event: "live", if_last: 0, stage: 11, strength: 0, money: 0, stability: 0, popularity: -1 }, text: "怎么办！" },
            { effect: { event: "live", if_last: 0, stage: 11, strength: 0, money: 0, stability: 0, popularity: -1 }, text: "..." }
        ]
    },
    {
        text: "也许我该...",
        options: [
            { effect: { event: "live", if_last: 0, stage: 12, strength: -100, money: 0, stability: 5, popularity: 5 }, text: "来段炸裂的Solo" },
            { effect: { event: "live", if_last: 0, stage: 12, strength: -5, money: -2, stability: -5, popularity: -20 }, text: "混过去吧..." }
        ]
    },
    {
        text: "Live 有惊无险的结束了",
        options: [
            { effect: { event: "live", if_last: 1, stage: 13, strength: +35, money: 2, stability: 2, popularity: 2, live: 1 }, text: "少女乐队大胜利！" },
            { effect: { event: "live", if_last: 1, stage: 13, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "下次不来了..." }
        ]
    }
];


