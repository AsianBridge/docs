import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import PrivacyProtection from '../components/PrivacyProtection.vue'
import PrivacyHandling_ABC from '../components/PrivacyHandling_ABC.vue'
import Terms_CareeTern from '../components/Terms_CareeTern.vue'
import PrivacyHandling_CareeTern from '../components/PrivacyHandling_CareeTern.vue'
import ExclusionASF_CareeTern from '../components/ExclusionASF_CareeTern.vue'
import Terms_SportsBank from '../components/Terms_SportsBank.vue'
import PrivacyHandling_SportsBank from '../components/PrivacyHandling_SportsBank.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
  },
  {
    path: '/privacy-protection/',
    name: '個人情報保護方針 | 株式会社Asian Bridge',
    component: PrivacyProtection,
  },

  // asianbridge.co.jp
  {
    path: '/privacy-handling/abc/',
    name: '個人情報の取り扱いについて | 株式会社Asian Bridge',
    component: PrivacyHandling_ABC,
  },

  // CareeTern
  {
    path: '/terms/careetern',
    name: '利用規約 | CareeTern (キャリターン)',
    component: Terms_CareeTern,
  },
  {
    path: '/privacy-handling/careetern/',
    name: '個人情報の取り扱いについて | CareeTern (キャリターン)',
    component: PrivacyHandling_CareeTern,
  },
  {
    path: '/exclusion-asf/careetern',
    name: '反社会勢力の排除に関する誓約書 | CareeTern (キャリターン)',
    component: ExclusionASF_CareeTern,
  },

  // Sports Bank
  {
    path: '/terms/sportsbank',
    name: '利用規約 | Sports Bank (スポーツバンク)',
    component: Terms_SportsBank,
  },
  {
    path: '/privacy-handling/sportsbank',
    name: '個人情報の取り扱いについて | Sports Bank (スポーツバンク)',
    component: PrivacyHandling_SportsBank,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  document.title = `${to.name}`
})

export default router
