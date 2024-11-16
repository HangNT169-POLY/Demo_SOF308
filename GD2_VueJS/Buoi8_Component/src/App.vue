<script setup>
import { ref, watch, watchEffect } from 'vue'
import ButtonComponent from './component/ButtonComponent.vue'
import ComponentVModel from './component/ComponentVModel.vue'
import HelloWorld from './component/HelloWorld.vue'
const mess = ref('Hello')
const count = ref(0)
const number = ref(4)
const increaseByNumber = (number) => {
  count.value = count.value + number
}
const email = ref('')
watchEffect(() => {
  console.log(email.value)
})
const emailDefaultCha = () => {
  email.value = 'Cha@gmail.com'
}
const username = ref('Hang')
const userDefaultCha = () => {
  username.value = 'Thuy Hang'
}
</script>

<template>
  <!-- Props tinh: default truyen vao la String -->
  <h1>Component in Vue</h1>
  <!-- Component:
   - Khai niem: Chia nho giao dien nguoi dung thanh cac phan tu
   tai su dung duoc
   - Component bao gom: html,css,js rieng
   - Cho phep xay dung giao dien phuc tap dua vao cac component don gian
    -->
  <!-- Component cuc bo : Khi dung thi dang ky -->
  <!-- Muon la so thi them dau : o dau -->
  <!-- <ButtonComponent :init="3" /> -->
  <br />
  <!-- <button-component /> -->
  <br />
  <!-- <ComponentA /> -->
  <!-- Props: Cach truyen du lieu tu component cha toi con.
   props cho phep truyen cac gia tri.
   => Tai su dung viec chia se du lieu
   => Dinh nghia cac props la cac component cha => con
   Dac diem:
    + La 1 cach chia se du lieu truyen tu cha -> con
    + Duoc su dung ca o template & script
    + Duoc dinh nghia cac gia tri truyen vao component
    + De dang maintain cac component
    Cach khai bao props
    -->
  <!-- <HelloWorld message1="Test props" /> -->
  <br />
  <!-- <HelloWorld :message1="mess + 'World'" /> -->
  <!-- <ChildrenComponent
    :prop-a="12"
    prop-b="2"
    prop-c="hello"
    :prop-d="20"
    :prop-e="{
      message: 'Hello',
    }"
    prop-f="success"
    :prop-g="sayHi"
  /> -->
  <!-- Cach truyen event tu cha -> con -->
  <br />
  <p>Emit</p>
  <p>{{ count }}</p>
  <ButtonComponent
    @increase="count++"
    @increaseDouble="count += 2"
    @increaseBy="increaseByNumber(3)"
  />
  <br />
  <p>V-Model</p>
  <!-- Dinh nghia ten cua v-model: Ho tro binding nhieu v-model -->
  <ComponentVModel v-model:email="email" v-model:username="username" />
  <p>Cha: {{ email }}</p>
  <button @click="emailDefaultCha">Default Cha</button>
  <button @click="userDefaultCha">Default Cha - Username</button>
  <!-- Ong, Cha, Con, Chat,..
   C1: Thong qua props nhieu tang
   C2: Provide & Inject ho tro truyen tu ong -> Chau
   -->
  <HelloWorld message1="a" />
</template>
