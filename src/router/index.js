import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import PrivacyProtection from '../components/PrivacyProtection.vue'
import PrivacyHandling_ABC from '../components/PrivacyHandling_ABC.vue'
import PrivacyHandling_NOTOteMA from '../components/PrivacyHandling_NOTOteMA.vue'
import SCT_NOTOteMA from '../components/SCT_NOTOteMA.vue'
import Terms_CareeTern from '../components/Terms_CareeTern.vue'
import PrivacyHandling_CareeTern from '../components/PrivacyHandling_CareeTern.vue'
import ExclusionASF_CareeTern from '../components/ExclusionASF_CareeTern.vue'
import StipulationTenant_CareeTern from '../components/StipulationTenant_CareeTern.vue'
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
    name: '特定商取引法に基づく表記 | 株式会社Asian Bridge',
    component: PrivacyHandling_ABC,
  },

  // NOTOteMA
  {
    path: '/privacy-handling/nototema/',
    name: '個人情報の取り扱いについて | NOTOteMA (ノトテマ)',
    component: PrivacyHandling_NOTOteMA,
  },
  {
    path: '/sct/nototema/',
    name: '特定商取引法に基づく表記 | NOTOteMA (ノトテマ)',
    component: SCT_NOTOteMA,
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
  {
    path: '/stipulation_tenant/careetern',
    name: '利用約款(掲載企業向け) | CareeTern (キャリターン)',
    component: StipulationTenant_CareeTern,
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
