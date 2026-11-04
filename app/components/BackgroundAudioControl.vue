<script setup lang="ts">
const audio = ref<HTMLAudioElement | null>(null)
const soundOn = ref(false)
const hasStarted = ref(false)
const playbackError = ref(false)
const { t } = useI18n()

const removeInteractionListeners = () => {
  window.removeEventListener('pointerdown', startAfterInteraction)
  window.removeEventListener('keydown', startAfterInteraction)
}

const startAfterInteraction = async (event: Event) => {
  if ((event.target as HTMLElement | null)?.closest?.('.audio-control')) return
  if (!audio.value || soundOn.value) {
    removeInteractionListeners()
    return
  }

  try {
    await audio.value.play()
    soundOn.value = true
    hasStarted.value = true
    playbackError.value = false
    removeInteractionListeners()
  } catch {
    soundOn.value = false
  }
}

onMounted(async () => {
  if (!audio.value) return

  try {
    await audio.value.play()
    soundOn.value = true
    hasStarted.value = true
  } catch {
    soundOn.value = false
    window.addEventListener('pointerdown', startAfterInteraction)
    window.addEventListener('keydown', startAfterInteraction)
  }
})

onBeforeUnmount(() => {
  removeInteractionListeners()
})

const toggleSound = async () => {
  if (!audio.value) return

  if (soundOn.value) {
    audio.value.muted = true
    soundOn.value = false
    return
  }

  audio.value.muted = false

  try {
    await audio.value.play()
    soundOn.value = true
    hasStarted.value = true
    playbackError.value = false
    removeInteractionListeners()
  } catch {
    playbackError.value = true
  }
}
</script>

<template>
  <div class="audio-control">
    <button class="audio-toggle" type="button" :aria-label="soundOn ? t('audio.mute') : hasStarted ? t('audio.unmute') : t('audio.play')" :title="soundOn ? t('audio.mute') : hasStarted ? t('audio.unmute') : t('audio.play')" :aria-pressed="soundOn" @click="toggleSound">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path v-if="soundOn" d="M15.5 8.5a5 5 0 0 1 0 7m3-10a9 9 0 0 1 0 13" />
        <path v-else d="m16 9 5 6m0-6-5 6" />
      </svg>
      <span class="sr-only">{{ soundOn ? t('audio.on') : t('audio.off') }}</span>
    </button>
    <span v-if="playbackError" class="sr-only" role="status">{{ t('audio.error') }}</span>
    <audio ref="audio" src="/natural-aceh-backsound-old.mp3" loop preload="auto" autoplay />
  </div>
</template>
