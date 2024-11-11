<script setup>
// Binding du lieu:
// 1. Noi suy van ban
// Cu phap co ban trong binding du lieu
// Su dung bieu thuc trong binding : +,-,*,/, toan tu 3 ngoi
// Noi suy van ban => js thi phai innertext vao id
const mess = 'Hello'
const rawHtml = '<span style="color: red">This should be red.</span>'
const buttonID = 'button-id'
const n = 'class-a'
const isDisable = false
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
}
const number = 1
</script>
<template>
  <p>{{ mess }}</p>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <button v-bind:id="buttonID">abcd</button>
  <!-- Cach rut gon -->
  <button :id="buttonID" :class="n" :disabled="isDisable">abcd</button>
  <!-- Thuộc tính disabled sẽ được bao gồm nếu isButtonDisabled có giá trị truthy.
   Nó cũng sẽ được bao gồm nếu giá trị là một chuỗi rỗng,
   duy trì tính nhất quán với <button disabled="">.
    Đối với các giá trị falsy khác, thuộc tính sẽ bị loại bỏ. -->
  <!-- Rang buoc nhieu thuoc tinh -->
  <div v-bind="objectOfAttrs"></div>
  <button :disabled="isDisable">Number {{ number * 2 }}</button>
  <button :disabled="isDisable">{{ isDisable ? 'Disable' : 'Click here' }}</button>
  <div class="container">
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-primary">Primary</button>
  </div>
</template>
