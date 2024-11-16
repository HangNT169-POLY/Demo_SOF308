<script setup>
import { ref } from 'vue'

// let count = 0
let count2 = ref(0)
const increaseNumber = () => {
  // count++
  count2.value++
  // console.log(count)
  // Count k update thay doi
}
const shoppingItem = ref([
  { name: 'sp1', price: 1000 },
  { name: 'sp2', price: 10001 },
  { name: 'sp3', price: 10002 },
  { name: 'sp4', price: 10003 },
])
const user = ref({
  firstName: 'Hoang',
  lastName: 'Hoang',
  age: 25,
  address: 'HN',
  email: 'hoang@gmail.com',
  phone: '0909090909',
  isActive: true,
})
const users = ref([
  {
    firstName: 'Hoang',
    lastName: 'Hoang',
    age: 25,
    address: 'HN',
    email: 'hoang@gmail.com',
    phone: '0909090909',
    isActive: true,
  },
  {
    firstName: 'Hoang1',
    lastName: 'Hoang1',
    age: 25,
    address: 'HN1',
    email: 'f@gmail.com',
    phone: 'fd',
    isActive: false,
  },
])
</script>

<template>
  <!-- Reactivity (phản ứng) :
    view sẽ tự động theo dõi phản ứng của js và cập nhật
    dom 1 cách hiệu quả -->
  <!-- Khi lap trinh vs view thi lam viec vs reativity.
   1. Su dung ref.
   Trong compositation APi duoc khuyen khich
   su dung ref de khai bao state trong vue -->
  <!-- <h1>{{ count }}</h1> -->
  <!-- Ref khai bao state trong vue.
   Lay gia tri thong qua thuoc tinh .value -->
  <!-- Tai sao phai dung ref:
     1. Khi dùng ref trong template (chính là phần render ra).
     Sau đó nếu có sự thay đổi của ref
     thì view sẽ giúp các bạn tự động phát hiện thay đổi đó
     và nó sẽ cập nhât lai dom tương ứng.
     2. Không dùng ref mà dùng tạo biến thuần chỉ khởi tạo count = 0
     => Không có cách nào để phát hiện ra giá trị thay đổi mà cập nhật
     dom ngoài cách query và inner trực tiếp lại vào giao diện.
     3. Cách vue làm là:
        1. Khi 1 component đầu tiên được hiển thị thì vue sẽ theo dõi mỗi ref
        được sd trong quá trình hiển thị.
        Khi ref bị biến đổi thì vue sẽ theo dõi
        là cập nhật lại dom nếu ref thay đổi
      -->
  <h1>{{ count2 }}</h1>
  <button @click="increaseNumber()">Click here</button>
  <!-- Deep Reactivity trong vue:
   1. Ngoài ref là kiểu dữ liệu nguyên thuỷ trong vue ()
   thì chúng ta có thể theo dõi mảng, object...
   // C1: ref (lấy ví dụ về thay đổi mảng, object)
   // C2: reactive
    -->
  <!-- Vong lap -->
  <!-- V-for: Danh sach trong Vue: Cho phep lap 1 danh sach:
  Lap qua mang
  Lap qua doi tuong
  Su dungj vs template de k tao ra the thua
  Truy cap vao chi so index
  Su dung key -->
  <!-- Tai sao phai dung key:
     - Key: v-for: Giup cho view xac dinh nut trong dom la nut duy nhat.
      De co the theo doi su thay doi cua phan tu cua ds do khi du lieu thay doi
     => Toi uu hoa qua trinh cap nhat dom
     => Dung view co the tai su dung va sap xep 1 cach hieu qua thay vi tao ra
     hoac xoa cac phan tu k can thiet
     => Quan ly hieu suat :
      Khi ma ds thay doi
      => view co gang hieu qua nhat co the de cap nhat cac phan tu.
      Neu k co key view se su dung cac thuat toan tuong doi
     de cap nhat ds => dan toi tai su dung k chinh xac => co the gay ra loi
     => Tai su dung va cap nhat can thiet thay vi render lai toan bo ds
     Mot so luu y: Key nen la gia tri duy nhat ( thuong la do BE tra ra )
      => Khong nen dung chi so cua mang vi ds thay doi
      => phan anh phan tu k chinh xac
     => Hieu suat kem => KHONG THAY DOI KY
     ( KHONG NEN PHU THUOC VAO DU LIEU THAY DOI)
       => KEY THAY DOI
       => VIEW SE PHA HOAI CAC PHAN TU THAY VI RENDER CAP NHAT LAI -->
  <div>
    <h1>Danh sach san pham - V-for</h1>
    <ul>
      <!-- Nen co key se co 1 bai noi ve tai sao can co key trong nay -->
      <li v-for="item in shoppingItem" :key="item.name">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <h1>Hien thi day so</h1>
    <span v-for="n in 10" :key="n">{{ n }}</span>
  </div>
  <div>
    <h1>Thong tin sv - v-for (object)</h1>
    <ul>
      <!-- key: key cua object
         value: gia tri cua key do
         -->
      <li v-for="(value, key, index) in user" :key="key">{{ key }}:{{ value }}:{{ index }}</li>
    </ul>
  </div>
  <div>
    <h1>Thong tin cac sv - v-for (mang object)</h1>
    <ul>
      <!-- template => k sinh ra element -->
      <template v-for="(user, index) in users" :key="user.name">
        <li v-if="user.isActive" :key="user.name">
          {{ user.firstName }} - {{ user.isActive ? 'Active' : 'Inactive' }} -
          {{ index }}
        </li>
      </template>
    </ul>
  </div>
</template>
