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
            { effect: { event: "none", strength: 0, money: 2, stability: -2, popularity: 0 }, text: "我不喜欢到处走" }
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
        text: "是时候自费录制一首单曲了！", 
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

export const HStudentAppendCards = [
    { 
        text: "考试要来不及复习了，要不办一场学习会吧！", 
        options: [
            { effect: { event: "none", strength: -2, money: -1, stability: 1, popularity: -1 }, text: "我们一起加油～" }, 
            { effect: { event: "none", strength: 1, money: 1, stability: -3, popularity: 0 }, text: "自己学就好了" }
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
        text: "学习好累，有的时候我觉得不想去学校了，全职搞音乐多好", 
        options: [
            { effect: { event: "none", strength: 2, money: -3, stability: -3, popularity: 3 }, text: "很有建设性的意见" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你想当中专乐队？" }
        ] 
    }
];

export const studioAppendCards = [
    // 新增的卡片
    { 
        text: "签约事务所了，我今晚想吃烤肉！", 
        options: [
            { effect: { event: "none", strength: 1, money: -4, stability: 2, popularity: 0 }, text: "烤肉！今晚一定要吃！" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: -2, popularity: 0 }, text: "要注意饮食管理" }
        ] 
    },
    { 
        text: "也是时候把贝斯全换了！", 
        options: [
            { effect: { event: "none", strength: 3, money: -6, stability: 2, popularity: 2 }, text: "升级装备！" }, 
            { effect: { event: "none", strength: -1, money: 0, stability: -2, popularity: 0 }, text: "不行" }
        ] 
    },
    { 
        text: "也是时候买更多效果器了！", 
        options: [
            { effect: { event: "none", strength: 2, money: -6, stability: 2, popularity: 0 }, text: "升级装备，提升实力！" }, 
            { effect: { event: "none", strength: -1, money: 1, stability: -2, popularity: 0 }, text: "算了，还是先节省吧" }
        ] 
    },
    { 
        text: "我...我老是忍不住自搜", 
        options: [
            { effect: { event: "none", strength: -2, money: 0, stability: -6, popularity: 4 }, text: "搜吧搜吧！我们是名人了！" }, 
            { effect: { event: "none", strength: 2, money: 0, stability: -2, popularity: -4 }, text: "克制自己的认可欲怪兽" }
        ] 
    },
    { 
        text: "我们要以成为职业为目标吗？", 
        options: [
            { effect: { event: "none", strength: 0, money: 0, stability: -3, popularity: -5 }, text: "不觉得有点沉重吗？" }, 
            { effect: { event: "none", strength: 0, money: -4, stability: 1, popularity: 2}, text: "要的！只有这一条路" }
        ] 
    },
    { 
        text: "事务所发工资了！", 
        options: [
            { effect: { event: "none", strength: 0, money: 5, stability: 0, popularity: 0 }, text: "太好了！" }, 
            { effect: { event: "none", strength: 0, money: 5, stability: 0, popularity: 0 }, text: "太好了！" }
        ] 
    },
    { 
        text: "事务所通知我们要进行Live演出了！", 
        options: [
            { effect: { event: "none", strength: 2, money: 2, stability: -6, popularity: 2 }, text: "认真准备！" }, 
            { effect: { event: "none", strength: -1, money: -4, stability: 0, popularity: -10}, text: "随便演奏下好了" }
        ] 
    },
    { 
        text: "事务所联络我们，让我们注意身材管理！", 
        options: [
            { effect: { event: "none", strength: 0, money: -4, stability: -2, popularity: 2 }, text: "说的没错" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 1, popularity: -4 }, text: "乐队和身材有什么关系？" }
        ] 
    },
    { 
        text: "那些唱跳的偶像，看着也很不错呢...", 
        options: [
            { effect: { event: "none", strength: -3, money: 0, stability: 1, popularity: 1 }, text: "给人带来温暖和希望！" }, 
            { effect: { event: "none", strength: 0, money: 0, stability: 0, popularity: -3}, text: "跟摇滚没半毛钱关系" }
        ] 
    },
];

export const UStudentAppendCards = [
    {
        text: "早八上课了，我好困……",
        options: [
            { effect: { event: "none", strength: -2, money: 0, stability: 0, popularity: 0 }, text: "坚持上课，学习第一！" },
            { effect: { event: "none", strength: 2, money: 0, stability: -2, popularity: 0 }, text: "翘课去练乐队吧！" }
        ]
    },
    {
        text: "大学里乐队还蛮多的，不过我们是最强的那一个！",
        options: [
            { effect: { event: "none", strength: 0, money: 0, stability: 1, popularity: 1 }, text: "自信爆棚！" },
            { effect: { event: "none", strength: 0, money: 0, stability: -1, popularity: -1 }, text: "低调点。" }
        ]
    },
    {
        text: "学园祭再也参加不了了，还是有点怀念。",
        options: [
            { effect: { event: "none", strength: 0, money: 0, stability: 2, popularity: 0 }, text: "好想再参加一次学园祭" },
            { effect: { event: "none", strength: 1, money: 2, stability: 1, popularity: 1 }, text: "未来的舞台会更大" }
        ]
    },
    {
        text: "期末周复习！乐队活动我想请个假～",
        options: [
            { effect: { event: "none", strength: -4, money: 0, stability: -2, popularity: -1 }, text: "学业优先，暂停排练" },
            { effect: { event: "none", strength: 2, money: 1, stability: -2, popularity: 1 }, text: "先练乐队吧，考试随缘" }
        ]
    },
    {
        text: "寒假一起去北海道滑雪吧！",
        options: [
            { effect: { event: "none", strength: 0, money: -6, stability: 2, popularity: 1 }, text: "滑雪放松！" },
            { effect: { event: "none", strength: 2, money: 4, stability: 0, popularity: 0 }, text: "省钱练习，寒假也不休息" }
        ]
    },
    {
        text: "作为大学生，我们应该创造更成熟的音乐。",
        options: [
            { effect: { event: "none", strength: 2, money: -2, stability: 0, popularity: 0 }, text: "写点深度的东西吧！" },
            { effect: { event: "none", strength: -4, money: 1, stability: 0, popularity: 3 }, text: "不，简单的才是流行！" }
        ]
    },
    {
        text: "抱歉，帮我签个到吧！这节课不去了",
        options: [
            { effect: { event: "none", strength: 0, money: 1, stability: -1, popularity: 1 }, text: "好呀～" },
            { effect: { event: "none", strength: 0, money: 0, stability: 1, popularity: -1 }, text: "凭什么" }
        ]
    },
    {
        text: "饭堂好难吃，我们去聚个餐吧。",
        options: [
            { effect: { event: "none", strength: 0, money: -4, stability: 2, popularity: 0 }, text: "好啊，改善伙食！" },
            { effect: { event: "none", strength: 1, money: 2, stability: 0, popularity: 0 }, text: "省钱继续吃饭堂吧。" }
        ]
    },
    {
        text: "为什么我们没有恋爱话题呢？",
        options: [
            { effect: { event: "none", strength: 2, money: 2, stability: 0, popularity: 0 }, text: "音乐就是我的恋爱话题" },
            { effect: { event: "none", strength: 0, money: 0, stability: 2, popularity: 2 }, text: "这就是Girls Band!" }
        ]
    },
    {
        text: "大学里的前辈说想让我们帮忙给晚会贡献个节目，有劳务的",
        options: [
            { effect: { event: "none", strength: 0, money: 4, stability: 0, popularity: 1 }, text: "好啊！我来！" },
            { effect: { event: "none", strength: 2, money: 0, stability: 0, popularity: 0 }, text: "这种不值得我们出手" }
        ]
    },
    {
        text: "在宿舍里练琴怕吵到室友",
        options: [
            { effect: { event: "none", strength: -3, money: 0, stability: 1, popularity: 1 }, text: "小声点就好啦" },
            { effect: { event: "none", strength: 2, money: 0, stability: -2, popularity: -2 }, text: "给他们听是他们的荣幸" }
        ]
    }
];

export const NStudentAppendCards = [
    {
        text: "打工的日子好累啊，练习的时间又少了。",
        options: [
            { effect: { event: "none", strength: -1, money: 2, stability: -1, popularity: 0 }, text: "攒钱买琴" },
            { effect: { event: "none", strength: 1, money: -2, stability: 0, popularity: 1 }, text: "还是练习重要" }
        ]
    },
    {
        text: "我们可以尝试街头演出赚点生活费！",
        options: [
            { effect: { event: "none", strength: 1, money: 3, stability: -3, popularity: 2 }, text: "好主意！" },
            { effect: { event: "none", strength: -1, money: 0, stability: 1, popularity: 0 }, text: "还是算了吧" }
        ]
    },
    {
        text: "酒吧里有人邀请我们去驻唱，但要求曲风很商业化。",
        options: [
            { effect: { event: "none", strength: -3, money: 5, stability: 0, popularity: 1 }, text: "为生活低头吧" },
            { effect: { event: "none", strength: 0, money: -2, stability: 1, popularity: -1 }, text: "我们不改曲风！" }
        ]
    },
    {
        text: "乐队的设备又坏了……",
        options: [
            { effect: { event: "none", strength: -2, money: 0, stability: -2, popularity: 0 }, text: "用旧设备将就着用" },
            { effect: { event: "none", strength: 1, money: -5, stability: 1, popularity: 0 }, text: "省吃俭用先修好吧" }
        ]
    },
    {
        text: "总有亲戚说玩乐队没前途，应该找份正式工作...",
        options: [
            { effect: { event: "none", strength: -5, money: 2, stability: -3, popularity: -1 }, text: "也许可以找份兼职" },
            { effect: { event: "none", strength: 2, money: 0, stability: 1, popularity: 1 }, text: "不鸟他们" }
        ]
    },
    {
        text: "乐队成员因为练习时间不统一而闹矛盾",
        options: [
            { effect: { event: "none", strength: -4, money: 0, stability: -5, popularity: 0 }, text: "我不要你觉得，我要我觉得" },
            { effect: { event: "none", strength: -2, money: 0, stability: -1, popularity: -1 }, text: "冷静" }
        ]
    },
    {
        text: "家里人对我说，如果退出乐队就帮我安排一份好工作",
        options: [
            { effect: { event: "none", strength: -4, money: 3, stability: -3, popularity: -1 }, text: "好像有点吸引力" },
            { effect: { event: "none", strength: 2, money: -6, stability: 2, popularity: 2 }, text: "这就想让我动摇？" }
        ]
    },
    {
        text: "一个朋友想借我们乐队的设备去演出",
        options: [
            { effect: { event: "none", strength: -3, money: 1, stability: 1, popularity: 1 }, text: "借给他们吧" },
            { effect: { event: "none", strength: 0, money: 2, stability: -3, popularity: -2 }, text: "不想冒风险" }
        ]
    },
    {
        text: "每次看别人上大学的生活总会感到羡慕……",
        options: [
            { effect: { event: "none", strength: -3, money: 0, stability: -3, popularity: 2 }, text: "也许我错过了什么" },
            { effect: { event: "none", strength: 0, money: 0, stability: 2, popularity: 0 }, text: "乐队才是我的大学" }
        ]
    }
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
            { effect: { event: "live", if_last: 0, stage: 12, strength: -30, money: 0, stability: 5, popularity: 5 }, text: "来段炸裂的Solo" },
            { effect: { event: "live", if_last: 0, stage: 12, strength: -15, money: -2, stability: -5, popularity: -20 }, text: "混过去吧..." }
        ]
    }, 
    {
        text: "Live 有惊无险的结束了",
        options: [
            { effect: { event: "live", if_last: 1, stage: 13, strength: +40, money: 2, stability: 2, popularity: 2, live: 1 }, text: "少女乐队大胜利！" },
            { effect: { event: "live", if_last: 1, stage: 13, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "下次不来了..." }
        ]
    }
];

export const studioCards = [
    {
        text: "上次的Live，你们很不错呢！",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 0, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你是？" },
            { effect: { event: "studio", if_last: 0, stage: 0, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你是？" }
        ]
    },
    {
        text: "我是武田事务所的青山",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 1, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "太好了是事务所我们有救了！" },
            { effect: { event: "studio", if_last: 0, stage: 1, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你想做什么？" }
        ]
    },
    {
        text: "上次你们的表演给我留下了很深刻的印象！",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 2, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "嘿嘿...多谢夸奖" },
            { effect: { event: "studio", if_last: 0, stage: 2, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "也许你只是在客套" }
        ]
    },
    {
        text: "总之，我想问问你们要不要和我们事务所签约",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 3, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "容我想想" },
            { effect: { event: "studio", if_last: 0, stage: 3, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "容我想想" }
        ]
    },
    {
        text: "我们会给你们发工资",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 4, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "是钱！我要用来买效果器！" },
            { effect: { event: "studio", if_last: 0, stage: 4, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "然后呢？" }
        ]
    },
    {
        text: "但是你们需要按照合同要求进行活动",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 5, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "也许这不重要" },
            { effect: { event: "studio", if_last: 0, stage: 5, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "你限制了我们的自由" }
        ]
    },
    {
        text: "要求不会太苛刻，会尊重你们的意愿",
        options: [
            { effect: { event: "studio", if_last: 0, stage: 6, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "少女乐队该进化了！" },
            { effect: { event: "studio", if_last: 0, stage: 6, strength: 0, money: 0, stability: 0, popularity: 0 }, text: "以后就不一定了..." }
        ]
    },
    {
        text: "那么现在到了选择的时间～",
        options: [
            { effect: { event: "studio", if_last: 1, stage: 7, strength: 0, money: 10, stability: 0, popularity: 0, studio: 1 }, text: "我选择签约！" },
            { effect: { event: "studio", if_last: 1, stage: 7, strength: 0, money: -10, stability: 0, popularity: 0 }, text: "我选择不签约！" }
        ]
    }
];
    
export const graduateCards = [
    {
        text: "时光荏苒，在参加了三次学园祭后，我们毕业了。我们的前途未卜...",
        options: [
            { effect: { event: "graduate", strength: 0, money: 0, stability: 0, popularity: 0, university: 1 }, text: "选择升学！" },
            { effect: { event: "graduate", strength: 0, money: 0, stability: 0, popularity: 0, nouniversity: 1 }, text: "选择不升学！" }
        ]
    }
]


