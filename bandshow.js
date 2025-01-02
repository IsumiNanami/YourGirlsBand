// 从 localStorage 获取已选择的乐队成员
const bandMembers = JSON.parse(localStorage.getItem('selectedBandMembers'));
const bandMembersContainer = document.getElementById('bandMembers');
const remainingMoney = localStorage.getItem('remainingMoney');


const remainingMoneyValue = parseInt(remainingMoney);
console.log('Remaining Money: ', remainingMoneyValue);

if (bandMembers && bandMembers.length > 0) {
  bandMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('band-member');

    memberDiv.innerHTML = `
      <img src="${member.imgSrc}" alt="${member.name}">
      <h4>${member.name}</h4>
      <p>角色: ${member.role}</p>
      <p>成本: ${member.cost} 元</p>
    `;
    bandMembersContainer.appendChild(memberDiv);
  });
} else {
  bandMembersContainer.innerHTML = '<p>没有选择任何乐队成员。</p>';
}



// 计算 乐队指数
let totalInstrument = 0;
let totalSongmaking = 0;
let deltastability = 0;
let deltamoney = 0;
let deltapopularity = 0;

bandMembers.forEach(member => {
  totalInstrument += parseInt(member.statusInstrument);  // 计算所有成员的 status-instrument 总和
  totalSongmaking += parseInt(member.statusSongmaking);  // 计算所有成员的 status-songmaking 总和

  const characteristics = member.characteristics.split(','); // 以逗号分隔

  // 根据 characteristic 计算稳定性
  characteristics.forEach(character => {
    if (character === 'strict') {
      deltastability -= 1; // 减去 1
    } else if (character === 'kaisan') {
      deltastability -= 2; // 减去 2
    } else if (character === 'yasashi') {
      deltastability += 1; // 加上 2
    } else if (character === 'kawaii') {
      deltastability += 1; // 加上 1
    }
  });

  // 根据 characteristic 计算稳定性
  characteristics.forEach(character => {
    if (character === 'rich') {
      deltamoney += 2; // 减去 1
      console.log('486');
    } else if (character === 'poor') {
      deltamoney -= 2; // 减去 1
    }
  });

  // 根据 characteristic 计算稳定性
  characteristics.forEach(character => {
    if (character === 'ojuosama') {
      deltapopularity += 2; // 减去 1
    }
  });
  console.log(parseInt(member.statusInstrument));
});

const strength = Math.round(totalInstrument * 0.35 + totalSongmaking * 0.15);  // strength 的计算公式y
console.log(totalInstrument, totalSongmaking);
const money = 11 + remainingMoneyValue + deltamoney;
const stability = 11 + deltastability;
const popularity = 10 + deltapopularity;

// 输出计算结果
console.log(`Strength: ${strength}`);
console.log(`Money: ${money}`);
console.log(`Stability: ${stability}`);
console.log(`Popularity: ${popularity}`);

let bandStatus = {
  strength: strength,
  money: money,
  stability: stability,
  popularity: popularity,
  songCount: 0,  // 新增单曲计数
  songs: [],      // 新增曲库
};

function handleBonds() {
  // 统计每个特征的数量
  let characteristicCounts = {
    drinker: 0,
    shekong: 0,
    yasashi: 0,
    adult: 0,
    gbc: 0,
    gdyg: 0,
    mygo: 0,
    kon: 0
  };

  bandMembers.forEach(member => {
    const characteristics = member.characteristics.split(',');

    characteristics.forEach(char => {
      if (characteristicCounts[char] !== undefined) {
        characteristicCounts[char]++;
      }
    });
  });

  let bondText = [];
  let stabilityChange = 0;
  let moneyChange = 0;
  let strengthChange = 0;
  let popularityChange = 0;

  if (characteristicCounts.drinker >= 2) {
    bondText.push("双酒鬼羁绊：你们的队伍酒仙为伴，豪饮是你们的日常。");
    strengthChange += 1;
    stabilityChange += 2;
    moneyChange -= 2;
  }
  if (characteristicCounts.shekong >= 2) {
    bondText.push("社恐之交：你们的队伍有点沉默呢，但一般不说话的都是高手。");
    stabilityChange -= 1;
    strengthChange += 1;
  }
  if (characteristicCounts.yasashi >= 2) {
    bondText.push("温柔之乡：你们的队伍有好多妈妈桑！");
    stabilityChange += 2;
  }
  if (characteristicCounts.adult >= 3) {
    bondText.push("不登校：你们的队伍学历有点低啊...");
    strengthChange += 1;
    stabilityChange -= 1;
    moneyChange -= 1;
  }
  if (characteristicCounts.ojuosama >= 3) {
    bondText.push("高贵的乐队！让人无法接近～");
    strengthChange -= 1;
    moneyChange += 1;
    stabilityChange -= 1;
    popularityChange += 1;
  }
  if (characteristicCounts.gbc >= 4) {
    bondText.push("原班人马：GBC原班人马，我们才是真爱！");
  }
  if (characteristicCounts.gdyg >= 4) {
    bondText.push("原班人马：孤独摇滚原班人马，我们是传奇！");
  }
  if (characteristicCounts.mygo >= 4) {
    bondText.push("原班人马：MYGO原班人马，我们就要演奏那首歌！");
  }
  if (characteristicCounts.kon >= 4) {
    bondText.push("原班人马：K-ON原班人马，永远的轻音部！");
  }

  bandStatus.stability += stabilityChange;
  bandStatus.money += moneyChange;
  bandStatus.strength += strengthChange;
  bandStatus.popularity += popularityChange;
  
  const bondDisplay = document.querySelector('.bond-display');
  bondText.forEach(text => {
    const textElement = document.createElement('p');
    textElement.textContent = text;
    bondDisplay.appendChild(textElement);
  });
}

handleBonds();

// 创建雷达图的数据
const radarData = {
  labels: ['实力', '金钱', '稳定', '关注'],
  datasets: [{
    label: '乐队属性',
    data: [bandStatus.strength, bandStatus.money, bandStatus.stability, bandStatus.popularity],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

// 配置雷达图
const config = {
  type: 'radar',
  data: radarData,
  options: {
    scales: {
      r: {
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5
        }
      }
    }
  }
};

// 创建雷达图
const radarChart = new Chart(document.getElementById('radarChart'), config);


// 获取“开始游戏”按钮并添加跳转事件
document.getElementById('start-game-btn').onclick = function() {
  localStorage.setItem('bandStatus', JSON.stringify(bandStatus));
  console.log(bandStatus);
  window.location.href = 'gamePage.html';  // 跳转到游戏页面
};
