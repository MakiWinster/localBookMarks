# Local Bookmarks 把书签转换为静态网页
一个简洁优雅的本地书签管理工具，把书签转换为浏览器主页。
![image](https://github.com/user-attachments/assets/1d514214-2e35-448f-b942-c09205843e2c)


## 使用方法

1. 安装浏览器扩展:
- Edge浏览器: [Pintree Bookmarks Exporter](https://microsoftedge.microsoft.com/addons/detail/pintree-bookmarks-exporte/binmofchlenaimbnocogbpebiodjlgkm)
- Chrome浏览器: [Pintree Bookmarks Exporter](https://chromewebstore.google.com/detail/pintree-bookmarks-exporte/mjcglnkikjidokobpfdcdmcnfdicojce)

2. 使用扩展导出书签:
- 安装扩展后点击扩展图标
- 导出书签为 pintree.json 文件

3. 克隆仓库到本地：
```bash
git clone https://github.com/MakiWinster/homepage.git
cd homepage
```

4. 替换文件:
- 将导出的 pintree.json 复制到项目根目录,替换原有的 pintree.json 文件

5. 安装依赖：
```bash
pip install -r requirements.txt
```

6. 生成静态页面：
```bash
python generate_homepage.py
```

7. 在浏览器中打开生成的 index.html 文件,并可以设置为浏览器主页  
![image](https://github.com/user-attachments/assets/0aa481e9-daf3-4dc6-941f-55a8f5290544)

8. (可选)设置为新标签页:
- Edge浏览器: 安装 [New Tab Changer](https://microsoftedge.microsoft.com/addons/detail/new-tab-changer/dlbnebcbaeajdpekcdhmcgdhoodcjpeg)
- Chrome浏览器: 安装 [New Tab Changer](https://chromewebstore.google.com/detail/new-tab-changer/occbjkhimchkolibngmcefpjlbknggfh)
- 安装扩展后,在扩展设置中将新标签页地址设置为生成的 index.html 文件路径


## 书签配置

书签数据存储在 `pintree.json` 文件中，可以按照以下格式添加或修改书签：

```json
{
  "type": "folder",
  "title": "文件夹名称",
  "children": [
    {
      "type": "link",
      "title": "书签标题",
      "icon": "图标URL",
      "url": "书签URL"
    }
  ]
}
```
- pintree.json中已经添加了示例书签

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 许可证

MIT License 
