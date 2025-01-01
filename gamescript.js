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
let month = 1; // 从第1月开始
let usedCards = [];
let status = {
    strength: 10,
    money: 10,
    stability: 10,
    popularity: 10
};

// 随机选择一张卡牌，并确保不重复
function getRandomCard() {
    const remainingCards = cards.filter(card => !usedCards.includes(card));
    if (remainingCards.length === 0) {
        endGame();
        return;
    }
    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    const card = remainingCards[randomIndex];
    usedCards.push(card);
    return card;
}

// 更新页面状态
function updateStatus() {
    document.getElementById("month-display").textContent = `第${month}月`;
    document.getElementById("strength").textContent = status.strength;
    document.getElementById("money").textContent = status.money;
    document.getElementById("stability").textContent = status.stability;
    document.getElementById("popularity").textContent = status.popularity;
}

// 处理玩家选择
function handleChoice(option) {
    const effects = option.effect;
    for (let stat in effects) {
        status[stat] += effects[stat];
    }
    month++;
    const nextCard = getRandomCard();
    if (nextCard) {
        displayCard(nextCard);
    }
    updateStatus();
}

// 显示卡牌内容
function displayCard(card) {
    const cardDisplay = document.getElementById("card-display");
    cardDisplay.textContent = card.text;

    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");

    // 确保按钮事件绑定
    yesButton.onclick = () => handleChoice(card.options[0]);
    noButton.onclick = () => handleChoice(card.options[1]);
}

// 游戏结束
function endGame() {
    alert("游戏结束！乐队的四个维度都降到0了。");
    // 显示结果页面，可以添加更多结束逻辑
}

// 初始化游戏
function startGame() {
    const firstCard = getRandomCard();
    displayCard(firstCard);
    updateStatus();
}

// 页面加载后开始游戏
window.onload = startGame;
