<script lang="ts">
import { ref } from "vue";
import ArrowIcon from "../icons/IconTodoArrow.vue";
import SupportIcon from "../icons/IconSupport.vue";
import WelcomeItem from "../WelcomeItem.vue";

export default {
  setup() {
    const inputValue = ref("");
    const itemList = ref([]);
    const isFocused = ref(false);

    const addItem = () => {
      if (inputValue.value.trim() == "") return;
      itemList.value.push(inputValue.value as never);
      inputValue.value = "";
    };

    const deleteItem = (index: number) => {
      itemList.value.splice(index, 1);
    };

    return {
      inputValue,
      itemList,
      addItem,
      deleteItem,
      isFocused,
    };
  },
  components: {
    WelcomeItem,
    SupportIcon,
    ArrowIcon,
  },
};
</script>

<template>
  <h1>Todo</h1>
  <input
    v-model="inputValue"
    @keyup.enter="addItem"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :class="{ focused: isFocused }"
    placeholder="Type and press enter"
    class="custom-input"
  />
  <ul>
    <li v-for="(item, index) in itemList" :key="index">
      <ArrowIcon />
      {{ item }}
      <button @click="deleteItem(index)">Delete</button>
    </li>
  </ul>
</template>

<style>
.custom-input {
  border: 3px solid #35495e;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
}

input.focused {
  border: 2px solid #42b883;
  outline: none;
}
</style>
