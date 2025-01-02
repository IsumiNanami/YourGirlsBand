import { cards, festivalCards, liveCards } from './cards.js';

// 游戏状态初始化
let month = 1;
let perform_song = "";
let special_event = ""
let usedCardsIn10Months = [];
let bandStatus = {
    strength: 10,
    money: 10,
    stability: 10,
    popularity: 10,
    songCount: 0,  // 新增单曲计数
    songs: [],      // 新增曲库
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

        let randomIndex = Math.floor(Math.random() * remainingCards.length);
        let card = remainingCards[randomIndex];
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
            let randomIndex = Math.floor(Math.random() * bandStatus.songs.length);
            let song = bandStatus.songs[randomIndex]; // 获取乐队的第一首歌（你可以选择使用其他逻辑获取歌曲）
            console.log("演唱了", song);
            perform_song = song;
            // 替换卡牌中的 xxx 为歌曲名
            card.text = card.text.replace("《xxx》", `《${song}》`);

            const cardDisplay = document.getElementById("card-display");
            cardDisplay.textContent = card.text;

            const yesButton = document.getElementById("yes-btn");
            const noButton = document.getElementById("no-btn");

            yesButton.textContent = card.options[0].text; // 更新“Yes”按钮文本
            noButton.textContent = card.options[1].text;  // 更新“No”按钮文本

            card.text = card.text.replace(`《${song}》`, "《xxx》");

            yesButton.onclick = () => handleChoice(card.options[0]);
            noButton.onclick = () => handleChoice(card.options[1]);
        }
        else {
            const cardDisplay = document.getElementById("card-display");
            cardDisplay.textContent = card.text;

            const yesButton = document.getElementById("yes-btn");
            const noButton = document.getElementById("no-btn");

            yesButton.textContent = card.options[0].text; // 更新“Yes”按钮文本
            noButton.textContent = card.options[1].text;  // 更新“No”按钮文本

            yesButton.onclick = () => handleChoice(card.options[0]);
            noButton.onclick = () => handleChoice(card.options[1]);
        }  
    }
    else {
        const cardDisplay = document.getElementById("card-display");
        cardDisplay.textContent = card.text;

        const yesButton = document.getElementById("yes-btn");
        const noButton = document.getElementById("no-btn");

        yesButton.textContent = card.options[0].text; // 更新“Yes”按钮文本
        noButton.textContent = card.options[1].text;  // 更新“No”按钮文本

        yesButton.onclick = () => handleChoice(card.options[0]);
        noButton.onclick = () => handleChoice(card.options[1]);
    }
    
    
}



// 处理玩家选择
function handleChoice(option) {
    
    const effects = option.effect;

    let newSong = "";
    // if choosen festival card, handle festivally,next card is the card in month do not ++, until this is the last festival card;
    if ((effects.if_last===0) && (effects.event==="festival")){
        let nextCard = festivalCards[effects.stage+1];
        displayCard(nextCard);
    }
    else if ((effects.if_last===0) && (effects.event==="live")){
        
        special_event = "live";
        let nextCard = liveCards[effects.stage+1];
        displayCard(nextCard);
    }
    // if choosen is festical last card, hanlde festivally, and get out of festival cards;
    else{
    // 如果选择的是特殊卡牌
        if (effects.increaseSongCount) {
            console.log("new song");
            bandStatus.songCount += effects.increaseSongCount;
            newSong = generateSong();
            console.log("学会了", newSong);
            addLogMessage("song", newSong); // 记录学到的新曲
            bandStatus.songs.push(newSong);  // 将新单曲添加到乐队的曲库
        }
        else if (effects.volunteer) {
            console.log("volunteer");
            addLogMessage("volunteer", newSong); // 记录学到的新曲
        }
        else if (effects.festival) {
            console.log("festival");
            addLogMessage("festival", perform_song); // 记录festival顺利
        }
        else if (effects.live) {
            console.log("live");
            addLogMessage("live", newSong); // 记录festival顺利
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
    console.log(special_event);
    updateStatus(); // 这里会触发检查是否有数值降到0
}

// 记录日志
function addLogMessage(statName, songName = "") {
    const logMessages = {

        //fail endings
        strength: "乐队的成员疏于练习，渐渐忘记了演奏的技巧，连最初的曲子都无法弹奏了，最后大家都不来排练了。",
        money: "你们穷的叮当响，根本付不起搞音乐的钱，甚至连维持正常生活都成了问题，乐队成员们都去打工了，没人记得要排练的事情。",
        stability: "你们大吵了一架，乐手们互相指责，最后爆发了一场巨大的冲突......乐队的成员从来就没有因为玩乐队而开心过。",
        popularity: "没人关注你们，网络上都是你们的黑粉，你们的音乐如何别人根本不会在乎了。",

        //ending output
        gameEnd: "游戏结束！",

        // songs
        song: `你们创作了新的曲子《${songName}》`, // 新增记录学会新曲的日志

        //volunteer
        volunteer: `志愿的效果很好，你们被更多人认识了。谁不喜欢一支可可爱爱的少女乐队呢？`,
        festival: `在学园祭上你们演唱《${songName}》一炮而红，主唱甚至有了粉丝应援会！`,
        live: `Live上你们的表现被人们记住了，世界线稍微的变化了一下下...`,
        strength_live: "你的Solo非常糟糕，人们永远记住了你是一个失败的吉他手，队友都讨厌你，你不敢再见到他们了"
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
            console.log(statusElement.elementId, special_event);
            // 如果是strength归0，并且是在live中，就addLogMessage(strength_live)
            if ((statusElement.elementId === "strength") && (special_event === "live")){
                console.log("test");
                addLogMessage("strength_live");
            }
            else {
                addLogMessage(statusElement.name);  // 记录日志
            loggedStats.add(statusElement.name); // 确保每个属性只有第一次降到0时记录一次日志

            }
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
