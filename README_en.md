# Local Bookmarks to Static Homepage
A clean and elegant local bookmark management tool that converts bookmarks into a browser homepage.

## Usage

1. Install Browser Extension:
- For Edge: [Pintree Bookmarks Exporter](https://microsoftedge.microsoft.com/addons/detail/pintree-bookmarks-exporte/binmofchlenaimbnocogbpebiodjlgkm)
- For Chrome: [Pintree Bookmarks Exporter](https://chromewebstore.google.com/detail/pintree-bookmarks-exporte/mjcglnkikjidokobpfdcdmcnfdicojce)

2. Export Bookmarks:
- Click the extension icon after installation
- Export bookmarks as pintree.json file

3. Clone Repository:
```bash
git clone https://github.com/MakiWinster/homepage.git
cd homepage
```

4. Replace File:
- Copy the exported pintree.json to the project root directory, replacing the existing pintree.json file

5. Install Dependencies:
```bash
pip install -r requirements.txt
```

6. Generate Static Page:
```bash
python generate_homepage.py
```

7. Open the generated index.html file in your browser and set it as your browser homepage

8. (Optional) Set as New Tab Page:
- For Edge: Install [New Tab Changer](https://microsoftedge.microsoft.com/addons/detail/new-tab-changer/dlbnebcbaeajdpekcdhmcgdhoodcjpeg)
- For Chrome: Install [New Tab Changer](https://chromewebstore.google.com/detail/new-tab-changer/occbjkhimchkolibngmcefpjlbknggfh)
- After installation, set the new tab page URL to the path of your generated index.html file in the extension settings

## Bookmark Configuration

Bookmarks are stored in the `pintree.json` file. You can add or modify bookmarks using the following format:

```json
{
  "type": "folder",
  "title": "Folder Name",
  "children": [
    {
      "type": "link",
      "title": "Bookmark Title",
      "icon": "Icon URL",
      "url": "Bookmark URL"
    }
  ]
}
```
- Sample bookmarks are already included in pintree.json

## Contributing

Issues and Pull Requests are welcome to help improve this project!

## License

MIT License 