// 获取元素
const moneyElement = document.querySelector('.money strong');
const cardElements = document.querySelectorAll('.card');
const slotElements = document.querySelectorAll('.slot');
const collectButton = document.querySelector('.collect-button');
const bandContainer = document.querySelector('.band-container');
const submitButton = document.querySelector('.submit-button'); // 新增提交按钮

// 乐队角色的映射
const roles = ['Guitar', 'Keyboard', 'Bass', 'Vocal', 'Drum'];

// 词曲能力的映射
const lyricistAbility = 'lyricist';
const composerAbility = 'composer';

// 初始金钱
let remainingMoney = 15;
let selectedMembers = []

// 初始状态：展开
bandContainer.classList.add('expanded');

// 点击按钮切换收起/展开状态
collectButton.addEventListener('click', () => {
  if (bandContainer.classList.contains('expanded')) {
    // 收起
    bandContainer.classList.remove('expanded');
    bandContainer.classList.add('collapsed');
    collectButton.textContent = '展开'; // 更新按钮文字
  } else {
    // 展开
    bandContainer.classList.remove('collapsed');
    bandContainer.classList.add('expanded');
    collectButton.textContent = '收起'; // 更新按钮文字
  }
});

function updateMoney() {
  moneyElement.textContent = remainingMoney;
}

// 为克隆的图片添加点击事件的函数
function addRemoveEventToImage(img, cost, card) {
  img.addEventListener('click', () => {
    const parentSlot = img.parentElement; // 获取图片的父元素（即卡槽）
    parentSlot.removeChild(img); // 从卡槽中移除该图片
    remainingMoney += cost; // 恢复相应的金钱
    updateMoney(); // 更新显示的剩余金钱

    // 恢复卡片的可选状态
    card.setAttribute('data-selected', 'false');
    // 从已选择成员中移除
    selectedMembers = selectedMembers.filter(member => member.name !== card.getAttribute('data-name'));
  });
}

// 为每个卡片添加点击事件
cardElements.forEach(card => {
  card.addEventListener('click', () => {
    const cardCost = parseInt(card.getAttribute('data-cost'));

    // 检查卡片是否已经被选中
    if (card.getAttribute('data-selected') === 'true') {
      alert('该乐手已经被选中！');
      return;
    }

    // 检查金钱是否足够
    if (remainingMoney >= cardCost) {
      const emptySlot = Array.from(slotElements).find(slot => !slot.hasChildNodes());
      if (emptySlot) {
        const cardImage = card.querySelector('img').cloneNode(true); // 克隆图片
        emptySlot.appendChild(cardImage); // 将图片添加到空槽

        remainingMoney -= cardCost; // 扣除金钱
        updateMoney(); // 更新剩余金钱

        // 设置卡片为已选中
        card.setAttribute('data-selected', 'true');
        card.setAttribute('data-name', card.querySelector('.name').textContent); // 存储乐手名称

        // 将成员添加到已选成员数组
        selectedMembers.push({
          name: card.querySelector('.name').textContent,
          role: card.getAttribute('data-roles'),
          cost: cardCost,
          imgSrc: card.querySelector('img').src,
          lyricist: card.getAttribute('data-lyricist') === 'true', // 保存作词能力
          composer: card.getAttribute('data-composer') === 'true'  // 保存编曲能力
        });

        addRemoveEventToImage(cardImage, cardCost, card); // 为新添加的图片添加点击事件
      }
    } else {
      alert('金钱不足，无法选择此乐手！');
    }
  });
});

// 获取 tooltip 元素（显示角色信息的文本框）
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

// 为每个卡片添加鼠标悬停事件
cardElements.forEach(card => {
  card.addEventListener('mouseover', (event) => {
    const roles = card.getAttribute('data-roles'); // 获取角色
    const lyricist = card.getAttribute('data-lyricist') === 'true'; // 作词能力
    const composer = card.getAttribute('data-composer') === 'true'; // 编曲能力

    // 创建角色和能力的描述
    let roleDescription = `${roles}`;
    let abilitiesDescription = '';

    if (lyricist) {
      abilitiesDescription += '作词';
    } else {
      abilitiesDescription += '';
    }

    if (composer) {
      abilitiesDescription += '编曲';
    } else {
      abilitiesDescription += '';
    }

    // 设置 tooltip 内容
    tooltip.textContent = `${roleDescription}\n${abilitiesDescription}`;

    // 计算 tooltip 的位置并显示
    const cardRect = card.getBoundingClientRect();
    tooltip.style.top = `${cardRect.top + window.scrollY + (cardRect.height / 2) - (tooltip.offsetHeight / 2)}px`;  // 垂直居中
    tooltip.style.left = `${cardRect.left + window.scrollX + (cardRect.width / 2) - (tooltip.offsetWidth / 2)}px`; // 水平居中

    // 显示 tooltip
    tooltip.style.display = 'block';
  });

  // 鼠标移开时隐藏 tooltip
  card.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
});

// 提交按钮点击事件：跳转到新的页面，传递已选择的乐队成员
submitButton.addEventListener('click', () => {
  if (selectedMembers.length === 5) {
    // 检查是否有主唱、吉他手、鼓手和贝斯手
    const hasVocal = selectedMembers.some(member => member.role.includes('Vocal'));
    const hasGuitar = selectedMembers.some(member => member.role.includes('Guitar'));
    const hasDrum = selectedMembers.some(member => member.role.includes('Drum'));
    const hasBass = selectedMembers.some(member => member.role.includes('Bass'));

    // 检查是否有作词和作曲能力
    console.log(selectedMembers);
    const hasLyricist = selectedMembers.some(member => member.lyricist === true);
    const hasComposer = selectedMembers.some(member => member.composer === true);

    // 检查条件
    if (!hasVocal || !hasGuitar || !hasDrum || !hasBass) {
      alert('请确保选择了一位主唱、一位吉他手、一位鼓手、一位贝斯手!');
      return;
    }
    console.log('Has Lyricist:', hasLyricist);
    console.log('Has Composer:', hasComposer);
    if (!hasLyricist || !hasComposer) {
      alert('请确保选择的乐队成员中有作词和作曲能力!');
      return;
    }

    // 将已选择的成员存储到 localStorage 或 URL
    localStorage.setItem('selectedBandMembers', JSON.stringify(selectedMembers));

    // 跳转到新的页面
    window.location.href = 'bandPage.html';  // 新页面
  } else {
    alert('请确保选择了五个乐队成员!');
  }
});

// 更新金钱
updateMoney();

