const loginForm = document.getElementById('loginForm');
const captchaContainer = document.getElementById('captchaContainer');
const checkbox = document.getElementById('checkbox');
const container = document.querySelector('.captcha-container');

// 登录表单提交事件
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止表单默认提交行为

    // 显示人机测试框
    captchaContainer.style.display = 'flex';
});

// 确保元素存在
if (checkbox && container) {
    // 点击事件：切换选中状态
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checked');
    });

    // 鼠标悬停事件：移动打勾框
    checkbox.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const checkboxRect = checkbox.getBoundingClientRect();

        // 定义移动范围（以主框为中心，向外扩展 50px）
        const range = 50;
        const minX = containerRect.left - range;
        const maxX = containerRect.right - checkboxRect.width + range;
        const minY = containerRect.top - range;
        const maxY = containerRect.bottom - checkboxRect.height + range;

        // 生成随机位置
        const newX = Math.max(0, Math.min(window.innerWidth - checkboxRect.width, Math.floor(Math.random() * (maxX - minX)) + minX));
        const newY = Math.max(0, Math.min(window.innerHeight - checkboxRect.height, Math.floor(Math.random() * (maxY - minY)) + minY));

        // 移动打勾框
        checkbox.style.left = `${newX - containerRect.left}px`;
        checkbox.style.top = `${newY - containerRect.top}px`;
    });
} else {
    console.error('Checkbox or container not found!');
}