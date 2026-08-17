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
  { id: 'headphones', title: 'Studio Headphones', price: '¥2,899', kicker: 'AUDIO', image: headphones, position: '50% 54%' },
  { id: 'camera', title: 'Mirrorless Camera', price: '¥8,499', kicker: 'IMAGING', image: camera, position: '50% 50%' },
  { id: 'watch', title: 'Automatic Watch', price: '¥4,680', kicker: 'STYLE', image: watch, position: '50% 46%' },
  { id: 'perfume', title: 'Eau de Parfum', price: '¥1,260', kicker: 'LIFESTYLE', image: perfume, position: '50% 50%' },
  { id: 'sneaker', title: 'Performance Sneaker', price: '¥899', kicker: 'SPORT', image: sneaker, position: '50% 50%' },
  { id: 'keyboard', title: 'Mechanical Keyboard', price: '¥699', kicker: 'DIGITAL', image: keyboard, position: '50% 55%' },
  { id: 'coffee', title: 'Espresso Machine', price: '¥3,299', kicker: 'HOME', image: coffeeMaker, position: '50% 50%' },
]
