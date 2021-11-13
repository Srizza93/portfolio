<template>
  <div class="content-container_page portfolio">
    <div class="portfolio-container">
      <div
        class="portfolio-container_project-container"
        v-for="project in projects"
        :key="project.id"
      >
        <span>{{ project.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Social",
          image: "sc",
        },
        {
          id: 2,
          name: "Streaming",
          image: "sc",
        },
        {
          id: 3,
          name: "E-commerce",
          image: "sc",
        },
        {
          id: 4,
          name: "Tooltip",
          image: "sc",
        },
        {
          id: 5,
          name: "Square task",
          image: "sc",
        },
        {
          id: 6,
          name: "Email layout",
          image: "sc",
        },
      ],
    };
  },
};
</script>

<style scoped>
.selected-content {
  display: flex;
}
</style>
