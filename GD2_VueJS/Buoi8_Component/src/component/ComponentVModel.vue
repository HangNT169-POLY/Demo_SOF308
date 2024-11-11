<template>
  <label>Email</label>
  <input type="email" v-model="email" />
  <label>User name</label>
  <input type="text" v-model="username" />
  <p>Email:{{ email }}</p>
  <p>Username:{{ username }}</p>
  <button @click="emailDefault">Set default email</button>
</template>
<script setup>
import { ref } from 'vue'
// const email = ref('')
const email = defineModel('email')
const username = defineModel('username')
const emailDefault = () => {
  email.value = 'HangNT169@fpt.edu.vn'
}
// Tu phien ban 3.4 thi co the cha con goi nhau giong nhu v-model
</script>
