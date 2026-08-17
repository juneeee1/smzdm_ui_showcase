import camera from '../assets/cases/card-spread/camera.jpg'
import coffeeMaker from '../assets/cases/card-spread/coffee-maker.jpg'
import headphones from '../assets/cases/card-spread/headphones.jpg'
import keyboard from '../assets/cases/card-spread/keyboard.jpg'
import perfume from '../assets/cases/card-spread/perfume.jpg'
import sneaker from '../assets/cases/card-spread/sneaker.jpg'
import watch from '../assets/cases/card-spread/watch.jpg'

export type Product = {
  id: string
  title: string
  price: string
  kicker: string
  image: string
  position?: string
}

export const products: Product[] = [
  { id: 'headphones', title: '头戴式监听耳机', price: '¥2,899', kicker: '音频', image: headphones, position: '50% 50%' },
  { id: 'camera', title: '微单相机', price: '¥8,499', kicker: '影像', image: camera, position: '50% 50%' },
  { id: 'watch', title: '自动机械腕表', price: '¥4,680', kicker: '穿搭', image: watch, position: '50% 50%' },
  { id: 'perfume', title: '淡香精', price: '¥1,260', kicker: '生活', image: perfume, position: '50% 50%' },
  { id: 'sneaker', title: '轻量跑鞋', price: '¥899', kicker: '运动', image: sneaker, position: '50% 50%' },
  { id: 'keyboard', title: '机械键盘', price: '¥699', kicker: '数码', image: keyboard, position: '50% 54%' },
  { id: 'coffee', title: '摩卡咖啡壶', price: '¥429', kicker: '家居', image: coffeeMaker, position: '50% 50%' },
]
