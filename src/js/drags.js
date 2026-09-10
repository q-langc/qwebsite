const HOLD_TIME = 500;
const MOVE_THRESHOLD = 5;

const githubBall = document.querySelector('#github_btn')

// 测试区：
console.log('got element', githubBall);

// === 新增这4行变量声明 ===
let isDrag = false;
let offsetX, offsetY;
let hasMoved = false;
let holdTimer = null;

// =====把你的两个函数移动到这里（事件绑定的前面）=====
function onMouseMove(e) {
  console.log('onMouseMove执行 | isDrag=', isDrag);
  if (!isDrag) return;
  console.log('进入拖拽计算');
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  // const topBound = bodyRect.top >= 0 ? bodyRect.top : 0;

  // const bodyRect = document.body.getBoundingClientRect();

  // const topBound = Math.max(bodyRect.top, 0);


  const topBound = 50;
  const maxX = window.innerWidth - githubBall.offsetWidth;
  const maxY = window.innerHeight - githubBall.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(topBound, Math.min(y, maxY));

  githubBall.style.left = x + 'px';
  githubBall.style.top = y + 'px';
}
function onMouseUp() {
  clearTimeout(holdTimer);
  isDrag = false;
  githubBall.style.removeProperty('cursor');
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

githubBall.addEventListener('mousedown', (e) => {
  e.preventDefault();
  hasMoved = false;
  isDrag = false;
  const rect = githubBall.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

holdTimer = setTimeout(() => {
  isDrag = true;
  githubBall.style.cursor = "grabbing";
}, HOLD_TIME);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// 新增：读取CSS布局出来的原始位置，同步到style属性
// const initRect = githubBall.getBoundingClientRect();
// githubBall.style.left = initRect.left + 'px';
// githubBall.style.top = initRect.top + 'px';

const githubButton = document.getElementById("github_btn");

githubButton.addEventListener("click", function() {
    window.open('https://github.com/Arthurc1Moude/LAStudio', '_blank');
});





