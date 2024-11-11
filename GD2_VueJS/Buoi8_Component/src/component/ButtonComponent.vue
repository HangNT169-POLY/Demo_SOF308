<script setup>
import { ref } from 'vue'
const count = ref(0)
const props = defineProps({
  init: Number,
})
const count1 = ref(props.init)
const eventButton = defineEmits('increase', 'increaseDouble', 'increaseBy')
const callFunctionIncrease = () => {
  eventButton('increase')
}
const callFunctionIncreaseDouble = () => {
  eventButton('increaseDouble')
}

const callFunctionIncreaseByNumber = () => {
  eventButton('increaseBy')
}
</script>
<template>
  <!-- <p>{{ counÒt }}</p>
  <p>{{ count1 }}</p>
  <button @click="count1++">Click</button>
  <p>Con:<ComponentA /></p> -->
  <p>Con</p>
  <p>Button</p>
  <button @click="callFunctionIncrease">Click</button>
  <button @click="callFunctionIncreaseDouble">Click X2</button>
  <button @click="callFunctionIncreaseByNumber">Click Number</button>
</template>
