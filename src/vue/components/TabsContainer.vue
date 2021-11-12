<template>
  <div class="tabs-container">
    <div class="tab-container" v-for="tab in tabs" :key="tab.id">
      <span class="tab-container_tab-title" :name="tab.text" @click="selectTab">
        {{ tab.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContainer",
  data() {
    return {
      tabs: [
        {
          id: 1,
          text: "Home",
        },
        {
          id: 2,
          text: "Portfolio",
        },
        {
          id: 3,
          text: "Cv",
        },
        {
          id: 4,
          text: "Contacts",
        },
      ],
    };
  },
  methods: {
    selectTab(event) {
      const selected = event.target;
      const tabs = document.querySelectorAll(".tab-container_tab-title");
      const contents = document.querySelectorAll(".content-container_page");
      tabs.forEach((tab) => tab.classList.remove("selected-tab"));
      contents.forEach((content) =>
        content.classList.remove("selected-content")
      );
      selected.classList.add("selected-tab");
    },
    openHomePage() {
      const homePage = document.querySelector("[name='Home']");
      homePage.classList.add("selected-tab");
    },
  },
  mounted() {
    this.openHomePage();
  },
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  padding: 10px 10px 0 10px;
}
.tab-container {
  display: flex;
  flex-direction: column;
  padding: 20px 5px 0 5px;
}
.tab-container_tab-title {
  width: 100px;
  padding: 5px;
  border-width: 1px 1px 0 1px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  background-color: #787878;
  font-weight: 600;
  opacity: 0.7;
  cursor: pointer;
}
.tab-container_tab-title:not(.selected-tab):hover {
  opacity: 0.6;
}
.selected-tab {
  background-color: white;
  opacity: 1;
}
</style>
