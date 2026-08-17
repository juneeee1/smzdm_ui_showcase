# ZDM Creative Hub

值得买内部高质量 UI、交互与视觉实验案例库。首页提供简洁的案例索引，点击缩略图进入独立体验页。

## 开发

```bash
npm install
npm run dev
```

## 构建

标准静态站构建，产物位于 `dist/`：

```bash
npm run build
```

生成可以直接发送给他人的单 HTML 文件，产物位于 `share/index.html`：

```bash
npm run build:share
```

## 新增案例

1. 在 `src/cases/registry.ts` 增加案例元数据。
2. 在 `src/pages/` 或独立案例目录实现详情体验。
3. 将高清素材放在 `src/assets/cases/<case-id>/`，通过模块导入以支持单 HTML 打包。

## 素材

首个 `Product Fan` 案例参考 React Bits Pro 的 Card Spread 公开交互表现独立实现，没有复制其付费源码。演示图片来自 Unsplash 免费图库，仅用于内部设计展示：

- Headphones — Petri R
- Camera — Vanilla Bear Films
- Watch — Panagiotis Falcos
- Perfume — Jessica Weiller
- Sneaker — Sou Jest
- Keyboard — Jeremy Rorimpandey
- Coffee maker — César Cabrera
