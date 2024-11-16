<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- Rendering theo dieu kien:
 Co 2 directive dung nhieu nhat: v-if & v-show
 v-if: muon hien thi hoac loai bo phan tu nao do ra khoi dom.
 Dieu kien dung => hien thi trong dom
 ( tao va loai bo phan tu ra khoi dom theo dieu kien )
 v-show: dung de hien thi va an phan tu trong dom.
 Tuy nhien hien thi khac v-if.
 Neu v-if: thay doi phan tu khoi dom thi no se render lai.
 Con v-show:
 thay doi phan tu trong dom thi no se khong render lai.
  => chi them thuoc tinh css la disable hoac khong
 Vay cau hoir: Khi nao nen dung v-if khi nao dung v-show.
 V-if: Chi dung khi muon them/xoa phan tu ra khoi dom
 V-Show: Chi muon hien thi hoac an no di.
 Luu y: Voi truong hop render lai thuong xuyen
 => Nen dung v-if (Chi phi lon hon)
-->
<script setup>
import { ref } from 'vue'
// Re nhanh
const isLoggedIn = ref(true)

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
}

const isVisible = ref(true)

const toggleShow = () => {
  isVisible.value = !isVisible.value
}

const userStatus = ref('online')

const changeStatus = () => {
  if (userStatus.value === 'online') {
    userStatus.value = 'away'
  } else if (userStatus.value === 'away') {
    userStatus.value = 'busy'
  } else if (userStatus.value === 'busy') {
    userStatus.value = 'online'
  }
}
// Form
const text = ref('hello')
const multilineText = ref('')

const checkedNames = ref([])
const radioChecked = ref()
const checked = ref()
const selected = ref('')

const firstOption = ref('first option')
const secondOption = ref('second option')
</script>

<template>
  <div>
    <h1 v-if="isLoggedIn">Chào mừng người dùng đã đăng nhập</h1>
    <h1 v-else>Chào mừng khách</h1>
    <button @click="toggleLogin">{{ isLoggedIn ? 'Đăng xuất' : 'Đăng nhập' }}</button>
    <br />
    <h1 v-if="userStatus === 'online'">Người dùng đang online</h1>
    <h1 v-else-if="userStatus === 'away'">Người dùng đang vắng mặt</h1>
    <h1 v-else-if="userStatus === 'busy'">Người dùng đang bận</h1>
    <h1 v-else>Không rõ trạng thái</h1>
    <button @click="changeStatus">Thay đổi trạng thái</button>
    <br />
    <h1 v-show="isVisible">Nội dung này ẩn hoặc hiển thị</h1>
    <button @click="toggleShow">{{ isVisible ? 'Ẩn' : 'Hiện' }}</button>
  </div>
  <div>
    <h1>Form Input Bindings</h1>
    <p>Text: {{ text }} {{ typeof text }}</p>

    <input v-model.trim="text" />
    <p>Multiline Text: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Input your message" />

    <p>Checkbox: {{ checked }}</p>
    <input type="checkbox" id="a" v-model="checked" true-value="yes" false-value="no" />

    <p>Multiple checkbox: {{ checkedNames }}</p>
    <input type="checkbox" id="a" v-model="checkedNames" :value="firstOption" />
    <label for="a">A</label>
    <input type="checkbox" id="b" v-model="checkedNames" :value="secondOption" />
    <label for="b">B</label>

    <p>Radio: {{ radioChecked }}</p>
    <input type="radio" id="a" v-model="radioChecked" value="A" />
    <label for="a">A</label>
    <input type="radio" id="b" v-model="radioChecked" value="B" />
    <label for="b">B</label>

    <p>Select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option :value="{ name: 'A' }">A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
