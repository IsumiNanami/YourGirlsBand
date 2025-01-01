// 游戏状态初始化
let month = 1;
let usedCardsIn10Months = [];
let bandStatus = {
    strength: 10,
    money: 10,
    stability: 10,
    popularity: 10
};

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

// 更新页面状态
function updateStatus() {
    document.getElementById("month-display").textContent = `第${month}月`;

    const statusElements = [
        { elementId: "strength", value: bandStatus.strength },
        { elementId: "money", value: bandStatus.money },
        { elementId: "stability", value: bandStatus.stability },
        { elementId: "popularity", value: bandStatus.popularity }
    ];

    statusElements.forEach(statusElement => {
        const element = document.getElementById(statusElement.elementId);
        const value = statusElement.value;

        // 根据数值设置颜色
        if (value >= 3 && value <= 5) {
            element.style.color = 'orange'; // 黄色警告
        } else if (value >= 1 && value <= 2) {
            element.style.color = 'red'; // 红色警告
        } else {
            element.style.color = 'green'; // 正常情况下为绿色
        }

        // 更新状态值
        element.textContent = value;
    });
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
    updateStatus();
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

// 游戏结束
function endGame() {
    alert("游戏结束！乐队的四个维度都降到0了。");
}

// 初始化游戏
function startGame() {
    const firstCard = getRandomCard();
    displayCard(firstCard);
    updateStatus();
}

// 页面加载后开始游戏
window.onload = startGame;
