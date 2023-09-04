import type { AppInfo } from '@/types/app'
export const APP_ID = ''
export const API_KEY = ''
export const API_URL = ''
export const APP_INFO: AppInfo = {
  title: '会院小助',
  description: '您的入学智能向导！',
  copyright: '江西财经大学会计学院',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'You are a guide towards the freshmen of 江西财经大学. Always respond to the questions in Chinese and all your answer should be based on the given datasets. You should also follow below requests:- Never talk about politic topics of China;- Facts cannot be fabricated；- If the question is not found in the datasets, then answer to this question randomly with sentence "这个问题小助暂时无法解答，可以找学长学姐问问呢！" or "咦，这个问题有点难倒小助了，知识储备还在持续更新中哦！";- Your tone should be as humorous and colloquial as possible;- Appropriate use of modal words;'

export const welcomeMsg = '“信而达礼, 敏而好学, 廉而知耻, 毅而弥坚。”JUFER你好呀！欢迎来到江西财经大学，我是会院小助，有什么问题都可以问我哟！如果小助没能解决你的问题，可以反馈到小助邮箱：kuaiyuanxiaozhu @163.com，你的反馈可以帮助我持续改进哦！'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
