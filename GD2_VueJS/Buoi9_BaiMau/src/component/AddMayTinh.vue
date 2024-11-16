<template>
  <!-- ================Login Box Area ================= -->
  <section class="login_box_area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login_form_inner">
            <h3>Add new Product</h3>
            <form @submit.prevent="addMayTinh">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Tên</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="newMayTinh.name" />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Giá</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="newMayTinh.price" />
                </div>
              </div>
              <div class="mb-3 row">
                <label class="col-sm-2 col-form-label">Miêu tả</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" v-model="newMayTinh.description" />
                </div>
              </div>
              <button type="submit" class="btn btn-outline-success">Success</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
</template>
<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['addMayTinh'])

const newMayTinh = reactive({
  name: '',
  price: '',
  description: '',
})
const addMayTinh = () => {
  emit('addMayTinh', { ...newMayTinh })
}
</script>
