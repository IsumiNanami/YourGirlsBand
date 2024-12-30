// script.js
const moneyElement = document.querySelector('.money strong');
const cardElements = document.querySelectorAll('.card');
const slotElements = document.querySelectorAll('.slot');
// 获取“收起”按钮和乐队部分的 footer
const collectButton = document.querySelector('.collect-button');
const bandContainer = document.querySelector('.band-container');




let remainingMoney = 15;

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

        addRemoveEventToImage(cardImage, cardCost, card); // 为新添加的图片添加点击事件
      }
    } else {
      alert('金钱不足，无法选择此乐手！');
    }
  });
});


// 点击“收起”按钮时隐藏乐队部分
collectButton.addEventListener('click', () => {
  // 切换隐藏类
  bandContainer.classList.toggle('hidden');
  // 更新按钮文字
  if (bandContainer.classList.contains('hidden')) {
    collectButton.textContent = '展开';
  } else {
    collectButton.textContent = '收起';
  }
});
