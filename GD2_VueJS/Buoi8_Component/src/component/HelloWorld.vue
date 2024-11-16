<script setup>
// C1:
// const props = defineProps(['message'])
// console.log(props)

import { inject } from 'vue'
import LocalComponent from './LocalComponent.vue'

// C2:
const props = defineProps({
  // message: String,
  // Neu de type la Number khi F12 => warn luon
  // Props la du lieu 1 chieu tuc la chi co cha => truyen sang con
  // K co truong hop nguoc lai
  message1: Number,
})
const locale1 = inject('locale1')
</script>

<template>
  <p>{{ props.message1 }}</p>
  <p>Con1</p>
  <LocalComponent />
</template>
