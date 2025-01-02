const cards = [
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
const festivalCards = [
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


const liveCards = [
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
            { effect: { event: "live", if_last: 0, stage: 12, strength: 0, money: 0, stability: 5, popularity: 5 }, text: "来段炸裂的Solo" },
            { effect: { event: "live", if_last: 0, stage: 12, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "混过去吧..." }
        ]
    },
    {
        text: "Live 有惊无险的结束了",
        options: [
            { effect: { event: "live", if_last: 1, stage: 13, strength: 2, money: 2, stability: 2, popularity: 2, live: 1 }, text: "少女乐队大胜利！" },
            { effect: { event: "live", if_last: 1, stage: 13, strength: -1, money: -1, stability: -1, popularity: -1 }, text: "下次不来了..." }
        ]
    }
];


// 游戏状态初始化
let month = 1;
let usedCardsIn10Months = [];
let bandStatus = {
    strength: 10,
    money: 10,
    stability: 10,
    popularity: 10,
    songCount: 0,  // 新增单曲计数
    songs: []      // 新增曲库
};

// 存储已记录的日志，以避免重复记录
let loggedStats = new Set();

// SONG**********************************SONG****************************************
// 单曲库
const songLibrary = [
    "轻飘飘的时间", "Don't say lazy", "熙熙攘攘, 我们的城市", "空之箱",
    "若能化为星座", "吉他与孤独与蓝色星球", "影色舞", "迷星叫", "碧天伴走"
];

// 随机生成单曲
function generateSong() {
    let newSong;

    // 确保新生成的单曲不在已经存在的 songs 数组中
    do {
        const randomIndex = Math.floor(Math.random() * songLibrary.length);
        newSong = songLibrary[randomIndex];
    } while (bandStatus.songs.includes(newSong)); 
    return newSong;
}
// SONG**********************************SONG****************************************

// 修改月份显示的颜色和文本
function changeMonthDisplay(string) {
    const monthDisplay = document.getElementById("month-display");
    if (string==="Festival") {
        // 如果是学园祭，月份显示为红色
        monthDisplay.style.color = 'red';  // 改变颜色为红色
        monthDisplay.textContent = `第${month}月:学园祭！`;  // 添加后缀
    } 
    else if (string==="Live") {
        // 如果是Live，月份显示为橙色
        monthDisplay.style.color = 'orange';  // 改变颜色为红色
        monthDisplay.textContent = `第${month}月:Live！`;  // 添加后缀
    } 
    else {
        // 恢复正常显示
        monthDisplay.style.color = 'black';  // 恢复颜色
        monthDisplay.textContent = `第${month}月`;  // 恢复正常文本
    }
}

// 随机选择一张卡牌，并确保不重复
function getRandomCard() {
    const remainingCards = cards.filter(card => !usedCardsIn10Months.includes(card));

    // 选取学园祭卡组
    if (month % 12 === 10 && bandStatus.songCount > 0) {
        changeMonthDisplay("Festival");  // 修改月份显示为学园祭
        const festivalCard = festivalCards[0];  // 学园祭的第一张卡牌
        return festivalCard;  // 返回学园祭的卡牌
    }
    else if (month % 50 === 0 && bandStatus.songCount > 0) {
        changeMonthDisplay("Live");  // 修改月份显示为学园祭
        const liveCard = liveCards[0];  // 学园祭的第一张卡牌
        return liveCard;  // 返回学园祭的卡牌
    }
    else {
        // 正常卡组
        changeMonthDisplay(0); 
        if (remainingCards.length === 0) {
            endGame();
            return;
        }

        const randomIndex = Math.floor(Math.random() * remainingCards.length);
        const card = remainingCards[randomIndex];
        usedCardsIn10Months.push(card);

        if (usedCardsIn10Months.length > 10) {
            usedCardsIn10Months.shift();
        }

        return card;
    }
}

// 显示卡牌内容
function displayCard(card) {

    //展示学园祭卡组
    if (festivalCards.includes(card)){
        if (card.options[0].effect.stage===5){
            const randomIndex = Math.floor(Math.random() * bandStatus.songs.length);
            const song = bandStatus.songs[randomIndex]; // 获取乐队的第一首歌（你可以选择使用其他逻辑获取歌曲）
            console.log(song)
            // 替换卡牌中的 xxx 为歌曲名
            card.text = card.text.replace("《xxx》", `《${song}》`);
        }
    }
    
    const cardDisplay = document.getElementById("card-display");
    cardDisplay.textContent = card.text;

    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");

    yesButton.textContent = card.options[0].text; // 更新“Yes”按钮文本
    noButton.textContent = card.options[1].text;  // 更新“No”按钮文本

    yesButton.onclick = () => handleChoice(card.options[0]);
    noButton.onclick = () => handleChoice(card.options[1]);
}



// 处理玩家选择
function handleChoice(option) {
    const effects = option.effect;

    // if choosen festival card, handle festivally,next card is the card in month do not ++, until this is the last festival card;
    if ((effects.if_last===0) && (effects.event==="festival")){
        let nextCard = festivalCards[effects.stage+1];
        displayCard(nextCard);
    }
    else if ((effects.if_last===0) && (effects.event==="live")){
        let nextCard = liveCards[effects.stage+1];
        displayCard(nextCard);
    }
    // if choosen is festical last card, hanlde festivally, and get out of festival cards;
    else{
    // 如果选择的是特殊卡牌
        if (effects.increaseSongCount) {
            console.log("new song");
            bandStatus.songCount += effects.increaseSongCount;
            const newSong = generateSong();
            console.log(newSong);
            addLogMessage("song", newSong); // 记录学到的新曲
            bandStatus.songs.push(newSong);  // 将新单曲添加到乐队的曲库
        }
        else if (effects.volunteer) {
            console.log("volunteer");
            addLogMessage("volunteer", newSong=''); // 记录学到的新曲
        }
        else if (effects.festival) {
            console.log("festival");
            addLogMessage("festival", newSong=''); // 记录festival顺利
        }
        else if (effects.live) {
            console.log("live");
            addLogMessage("live", newSong=''); // 记录festival顺利
        }
        month++;
        const nextCard = getRandomCard();
        if (nextCard) {
            displayCard(nextCard);
        }
    }
    // 更新其他维度的值
    for (let stat in effects) {
        if (stat !== "increaseSongCount") {  // 避免更新 songCount
            bandStatus[stat] += effects[stat];
        }
    }
    updateStatus(); // 这里会触发检查是否有数值降到0
}

// 记录日志
function addLogMessage(statName, songName = "") {
    const logMessages = {

        //fail endings
        strength: "乐队的成员疏于练习，渐渐忘记了演奏的技巧，连最初的曲子都无法弹奏了，最后大家都不来排练了。",
        money: "你们穷的叮当响，根本付不起搞音乐的钱，甚至连维持正常生活都成了问题，乐队成员们都去打工了，没人记得要排练的事情。",
        stability: "你们大吵了一架，乐手们互相指责，最后爆发了一场巨大的冲突......乐队的成员从来就没有因为玩乐队而开心过。",
        popularity: "没人关注你们，网络上都是你们的黑粉，你们的音乐再好别人也不会在乎了。",

        //ending output
        gameEnd: "游戏结束！",

        // songs
        song: `你们创作了新的曲子《${songName}》`, // 新增记录学会新曲的日志

        //volunteer
        volunteer: `志愿的效果很好，你们被更多人认识了。谁不喜欢一支可可爱爱的少女乐队呢？`,
        festival: `在学园祭上你们一炮而红，主唱甚至有了粉丝应援会！`,
        live: `Live上你们的表现被人们记住了，世界线稍微的变化了一下下...`
    };

    // 获取日志列表区域
    const logList = document.getElementById("log-list");

    // 创建新的日志条目
    const logItem = document.createElement("li");
    logItem.classList.add('log-entry');
    logItem.textContent = logMessages[statName];

    // 添加日志条目到日志列表
    logList.appendChild(logItem);

    // 滚动到最新日志
    logList.scrollTop = logList.scrollHeight;  // 滚动到日志区域的底部
}



// 更新页面状态
function updateStatus() {
    //document.getElementById("month-display").textContent = `第${month}月`;

    const statusElements = [
        { elementId: "strength", value: bandStatus.strength, name: "strength" },
        { elementId: "money", value: bandStatus.money, name: "money" },
        { elementId: "stability", value: bandStatus.stability, name: "stability" },
        { elementId: "popularity", value: bandStatus.popularity, name: "popularity" }
    ];

    // 判断是否有任何维度降到0
    statusElements.forEach(statusElement => {
        const element = document.getElementById(statusElement.elementId);
        const value = statusElement.value;

        // 根据数值设置颜色
        if (value >= 3 && value <= 5) {
            element.style.color = 'orange'; // 黄色警告
        } else if (value <= 2) {
            element.style.color = 'red'; // 红色警告
        } else {
            element.style.color = 'green'; // 正常情况下为绿色
        }

        // 更新状态值
        element.textContent = value;

        // 检查是否有维度降到0并记录日志
        if (value <= 0) {
            addLogMessage(statusElement.name);  // 记录日志
            loggedStats.add(statusElement.name); // 确保每个属性只有第一次降到0时记录一次日志
        }
    });

    // 检查是否有任何维度降到0
    if (statusElements.some(stat => stat.value <= 0)) {
        endGame();
    }
}

// 初始化游戏
function startGame() {
    const firstCard = getRandomCard();
    displayCard(firstCard);
    updateStatus();
}

// 游戏结束
function endGame() {
    // 记录游戏结束的日志信息
    addLogMessage('gameEnd'); // 添加游戏结束的日志信息

    // 隐藏卡牌选择和其他游戏元素
    const cardDisplay = document.getElementById("card-display");
    const buttons = document.querySelectorAll(".buttons button");
    cardDisplay.style.display = "none";  // 隐藏卡牌显示
    buttons.forEach(button => button.disabled = true); // 禁用选择按钮

    // 获取日志区域
    const logMessages = document.querySelector(".log-messages");

    // 创建重新开始按钮
    const restartButton = document.createElement("button");
    restartButton.textContent = "重新开始";
    restartButton.classList.add("restart-button"); // 添加自定义样式
    logMessages.appendChild(restartButton);  // 将按钮添加到日志区

    // 给“重新开始”按钮添加点击事件
    restartButton.addEventListener("click", () => {
        window.location.href = "index.html";  // 跳转到 index.html，重新开始游戏
    });
}

// 页面加载后开始游戏
window.onload = startGame;
