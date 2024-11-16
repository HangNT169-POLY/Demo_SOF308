<template>
  <section><h1 class="container">Quan ly may tinh</h1></section>
  <section class="container">
    <!-- <AddMayTinh v-if="!selectedMayTinh" :lists="listMayTinh" @addMayTinh="addMayTinh" /> -->
    <!-- <UpdateMayTinh
      v-if="selectedMayTinh"
      :mayTinh="selectedMayTinh"
      @close="selectedMayTinh = null"
      @update="updateMayTinh" -->
    <!-- /> -->
    <AddMayTinh1 v-model:mayTinh="newMayTinh" />
    <button @click="addMayTinh" v-show="!isUpdating">Thêm Máy Tính</button>
    <button @click="updateMayTinh" v-if="isUpdating">Cập Nhật</button>
  </section>
  <section class="container">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listMayTinh" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>
            <a
              class="btn btn-outline-danger"
              href="#"
              role="button"
              @click="removeMayTinh(item.id)"
            >
              Remove</a
            >&nbsp;
            <a
              class="btn btn-outline-primary"
              href="#"
              role="button"
              @click.prevent="viewDetail(item)"
            >
              Chi tiết
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import AddMayTinh1 from '../component/AddMayTinh1.vue'

const listMayTinh = reactive([
  {
    id: 1,
    name: 'May 1',
    price: 1000,
    description: 'May 1',
  },
  {
    id: 2,
    name: 'May 1fds',
    price: 10003,
    description: 'May 1',
  },
  {
    id: 3,
    name: 'May 1',
    price: 13000,
    description: 'May 1',
  },
  {
    id: 4,
    name: 'May 4',
    price: 10300,
    description: 'May 1',
  },
  {
    id: 5,
    name: 'May 5',
    price: 1000,
    description: 'May 1',
  },
])

const removeMayTinh = (id) => {
  const index = listMayTinh.findIndex((item) => item.id === id)
  listMayTinh.splice(index, 1)
}
const isUpdating = ref(false)
const currentIndex = ref(-1)
const viewDetail = (item) => {
  currentIndex.value = listMayTinh.findIndex((mayTinh) => mayTinh.id === item.id)
  newMayTinh.value = { ...item }
  isUpdating.value = true
}
// const updateMayTinh = (updatedMayTinh) => {
//   const index = listMayTinh.findIndex((item) => item.id === updatedMayTinh.id)
//   if (index !== -1) {
//     listMayTinh[index] = updatedMayTinh
//   }
//   selectedMayTinh.value = null // Đóng form chi tiết sau khi cập nhật
// }
// Máy tính mới để thêm
const newMayTinh = ref({
  name: '',
  price: '',
  description: '',
})

// Hàm thêm máy tính vào danh sách
const addMayTinh = () => {
  if (newMayTinh.value.name && newMayTinh.value.price) {
    listMayTinh.push({
      id: listMayTinh.length + 1,
      ...newMayTinh.value, // Sao chép dữ liệu từ newMayTinh
    })
    // Reset dữ liệu sau khi thêm
    newMayTinh.value = { name: '', price: '', description: '' }
  }
}
// Hàm cập nhật máy tính
const updateMayTinh = () => {
  if (currentIndex.value !== -1) {
    // Cập nhật dữ liệu trong danh sách mà không thay đổi vị trí
    listMayTinh[currentIndex.value] = { ...newMayTinh.value }
    newMayTinh.value = { name: '', price: '', description: '' }
    isUpdating.value = false
    currentIndex.value = -1
  }
}
</script>
