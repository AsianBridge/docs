import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ABPrivacyPolicy from '../components/ABPrivacyPolicy.vue'
import ABPrivacyProtection from '../components/ABPrivacyProtection.vue'
import ABPrivacyHandling from '../components/ABPrivacyHandling.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy/',
    name: 'プライバシーポリシー - 株式会社Asian Bridge',
    component: ABPrivacyPolicy,
  },
  {
    path: '/privacy-protection/',
    name: '個人情報保護方針 - 株式会社Asian Bridge',
    component: ABPrivacyProtection,
  },
  {
    path: '/privacy-handling/',
    name: '個人情報の取り扱いについて - 株式会社Asian Bridge',
    component: ABPrivacyHandling,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
