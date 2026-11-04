<script setup lang="ts">
defineOptions({ name: 'NavMenuItem' })

type NavigationItem = { key?: string; label: string; labelId?: string; url?: string; children?: NavigationItem[] }

const props = defineProps<{ item: NavigationItem }>()

defineEmits<{ navigate: [] }>()

const expanded = ref(false)
const { t, locale } = useI18n()
const label = computed(() => locale.value === 'id' && props.item.labelId ? props.item.labelId : props.item.label)
</script>

<template>
  <li class="nav-tree-item" :class="{ 'nav-has-children': item.children?.length, 'nav-expanded': expanded }">
    <div class="nav-entry">
      <a v-if="item.url" :href="item.url" target="_blank" rel="noreferrer" @click="$emit('navigate')">{{ label }}</a>
      <span v-else class="nav-category-label">{{ label }}</span>
      <button
        v-if="item.children?.length"
        class="nav-trigger"
        type="button"
        :aria-label="`${expanded ? t('nav.closeSubmenu') : t('nav.openSubmenu')} ${label}`"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      ><span class="nav-chevron" aria-hidden="true"></span></button>
    </div>
    <ul v-if="item.children?.length" class="nav-dropdown">
      <NavMenuItem v-for="child in item.children" :key="child.url" :item="child" @navigate="$emit('navigate')" />
    </ul>
  </li>
</template>
