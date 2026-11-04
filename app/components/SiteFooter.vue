<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-heading"><p class="section-kicker">{{ t('footer.kicker') }}</p><h2>{{ t('footer.title') }}<br>{{ t('footer.titleLine2') }} <em>{{ t('footer.accent') }}</em></h2></div>
        <a class="button button-light footer-cta" href="mailto:mitra@naturalaceh.org">{{ t('footer.cta') }} <span aria-hidden="true">↗</span></a>
      </div>
      <div class="footer-details">
        <a class="brand brand-footer" href="#home" :aria-label="t('nav.home')"><img class="brand-logo" src="/natural-aceh-logo.jpg" alt=""></a>
        <div><h3>{{ t('footer.visit') }}</h3><p>Tgk. Adee II No. 8, Ulee Kareng<br>Banda Aceh 23117, Indonesia</p></div>
        <div><h3>{{ t('footer.call') }}</h3><a class="helpdesk-number" href="tel:+6285724931784">0857 2493 1784 · {{ t('footer.helpdesk') }}</a><a href="tel:+626513613076">+62 651 361 3076</a><a href="tel:+628994613076">+62 899 461 3076</a><a href="tel:+6289754613076">+62 897 5461 3076</a></div>
        <div><h3>{{ t('footer.follow') }}</h3><a href="https://wa.me/6285724931784" target="_blank" rel="noreferrer">WhatsApp ↗</a><a href="https://www.instagram.com/naturalaceh/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@naturalaceh" target="_blank" rel="noreferrer">TikTok ↗</a><a href="mailto:mitra@naturalaceh.org">mitra@naturalaceh.org</a></div>
      </div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Natural Aceh</span><span>{{ t('footer.motto') }}</span><a href="#home">{{ t('footer.backToTop') }} ↑</a></div>
    </div>
  </footer>
</template>
