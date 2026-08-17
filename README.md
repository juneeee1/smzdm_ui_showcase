# ZDM Creative Hub

值得买内部高质量 UI、交互与视觉实验案例库。首页提供简洁的案例索引，点击缩略图进入独立体验页。

当前案例：Product Fan、Skewed Selects、Tumble Picks、Quick View、Object Depth、Product Lens。

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

- [Headphones](https://images.unsplash.com/photo-1594215741864-6024bef4f3e3)
- [Camera](https://images.unsplash.com/photo-1632251350207-918fb9b74249)
- [Watch](https://images.unsplash.com/photo-1668930199744-3f3aa689ceed)
- [Perfume](https://images.unsplash.com/photo-1676950933747-5f886cadf014)
- [Sneaker](https://unsplash.com/photos/DXTT02-ee-8)
- [Keyboard](https://unsplash.com/photos/rW2KRSx2vJs)
- [Coffee maker](https://images.unsplash.com/photo-1673694801488-36d2ceb295f1)
