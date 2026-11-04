<script setup lang="ts">
import navigationData from '~/data/navigation.json'

const menuOpen = ref(false)
const { locale, setLocale, t } = useI18n()

const closeMenu = () => {
  menuOpen.value = false
}

const toggleLocale = async () => {
  await setLocale(locale.value === 'id' ? 'en' : 'id')
  closeMenu()
}
</script>

<template>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="#home" :aria-label="t('nav.home')" @click="closeMenu">
        <img class="brand-logo" src="/natural-aceh-logo.jpg" alt="">
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="primary-navigation" @click="menuOpen = !menuOpen">
        <span>{{ menuOpen ? t('nav.close') : t('nav.menu') }}</span><span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
      </button>
      <nav id="primary-navigation" class="primary-nav" :class="{ 'nav-open': menuOpen }" :aria-label="t('nav.label')">
        <ul class="primary-menu">
          <NavMenuItem v-for="item in navigationData.items" :key="item.key ?? item.url ?? item.label" :item="item" @navigate="closeMenu" />
        </ul>
        <BackgroundAudioControl />
        <button class="language-switch" type="button" :aria-label="t('nav.switchLanguage')" @click="toggleLocale">{{ locale === 'id' ? 'EN' : 'ID' }}</button>
      </nav>
    </div>
  </header>
</template>
