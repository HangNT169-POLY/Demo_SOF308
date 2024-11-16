<template>
  <!-- ================Login Box Area ================= -->
  <section class="login_box_area section_gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="login_form_inner">
            <h3>Add new Product</h3>
            <form>
              <label>
                Tên máy tính:
                <input type="text" v-model="mayTinh.name" />
              </label>
              <br />
              <label>
                Giá:
                <input type="number" v-model="mayTinh.price" />
              </label>
              <br />
              <label>
                Mô tả:
                <input type="text" v-model="mayTinh.description" />
              </label>
              <!-- <button type="submit" class="btn btn-outline-success">Success</button> -->
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
defineModel('mayTinh', {
  default: () => ({
    name: '',
    price: '',
    description: '',
  }),
})
</script>
