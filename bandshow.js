// 从 localStorage 获取已选择的乐队成员
const bandMembers = JSON.parse(localStorage.getItem('selectedBandMembers'));
const bandMembersContainer = document.getElementById('bandMembers');

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

// 获取“开始游戏”按钮并添加跳转事件
document.getElementById('start-game-btn').onclick = function() {
  window.location.href = 'gamepage.html';  // 跳转到游戏页面
};
