export type CreativeCase = {
  id: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  referenceName: string
  referenceUrl: string
  status: 'featured' | 'draft'
}

export const creativeCases: CreativeCase[] = [
  {
    id: 'card-spread',
    number: '001',
    title: '商品扇形卡',
    subtitle: '精选商品卡片展开成富有节奏的扇形。',
    tags: ['交互', '卡片', '编辑设计'],
    referenceName: 'React Bits Pro / Card Spread',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/card-spread',
    status: 'featured',
  },
  {
    id: 'skewed-carousel',
    number: '002',
    title: '斜切轮播',
    subtitle: '一组随浏览倾斜缩放的商品卡片流。',
    tags: ['轮播', '拖拽', '编辑设计'],
    referenceName: 'React Bits Pro / Skewed Carousel',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/skewed-carousel',
    status: 'featured',
  },
  {
    id: 'tumble-carousel',
    number: '003',
    title: '翻滚轮播',
    subtitle: '精选商品翻滚进入视觉焦点。',
    tags: ['轮播', '弹性动效', '卡片'],
    referenceName: 'React Bits Pro / Tumble Carousel',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/tumble-carousel',
    status: 'featured',
  },
  {
    id: 'modal-cards',
    number: '004',
    title: '沉浸快览',
    subtitle: '紧凑商品卡展开为沉浸式详情层。',
    tags: ['弹层', '形态变换', '商品展示'],
    referenceName: 'React Bits Pro / Modal Cards',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/modal-cards',
    status: 'featured',
  },
  {
    id: 'depth-card',
    number: '005',
    title: '商品景深',
    subtitle: '由多层响应构成的触感商品肖像。',
    tags: ['景深', '指针', '三维'],
    referenceName: 'React Bits Pro / Depth Card',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/depth-card',
    status: 'featured',
  },
  {
    id: 'warped-card',
    number: '006',
    title: '商品透镜',
    subtitle: '移动光学透镜弯折商品叙事表面。',
    tags: ['形变', '指针', '视觉'],
    referenceName: 'React Bits Pro / Warped Card',
    referenceUrl: 'https://pro.reactbits.dev/docs/components/warped-card',
    status: 'featured',
  },
  {
    id: 'bounce-cards',
    number: '007',
    title: '弹跳卡阵',
    subtitle: '商品卡以弹性节奏进场，悬停时为焦点让路。',
    tags: ['弹性动效', '悬停', '卡片'],
    referenceName: 'React Bits / Bounce Cards',
    referenceUrl: 'https://reactbits.dev/components/bounce-cards',
    status: 'featured',
  },
  {
    id: 'chroma-grid',
    number: '008',
    title: '光谱选品',
    subtitle: '指针光晕穿过网格，唤醒商品的彩色信息层。',
    tags: ['光谱', '网格', '指针'],
    referenceName: 'React Bits / Chroma Grid',
    referenceUrl: 'https://reactbits.dev/components/chroma-grid',
    status: 'featured',
  },
  {
    id: 'profile-card',
    number: '009',
    title: '全息身份卡',
    subtitle: '一张随指针倾斜、折射光谱的值得买身份卡。',
    tags: ['全息', '三维', '身份'],
    referenceName: 'React Bits / Profile Card',
    referenceUrl: 'https://reactbits.dev/components/profile-card',
    status: 'featured',
  },
  {
    id: 'stack',
    number: '010',
    title: '精选卡堆',
    subtitle: '拖走当前商品，让下一张精选自然浮现。',
    tags: ['拖拽', '堆叠', '卡片'],
    referenceName: 'React Bits / Stack',
    referenceUrl: 'https://reactbits.dev/components/stack',
    status: 'featured',
  },
]
