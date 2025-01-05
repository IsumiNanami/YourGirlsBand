import { cards, festivalCards, liveCards, studioCards, studioAppendCards, UStudentAppendCards, graduateCards} from './cards.js';
let bandStatus = JSON.parse(localStorage.getItem('bandStatus'));
if (bandStatus) {
    console.log('Band Status:', bandStatus);
} else {
console.error('Band Status not found in localStorage');
}

// 游戏状态初始化
let month = 1;
let perform_song = "";
let special_event = "";
let usedCardsIn10Months = [];

// 主线剧情
let is_HStudent = 1;
let is_UStudent = 0;
let is_NStudent = 0;
let is_festival = 0;
let is_live = 0;
let is_idol = 0;
let is_studio = 0;
let is_mv = 0;
let is_debut = 0;

let festivalCount = 0;


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
    else if (string==="Studio") {
        // 如果是Live，月份显示为橙色
        monthDisplay.style.color = 'blue';  // 改变颜色为红色
        monthDisplay.textContent = `第${month}月:事务所！`;  // 添加后缀
    } 
    else if (string==="Graduagte") {
        // 如果是Live，月份显示为橙色
        monthDisplay.style.color = 'blue';  // 改变颜色为红色
        monthDisplay.textContent = `第${month}月:毕业！`;  // 添加后缀
    } 
    else {
        // 恢复正常显示
        monthDisplay.style.color = 'black';  // 恢复颜色
        monthDisplay.textContent = `第${month}月`;  // 恢复正常文本
    }
}

// 随机选择一张卡牌，并确保不重复
function getRandomCard() {
    let combinedCards = cards; // 默认普通卡组

    // 判断是否需要将 studioAppendCards 并入普通卡组
    if (is_studio === 1) {
        combinedCards = [...cards, ...studioAppendCards]; // 合并普通卡组和 studioAppendCards
    }

    // 判断是否需要将 studioAppendCards 并入普通卡组
    if (is_UStudent === 1) {
        combinedCards = [...combinedCards, ...UStudentAppendCards]; // 合并普通卡组和 ppendCards
    }

    const remainingCards = combinedCards.filter(card => !usedCardsIn10Months.includes(card));

    // 选取学园祭卡组
    if (month % 12 === 10 && bandStatus.songCount > 0 && is_idol === 0 && is_HStudent === 1) {
        changeMonthDisplay("Festival");  // 修改月份显示为学园祭
        const festivalCard = festivalCards[0];  // 学园祭的第一张卡牌
        return festivalCard;  // 返回学园祭的卡牌
    }
    else if (month % 50 === 0 && bandStatus.songCount > 0) {
        changeMonthDisplay("Live");  // 修改月份显示为Live
        const liveCard = liveCards[0];  // 学园祭的第一张卡牌
        return liveCard;  // 返回学园祭的卡牌
    }
    else if (month % 42 === 0 && bandStatus.songCount > 0 && is_idol === 0 && is_mv === 0 && is_debut ===0 && is_studio === 0 && is_live === 1) {
        changeMonthDisplay("Studio");  // 修改月份显示为学园祭
        const studioCard = studioCards[0];  // 学园祭的第一张卡牌
        return studioCard;  // 返回学园祭的卡牌
    }
    else if (month % 12 === 0 && is_HStudent === 1 && festivalCount>=3) {
        changeMonthDisplay("Graduate");  // 修改月份显示为学园祭
        const graduateCard = graduateCards[0];  // 学园祭的第一张卡牌
        return graduateCard;  // 返回学园祭的卡牌
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
    else if ((effects.if_last===0) && (effects.event==="studio")){
        special_event = "studio";
        let nextCard = studioCards[effects.stage+1];
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
            is_festival = 1;
            festivalCount++;
            console.log("festival count",festivalCount);
        }
        else if (effects.live) {
            console.log("live");
            addLogMessage("live", newSong); // 记录live顺利
            is_live = 1;
        }
        else if (effects.studio) {
            console.log("studio");
            addLogMessage("studio", newSong); // 记录studio顺利
            is_studio = 1;
        }
        else if (effects.university) {
            console.log("university");
            addLogMessage("university", newSong); // 记录studio顺利
            is_HStudent = 0;
            is_UStudent = 1;
            is_NStudent = 0;
        }
        else if (effects.nouniversity) {
            console.log("nouniversity");
            addLogMessage("nouniversity", newSong); // 记录studio顺利
            is_HStudent = 0;
            is_UStudent = 0;
            is_NStudent = 1;
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
        money: "我们穷的叮当响，根本付不起搞音乐的钱，甚至连维持正常生活都成了问题，乐队成员们都去打工了，没人记得要排练的事情。",
        stability: "我们大吵了一架，乐手们互相指责，最后爆发了一场巨大的冲突......乐队的成员从来就没有因为玩乐队而开心过。",
        popularity: "没人关注我们，网络上都是我们的黑粉，我们的音乐如何别人根本不会在乎了。",
        //fail endings
        strength_exceed: "乐队的成员每天都在练习，除了弹琴我们什么都不会，父母亲友认为我们很可悲，只能靠着彼此活下去了。",
        money_exceed: "我们富得流油，实现了财务自由，没人在乎乐队怎样了。反正只要有钱花就行，音乐理想已经被我抛在脑后。",
        stability_exceed: "我们从没有吵过架，每天的乐队生活都带着微笑假面，组一辈子乐队的誓言好像要实现了......",
        popularity_exceed: "太多人关注我们了，每天都有人跟拍，压力太大成员们开始靠尼古丁缓解精神压力。一次偷拍结束了我们的职业生涯。",

        //ending output
        gameEnd: "乐队解散！",

        // songs
        song: `我们创作了新的曲子《${songName}》`, // 新增记录学会新曲的日志

        //volunteer
        volunteer: `志愿的效果很好，我们被更多人认识了。谁不喜欢一支可可爱爱的少女乐队呢？`,
        festival: `在学园祭上我们演唱《${songName}》一炮而红，主唱甚至有了粉丝应援会！`,
        live: `Live上我们的表现被人们记住了，世界线稍微的变化了一下下...`,
        studio: `我们和武田事务所签约了！不知道是好事还是坏事...`,
        strength_live: "我的Solo非常糟糕，人们永远记住了我是一个失败的吉他手，队友都讨厌我，我不敢再见到她们了",

        university: "终于，你们是大学生了！乐队的故事还在继续...",
        nouniversity: "高中毕业后，你们不再去学校了。新的故事正在开启..."
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
        } else if (value > 90) {
            element.style.color = 'blue'; // 超过100用蓝色警告
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
        if (value >= 100) {
            console.log(statusElement.elementId, special_event);
            const exceedMessageKey = `${statusElement.name}_exceed`;
            addLogMessage(exceedMessageKey,""); // 记录超限日志
        }
    });

    // 检查是否有任何维度降到0
    if (statusElements.some(stat => stat.value <= 0)) {
        endGame();
    }
    // 检查是否有任何维度降到0
    else if (statusElements.some(stat => stat.value >= 100)) {
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
