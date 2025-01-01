const cards = [
    { text: "要一起进行特训吗？", options: [{ effect: { strength: 1, money: -1, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -1, popularity: -1 }, text: "否" }] },
    { text: "我们一起去唱K吧？", options: [{ effect: { strength: 1, money: -2, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -2, popularity: 0 }, text: "否" }] },
    { text: "好想去旅游啊！", options: [{ effect: { strength: 0, money: -5, stability: 3, popularity: 1 }, text: "是" }, { effect: { strength: 0, money: 1, stability: -2, popularity: 0 }, text: "否" }] },
    { text: "考试要来不及复习了，要不办一场学习会吧！", options: [{ effect: { strength: -2, money: -1, stability: 1, popularity: -1 }, text: "是" }, { effect: { strength: 1, money: 1, stability: -3, popularity: 0 }, text: "否" }] },
    { text: "一起去听音乐会吧！", options: [{ effect: { strength: 2, money: -2, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -2, popularity: -1 }, text: "否" }] },
    { text: "哇！是粉丝！一起合照吧！", options: [{ effect: { strength: 1, money: 0, stability: 1, popularity: 3 }, text: "是" }, { effect: { strength: 0, money: -3, stability: -1, popularity: -2 }, text: "否" }] },
    { text: "我的琴有些旧了，可以换把新的吗？", options: [{ effect: { strength: 3, money: -5, stability: 2, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 0, stability: -1, popularity: -1 }, text: "否" }] },
    { text: "是时候录制一首单曲了！", options: [{ effect: { strength: 3, money: -3, stability: 3, popularity: 3 }, text: "是" }, { effect: { strength: 0, money: 1, stability: 0, popularity: -2 }, text: "否" }] },
    { text: "要排练一首新曲子吗？我们的曲子有点不够了…", options: [{ effect: { strength: 2, money: 0, stability: 0, popularity: 0 }, text: "是" }, { effect: { strength: 0, money: 0, stability: 1, popularity: 0 }, text: "否" }] },
    { text: "城市志愿者活动，要参加吗？", options: [{ effect: { strength: 0, money: 0, stability: 1, popularity: 1 }, text: "是" }, { effect: { strength: 1, money: 0, stability: -1, popularity: -2 }, text: "否" }] },
    { text: "要不在街边举办一场快闪！一定会很有趣", options: [{ effect: { strength: 1, money: -1, stability: 1, popularity: 2 }, text: "是" }, { effect: { strength: 0, money: 1, stability: 0, popularity: 0 }, text: "否" }] },
    { text: "一起去吃个大餐吧！", options: [{ effect: { strength: 2, money: -2, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 2, stability: -1, popularity: 0 }, text: "否" }] },
    { text: "我想设计属于我们的周边，要做吗？", options: [{ effect: { strength: -2, money: 4, stability: -1, popularity: 2 }, text: "是" }, { effect: { strength: 0, money: 0, stability: 0, popularity: 0 }, text: "否" }] },
    { text: "生日快乐！一起过生日吧！", options: [{ effect: { strength: 0, money: -1, stability: 2, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 2, stability: -2, popularity:  0}, text: "否" }] },
    { text: "最近手腕好痛，可能腱鞘炎又复发了", options: [{ effect: { strength: 3, money: -2, stability: 2, popularity: 0 }, text: "是" }, { effect: { strength: -2, money: 1, stability: -1, popularity: 0 }, text: "否" }] },
    { text: "贝斯手，我听不到你的声音…", options: [{ effect: { strength: 1, money: 0, stability: -1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 0, stability: 1, popularity: 0 }, text: "否" }] },
    { text: "鼓手，你的节奏乱了…", options: [{ effect: { strength: 1, money: 0, stability: -1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 0, stability: -1, popularity: 0 }, text: "否" }] },
    { text: "学习好累，有的时候我觉得不想去学校了，全职搞音乐多好", options: [{ effect: { strength: 2, money: -3, stability: -3, popularity: 3 }, text: "是" }, { effect: { strength: 0, money: 0, stability: 0, popularity: 0 }, text: "否" }] },
    { text: "你说，我们要更注重乐队的影响力，还是专注于产出自己喜欢的歌曲？", options: [{ effect: { strength: 0, money: 2, stability: 0, popularity: 2 }, text: "影响力" }, { effect: { strength: 2, money: 0, stability: 2, popularity: 0 }, text: "喜欢的歌曲" }] },
    { text: "最近的歌太难了，我想放松一下，泡个温泉", options: [{ effect: { strength: 2, money: -2, stability: 2, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 2, stability: -1, popularity: 0 }, text: "否" }] },
    { text: "换个风格吧，我们尝试新的音乐！", options: [{ effect: { strength: 1, money: 0, stability: 1, popularity: 2 }, text: "是" }, { effect: { strength: 0, money: 0, stability: 0, popularity: -1 }, text: "否" }] },
    { text: "要不要做个更有挑战性的作品？", options: [{ effect: { strength: 2, money: 0, stability: -1, popularity: 1 }, text: "是" }, { effect: { strength: 0, money: 0, stability: 0, popularity: -1 }, text: "否" }] },
    { text: "有的乐队在模仿我们的风格！我们怎么办", options: [{ effect: { strength: 1, money: 1, stability: -2, popularity: 1 }, text: "改变" }, { effect: { strength: 0, money: -1, stability: 0, popularity: -1 }, text: "保持" }] },
    { text: "喂，你们的配合不是很好啊！回去没有自己练吗？", options: [{ effect: { strength: 1, money: 0, stability: -3, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 0, stability: 0, popularity: 0 }, text: "否" }] },
];



// 游戏状态初始化
let month = 1;
let usedCardsIn10Months = [];
let bandStatus = {
    strength: 10,
    money: 10,
    stability: 10,
    popularity: 10
};

// 存储已记录的日志，以避免重复记录
let loggedStats = new Set();

// 随机选择一张卡牌，并确保不重复
function getRandomCard() {
    const remainingCards = cards.filter(card => !usedCardsIn10Months.includes(card));
    
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

// 显示卡牌内容
function displayCard(card) {
    const cardDisplay = document.getElementById("card-display");
    cardDisplay.textContent = card.text;

    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");

    yesButton.onclick = () => handleChoice(card.options[0]);
    noButton.onclick = () => handleChoice(card.options[1]);
}

// 更新页面状态
function updateStatus() {
    document.getElementById("month-display").textContent = `第${month}月`;

    const statusElements = [
        { elementId: "strength", value: bandStatus.strength, name: "strength" },
        { elementId: "money", value: bandStatus.money, name: "money" },
        { elementId: "stability", value: bandStatus.stability, name: "stability" },
        { elementId: "popularity", value: bandStatus.popularity, name: "popularity" }
    ];

    let allZero = true; // 用于判断是否所有维度都降为0

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
        if (value <= 0 && !loggedStats.has(statusElement.name)) {
            addLogMessage(statusElement.name);
            loggedStats.add(statusElement.name); // 确保每个属性只有第一次降到0时记录一次日志
        }

        // 检查是否所有维度都降到0
        if (value > 0) {
            allZero = false;
        }
    });

    if (allZero) {
        endGame();
    }
}

// 记录日志
function addLogMessage(statName) {
    const logMessages = {
        strength: "乐队的成员疏于练习，渐渐忘记了演奏的技巧，连最初的曲子都无法弹奏了，最后大家都不来排练了。",
        money: "你们穷的叮当响，根本付不起搞音乐的钱，甚至连维持正常生活都成了问题，乐队成员们都去打工了，没人记得要排练的事情。",
        stability: "你们大吵了一架，乐手们互相指责，最后爆发了一场巨大的冲突......乐队的成员从来就没有因为玩乐队而开心过。",
        popularity: "没人关注你们，网络上都是你们的黑粉，你们的音乐再好别人也不会在乎了。"
    };

    const logList = document.getElementById("log-list");
    const logItem = document.createElement("li");
    logItem.textContent = logMessages[statName];
    logList.appendChild(logItem);
}

// 处理玩家选择
function handleChoice(option) {
    const effects = option.effect;
    for (let stat in effects) {
        bandStatus[stat] += effects[stat];
    }
    month++;

    const nextCard = getRandomCard();
    if (nextCard) {
        displayCard(nextCard);
    }
    updateStatus(); // 这里会触发检查是否有数值降到0
}

// 游戏结束
function endGame() {
    alert("游戏结束！乐队的四个维度都降到0了。");
    // 你可以在这里做一些额外的清理工作，例如重置游戏状态等
}

// 初始化游戏
function startGame() {
    const firstCard = getRandomCard();
    displayCard(firstCard);
    updateStatus();
}

// 页面加载后开始游戏
window.onload = startGame;


