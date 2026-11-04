<script setup lang="ts">
import news from '~/data/news'

const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description')
})

const programs = computed(() => [
  { number: '01', anchor: 'program-wps', ...t('programs.cards.0'), image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1100&q=85', tone: 'sea' },
  { number: '02', anchor: 'program-livelihood', ...t('programs.cards.1'), image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85', tone: 'forest' },
  { number: '03', anchor: 'program-sdgs', ...t('programs.cards.2'), image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85', tone: 'learn' }
])

const localizedNews = computed(() => news[locale.value === 'id' ? 'id' : 'en'])

useHead({ htmlAttrs: { lang: locale } })
</script>

<template>
  <main>
    <SiteHeader />

    <section id="home" class="hero relative isolate overflow-hidden">
      <img class="hero-image" src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=90" :alt="t('hero.imageAlt')" fetchpriority="high">
      <div class="hero-shade"></div>
      <div class="hero-content wrap">
        <p class="hero-mark">{{ t('hero.motto') }}</p>
        <h1>{{ t('hero.title') }}<br><span>{{ t('hero.titleAccent') }}</span></h1>
        <p class="hero-copy">{{ t('hero.description') }}</p>
        <a class="button button-light" href="#about">{{ t('hero.cta') }} <span aria-hidden="true">↗</span></a>
      </div>
      <a class="hero-note" href="#programs"><span>{{ t('hero.caption') }}</span><span class="hero-line"></span><span>01 — 03</span></a>
    </section>

    <section id="about" class="intro section-pad">
      <div class="wrap intro-grid">
        <div class="intro-label"><span class="small-mark">N</span><span>{{ t('about.label') }}</span></div>
        <div class="intro-main">
          <h2>{{ t('about.title') }} <em>{{ t('about.accent') }}</em></h2>
          <div class="intro-bottom">
            <p>{{ t('about.description') }}</p>
            <a class="text-link" href="#programs">{{ t('about.link') }} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <section id="programs" class="program-section section-pad">
      <div class="wrap">
        <div class="section-heading">
          <div><p class="section-kicker">{{ t('programs.kicker') }}</p><h2>{{ t('programs.title') }}</h2></div>
          <p>{{ t('programs.intro') }}</p>
        </div>
        <div class="program-grid">
          <article v-for="program in programs" :id="program.anchor" :key="program.number" class="program-card" :class="`program-${program.tone}`">
            <img :src="program.image" :alt="program.title" loading="lazy">
            <div class="program-overlay"></div>
            <span class="program-number">{{ program.number }} / 03</span>
            <div class="program-copy"><h3>{{ program.title }}</h3><p>{{ program.detail }}</p></div>
            <span class="program-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
        <p class="program-footnote">{{ t('programs.explore') }} <a href="#contact">{{ t('programs.link') }} <span aria-hidden="true">↗</span></a></p>
      </div>
    </section>

    <section class="belief section-pad">
      <div class="wrap belief-grid">
        <p class="section-kicker">{{ t('belief.kicker') }}</p>
        <blockquote>{{ t('belief.quote') }}</blockquote>
        <p>{{ t('belief.description') }}</p>
      </div>
    </section>

    <section id="stories" class="stories-section section-pad">
      <div class="wrap">
        <div class="section-heading stories-heading">
          <div><p class="section-kicker">{{ t('stories.kicker') }}</p><h2>{{ t('stories.title') }}</h2></div>
        </div>
        <article class="featured-story">
          <span>{{ localizedNews.featured.label }}</span>
          <div><h3>{{ localizedNews.featured.title }}</h3><p>{{ localizedNews.featured.summary }}</p></div>
        </article>
        <div class="stories-grid">
          <article v-for="story in localizedNews.articles" :key="story.title" class="story-card">
            <div class="story-meta"><span>{{ story.category }}</span><span>{{ story.date }}</span></div>
            <h3>{{ story.title }}</h3>
            <p>{{ story.summary }}</p>
          </article>
        </div>
        <p class="stories-source">{{ t('stories.source') }}</p>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>
