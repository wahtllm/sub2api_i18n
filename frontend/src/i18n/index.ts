import { createI18n } from 'vue-i18n'

type LocaleCode = 'en' | 'zh' | 'zh-Hant' | 'ja' | 'de' | 'ko' | 'es' | 'fr' | 'pt-BR'

// 用户可选择的语言偏好：具体语言，或 "system"（每次加载按浏览器语言解析）
type LocalePreference = LocaleCode | 'system'

type LocaleMessages = Record<string, any>

const LOCALE_KEY = 'sub2api_locale'
const SYSTEM_LOCALE = 'system'
const DEFAULT_LOCALE: LocaleCode = 'en'

const LOCALE_CODES: readonly LocaleCode[] = ['en', 'zh', 'zh-Hant', 'ja', 'de', 'ko', 'es', 'fr', 'pt-BR']

const localeLoaders: Record<LocaleCode, () => Promise<{ default: LocaleMessages }>> = {
  en: () => import('./locales/en'),
  zh: () => import('./locales/zh'),
  'zh-Hant': () => import('./locales/zh-Hant'),
  ja: () => import('./locales/ja'),
  de: () => import('./locales/de'),
  ko: () => import('./locales/ko'),
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  'pt-BR': () => import('./locales/pt-BR')
}

function isLocaleCode(value: string): value is LocaleCode {
  return (LOCALE_CODES as readonly string[]).includes(value)
}

function isLocalePreference(value: string): value is LocalePreference {
  return value === SYSTEM_LOCALE || isLocaleCode(value)
}

// 浏览器语言前缀 → 支持的 locale。繁体变体（zh-TW/HK/MO/Hant）优先于通用 zh 前缀匹配；
// pt-PT 等其它葡语变体统一回落到巴葡包。
const browserLocaleMatchers: ReadonlyArray<readonly [prefix: string, locale: LocaleCode]> = [
  ['zh-hant', 'zh-Hant'],
  ['zh-tw', 'zh-Hant'],
  ['zh-hk', 'zh-Hant'],
  ['zh-mo', 'zh-Hant'],
  ['zh', 'zh'],
  ['ja', 'ja'],
  ['de', 'de'],
  ['ko', 'ko'],
  ['es', 'es'],
  ['fr', 'fr'],
  ['pt', 'pt-BR']
]

function resolveBrowserLocale(): LocaleCode {
  const browserLang = navigator.language.toLowerCase()
  for (const [prefix, locale] of browserLocaleMatchers) {
    if (browserLang.startsWith(prefix)) {
      return locale
    }
  }
  return DEFAULT_LOCALE
}

function getDefaultLocale(): LocaleCode {
  const saved = localStorage.getItem(LOCALE_KEY)
  if (saved && isLocaleCode(saved)) {
    return saved
  }

  // 未设置过偏好，或偏好为 system：跟随浏览器语言
  return resolveBrowserLocale()
}

export const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {},
  // 禁用 HTML 消息警告 - 引导步骤使用富文本内容（driver.js 支持 HTML）
  // 这些内容是内部定义的，不存在 XSS 风险
  warnHtmlMessage: false
})

const loadedLocales = new Set<LocaleCode>()

export async function loadLocaleMessages(locale: LocaleCode): Promise<void> {
  if (loadedLocales.has(locale)) {
    return
  }

  const loader = localeLoaders[locale]
  const module = await loader()
  i18n.global.setLocaleMessage(locale, module.default)
  loadedLocales.add(locale)
}

export async function initI18n(): Promise<void> {
  const current = getLocale()
  await loadLocaleMessages(current)
  document.documentElement.setAttribute('lang', current)
}

export async function setLocale(locale: string): Promise<void> {
  if (!isLocalePreference(locale)) {
    return
  }

  const target = locale === SYSTEM_LOCALE ? resolveBrowserLocale() : locale
  await loadLocaleMessages(target)
  i18n.global.locale.value = target
  localStorage.setItem(LOCALE_KEY, locale)
  document.documentElement.setAttribute('lang', target)

  // 同步更新浏览器页签标题，使其跟随语言切换
  const { resolveRouteDocumentTitle } = await import('@/router/title')
  const { default: router } = await import('@/router')
  const { useAppStore } = await import('@/stores/app')
  const { useAuthStore } = await import('@/stores/auth')
  const { useAdminSettingsStore } = await import('@/stores/adminSettings')
  const route = router.currentRoute.value
  const appStore = useAppStore()
  const authStore = useAuthStore()
  const adminSettingsStore = useAdminSettingsStore()
  const customMenuItems = [
    ...(appStore.cachedPublicSettings?.custom_menu_items ?? []),
    ...(authStore.isAdmin ? adminSettingsStore.customMenuItems : []),
  ]
  document.title = resolveRouteDocumentTitle(route, appStore.siteName, customMenuItems)
}

export function getLocale(): LocaleCode {
  const current = i18n.global.locale.value
  return isLocaleCode(current) ? current : DEFAULT_LOCALE
}

// 当前存储的语言偏好（未设置过视为 system）
export function getLocalePreference(): LocalePreference {
  const saved = localStorage.getItem(LOCALE_KEY)
  return saved && isLocalePreference(saved) ? saved : SYSTEM_LOCALE
}

// 语言菜单：System 固定第一，其余按本地名 Unicode 序排列
export const availableLocales = [
  { code: 'system', name: 'System', flag: '🌐' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-Hant', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
] as const

export default i18n
