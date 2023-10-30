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
    <li v-for="(item, index) in itemList" :key="index" class="todo-item">
      <div>
        <ArrowIcon />
      </div>
      <p>{{ item }}</p>
      <button @click="deleteItem(index)">Delete</button>
    </li>
  </ul>
</template>

<style lang="scss">
@import "~/main.scss";

.custom-input {
  border: 3px solid $primary-color;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 2rem;
  max-width: 100%; // Set a maximum width
  word-wrap: break-word; // Wrap long words
  overflow: hidden; // Hide overflow text
}

input.focused {
  border: 2px solid $secondary-color;
  outline: none;
}

.todo-item {
  display: flex;
  max-width: 20rem;
  p {
    margin-left: 1rem;
  }
  button {
    margin-left: auto;
  }
}
</style>
