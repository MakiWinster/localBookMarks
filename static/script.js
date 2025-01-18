document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const searchTabs = document.querySelectorAll('.search-tab');
    const searchEngines = document.querySelector('.search-engines');
    const engineButtons = document.querySelectorAll('.engine-button');
    const folderFilters = document.querySelectorAll('.folder-filter');
    const bookmarkSections = document.querySelectorAll('.bookmarks-section');

    let currentSearchMode = 'bookmarks';
    let currentSearchEngine = 'bing';

    // 切换搜索模式
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSearchMode = tab.dataset.tab;
            
            // 切换搜索引擎显示
            if (currentSearchMode === 'web') {
                searchEngines.classList.add('visible');
                searchBox.placeholder = '输入关键词搜索...';
            } else {
                searchEngines.classList.remove('visible');
                searchBox.placeholder = '搜索书签...';
            }
        });
    });

    // 切换搜索引擎
    engineButtons.forEach(button => {
        button.addEventListener('click', () => {
            engineButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentSearchEngine = button.dataset.engine;
        });
    });

    // 处理搜索
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && currentSearchMode === 'web') {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                const searchUrl = currentSearchEngine === 'bing' 
                    ? `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`
                    : `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
                window.open(searchUrl, '_blank');
            }
        }
    });

    // 实时书签搜索
    searchBox.addEventListener('input', (e) => {
        if (currentSearchMode === 'bookmarks') {
            const searchTerm = e.target.value.toLowerCase();
            
            bookmarkSections.forEach(section => {
                const links = section.querySelectorAll('.bookmark-link');
                let hasVisibleLinks = false;

                links.forEach(link => {
                    const title = link.textContent.toLowerCase();
                    const isVisible = title.includes(searchTerm);
                    link.parentElement.style.display = isVisible ? 'block' : 'none';
                    if (isVisible) hasVisibleLinks = true;
                });

                section.style.display = hasVisibleLinks || searchTerm === '' ? 'block' : 'none';
            });
        }
    });

    // 文件夹筛选
    folderFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const folderName = filter.dataset.folder;
            
            // 更新筛选器状态
            folderFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            // 显示/隐藏对应的书签区域
            if (folderName === 'all') {
                bookmarkSections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                bookmarkSections.forEach(section => {
                    if (section.dataset.folder === folderName) {
                        section.style.display = 'block';
                        section.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        });
    });

    // 添加书签链接点击动画
    document.querySelectorAll('.bookmark-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            link.appendChild(ripple);
            
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => ripple.remove(), 1000);
        });
    });
}); 