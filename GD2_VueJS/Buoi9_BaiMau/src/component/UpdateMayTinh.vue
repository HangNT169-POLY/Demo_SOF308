<template>
  <div v-if="mayTinh" class="detail-container">
    <h2>Chi tiết Máy Tính</h2>
    <form @submit.prevent="updateMayTinh">
      <div class="mb-3">
        <label for="id" class="form-label">ID</label>
        <input type="text" class="form-control" id="id" :value="mayTinh.id" readonly />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Tên</label>
        <input
          type="text"
          class="form-control"
          id="name"
          :value="editedMayTinh.name"
          @input="editedMayTinh.name = $event.target.value"
          required
        />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Giá</label>
        <input
          type="number"
          class="form-control"
          id="price"
          :value="editedMayTinh.price"
          @input="editedMayTinh.price = $event.target.value"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Mô tả</label>
        <input
          type="text"
          class="form-control"
          id="description"
          :value="editedMayTinh.description"
          @input="editedMayTinh.description = $event.target.value"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Cập nhật</button>
      <button type="button" class="btn btn-secondary" @click="closeDetail">Đóng</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue'

// Nhận dữ liệu máy tính từ component cha
const props = defineProps({
  mayTinh: {
    type: Object,
    required: true,
  },
})

// Emit sự kiện để đóng form chi tiết
const emit = defineEmits(['close', 'update'])

// Tạo một bản sao dữ liệu máy tính để người dùng có thể chỉnh sửa
const editedMayTinh = reactive({ ...props.mayTinh })

const updateMayTinh = () => {
  // Emit thông tin máy tính đã chỉnh sửa
  emit('update', { ...editedMayTinh })
}

const closeDetail = () => {
  emit('close')
}
</script>
