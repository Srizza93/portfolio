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
      const selectedTab = event.target;
      const selectedContent = document.querySelector(
        `.${selectedTab.innerHTML.toLowerCase()}`
      );
      const tabs = document.querySelectorAll(".tab-container_tab-title");
      const contents = document.querySelectorAll(".content-container_page");
      tabs.forEach((tab) => tab.classList.remove("selected-tab"));
      contents.forEach((content) =>
        content.classList.remove("selected-content")
      );
      selectedTab.classList.add("selected-tab");
      selectedContent.classList.add("selected-content");
    },
    openHomePage() {
      const homePageTab = document.querySelector("[name='Home']");
      const homePageContent = document.querySelector(".home");
      homePageTab.classList.add("selected-tab");
      homePageContent.classList.add("selected-content");
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
  position: relative;
  width: 100%;
  height: 100px;
  padding: 10px 10px 0 10px;
}
.tabs-container::-webkit-scrollbar {
  display: none;
}
.tabs-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.tab-container {
  display: flex;
  flex-direction: column;
  padding: 20px 5px 0 5px;
}
.tab-container_tab-title {
  width: 100px;
  padding: 5px;
  margin-top: auto;
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
@media screen and (max-width: 600px) {
  .tabs-container {
    justify-content: flex-start;
    overflow-x: auto;
  }
}
</style>
