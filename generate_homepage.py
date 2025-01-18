import json
from jinja2 import Environment, FileSystemLoader
import os
import re
from urllib.parse import urlparse

def get_favicon_url(url, icon_url):
    """获取更可靠的图标URL"""
    if not icon_url or icon_url.startswith('data:'):
        # 如果没有图标URL或是data URI，使用网站根域名的favicon
        parsed = urlparse(url)
        return f"https://www.google.com/s2/favicons?domain={parsed.netloc}&sz=32"
    
    # 如果是相对路径，转换为绝对路径
    if icon_url.startswith('/'):
        parsed = urlparse(url)
        return f"{parsed.scheme}://{parsed.netloc}{icon_url}"
    
    # 如果是clearbit的URL但无法加载，使用备选方案
    if 'clearbit.com' in icon_url:
        parsed = urlparse(url)
        return f"https://www.google.com/s2/favicons?domain={parsed.netloc}&sz=32"
    
    return icon_url

def process_bookmarks(bookmarks):
    for item in bookmarks:
        if item['type'] == 'link':
            item['icon'] = get_favicon_url(item['url'], item.get('icon', ''))
        elif item['type'] == 'folder' and 'children' in item:
            process_bookmarks(item['children'])
    return bookmarks

def load_bookmarks():
    with open('pintree.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        bookmarks = data[0]['children']
        return process_bookmarks(bookmarks)

def generate_html():
    env = Environment(loader=FileSystemLoader('templates'))
    template = env.get_template('index.html')
    bookmarks = load_bookmarks()
    html_content = template.render(bookmarks=bookmarks)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)

if __name__ == '__main__':
    generate_html()
    print("Homepage has been generated successfully!") 