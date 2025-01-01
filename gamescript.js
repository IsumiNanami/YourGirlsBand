const cards = [
    { text: "要一起进行特训吗？", options: [{ effect: { strength: 1, money: -1, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -1, popularity: -1 }, text: "否" }] },
    { text: "我们一起去唱K吧？", options: [{ effect: { strength: 1, money: -2, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -2, popularity: 0 }, text: "否" }] },
    { text: "好想去旅游啊！", options: [{ effect: { strength: 0, money: -5, stability: 3, popularity: 1 }, text: "是" }, { effect: { strength: 0, money: 1, stability: -2, popularity: 0 }, text: "否" }] },
    { text: "考试要来不及复习了，要不办一场学习会吧！", options: [{ effect: { strength: -2, money: -1, stability: 1, popularity: -1 }, text: "是" }, { effect: { strength: 1, money: 1, stability: -3, popularity: 0 }, text: "否" }] },
    { text: "一起去听音乐会吧！", options: [{ effect: { strength: 2, money: -2, stability: 1, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 1, stability: -2, popularity: -1 }, text: "否" }] },
    { text: "哇！是粉丝！一起合照吧！", options: [{ effect: { strength: 1, money: 0, stability: 1, popularity: 3 }, text: "是" }, { effect: { strength: 0, money: -3, stability: -1, popularity: -2 }, text: "否" }] },
    { text: "我的琴有些旧了，可以换把新的吗？", options: [{ effect: { strength: 3, money: -5, stability: 2, popularity: 0 }, text: "是" }, { effect: { strength: -1, money: 0, stability: -1, popularity: -1 }, text: "否" }] },
    { text: "是时候录制一首单曲了！", options: [{ effect: { strength: 3, money: -3, stability: 3, popularity: 3 }, text: "是" }, { effect: { strength: 0, money: 1, stability: 0, popularity: -2 }, text: "否" }] },
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
    { text: "要排练一首新曲子吗？我们的曲子有点不够了…", type: "special", options: [
        { effect: { strength: 2, money: 0, stability: 0, popularity: 0, increaseSongCount: 1 }, text: "是" },
        { effect: { strength: 0, money: 0, stability: 1, popularity: 0 }, text: "否" }
    ] },
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

// 单曲库
const songLibrary = [
    "轻飘飘的时间", "Don't be lazy", "熙熙攘攘", "我们的城市", "空之箱",
    "若能化为星座", "吉他与孤独与蓝色星球", "影色舞", "迷星叫", "碧天伴走"
];

// 随机生成单曲
function generateSong() {
    const randomIndex = Math.floor(Math.random() * songLibrary.length);
    return songLibrary[randomIndex];
}

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

// 记录日志
function addLogMessage(statName, songName = "") {
    const logMessages = {
        strength: "乐队的成员疏于练习，渐渐忘记了演奏的技巧，连最初的曲子都无法弹奏了，最后大家都不来排练了。",
        money: "你们穷的叮当响，根本付不起搞音乐的钱，甚至连维持正常生活都成了问题，乐队成员们都去打工了，没人记得要排练的事情。",
        stability: "你们大吵了一架，乐手们互相指责，最后爆发了一场巨大的冲突......乐队的成员从来就没有因为玩乐队而开心过。",
        popularity: "没人关注你们，网络上都是你们的黑粉，你们的音乐再好别人也不会在乎了。",
        gameEnd: "游戏结束！",
        song: `你们创作了新的曲子《${songName}》` // 新增记录学会新曲的日志
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

// 处理玩家选择
function handleChoice(option) {
    const effects = option.effect;

    // 如果选择的是特殊卡牌
    if (effects.increaseSongCount) {
        console.log("new song");
        bandStatus.songCount += effects.increaseSongCount;
        const newSong = generateSong();
        console.log(newSong);
        addLogMessage("song", newSong); // 记录学到的新曲
        bandStatus.songs.push(newSong);  // 将新单曲添加到乐队的曲库
    }

    // 更新其他维度的值
    for (let stat in effects) {
        if (stat !== "increaseSongCount") {  // 避免更新 songCount
            bandStatus[stat] += effects[stat];
        }
    }
    month++;

    const nextCard = getRandomCard();
    if (nextCard) {
        displayCard(nextCard);
    }
    updateStatus(); // 这里会触发检查是否有数值降到0
}

// 初始化游戏
function startGame() {
    const firstCard = getRandomCard();
    displayCard(firstCard);
    updateStatus();
}

// 页面加载后开始游戏
window.onload = startGame;
