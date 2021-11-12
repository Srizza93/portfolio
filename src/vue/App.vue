<template>
  <div class="sub-root">
    <tabs-container />
    <content-container />
  </div>
</template>

<script>
import TabsContainer from "./components/TabsContainer.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
  name: "App",
  components: { TabsContainer, ContentContainer },
};
</script>

<style scoped>
.sub-root {
  display: flex;
  flex-direction: column;
  background-color: #0e76a8;
}
</style>
