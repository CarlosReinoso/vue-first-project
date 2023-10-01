<script>
import { ref } from "vue";

export default {
  setup() {
    const inputValue = ref("");
    const itemList = ref([]);
    console.log("🚀 ~ file: TodoInput.vue:9 ~ setup ~ itemList:", itemList);

    const addItem = () => {
      if (inputValue.value.trim() == "") return;
      itemList.value.push(inputValue.value);
      inputValue.value = "";
    };

    const deleteItem = (index) => {
      console.log("🚀 ~ file: TodoInput.vue:17 ~ deleteItem ~ index:", index);
      itemList.value.splice(index, 1);
    };

    return {
      inputValue,
      itemList,
      addItem,
      deleteItem,
    };
  },
};
</script>

<template>
  <h1>Todo</h1>
  <input
    v-model="inputValue"
    @keyup.enter="addItem"
    placeholder="Type and press enter"
    class="custom-input"
  />
  <ul>
    <li v-for="(item, index) in itemList" :key="index">
      {{ item }}
      <button @click="deleteItem(index)">Delete</button>
    </li>
  </ul>
</template>

<style>
.custom-input {
  border: 3px solid #42b883;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
}
</style>
