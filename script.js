// 1. 暗黑模式切换功能
const themeToggleBtn = document.getElementById('theme-toggle');
// 尝试从本地存储读取用户之前的选择，如果没有则默认是light模式
const currentTheme = localStorage.getItem('theme') || 'light';

// 页面加载时，根据本地存储的值来设置主题
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '明亮模式';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '暗黑模式';
}

// 给按钮添加点击事件
themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '明亮模式';
        localStorage.setItem('theme', 'dark'); // 保存用户选择
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = '暗黑模式';
        localStorage.setItem('theme', 'light'); // 保存用户选择
    }
});

// 2. 汉堡菜单功能 (移动端导航)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 点击导航链接后，关闭移动菜单
document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 3. 表单验证功能
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    let isValid = true;
    const inputs = this.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red'; // 简单地将空输入框标红
        } else {
            input.style.borderColor = ''; // 重置边框颜色
        }
    });

    if (isValid) {
        alert('消息发送成功！（这只是前端演示，实际需要后端处理）');
        this.reset(); // 清空表单
    } else {
        alert('请填写所有必填字段！');
    }
});