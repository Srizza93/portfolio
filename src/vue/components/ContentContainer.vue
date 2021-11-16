<template>
  <div class="content-container">
    <home />
    <portfolio />
    <cv />
    <contacts />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Portfolio from "./Portfolio.vue";
import Cv from "./Cv.vue";
import Contacts from "./Contacts.vue";

export default {
  name: "ContentContaienr",
  components: { Home, Portfolio, Cv, Contacts },
};
</script>

<style>
.content-container_page {
  display: none;
  padding: 130px;
  background-color: white;
}
@media screen and (max-width: 600px) {
  .content-container_page {
    padding: 100px 20px;
  }
}
</style>
