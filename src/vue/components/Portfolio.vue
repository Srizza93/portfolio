<template>
  <div class="content-container_page portfolio">
    <div class="portfolio-container">
      <a
        class="portfolio-container_project-container"
        v-for="project in projects"
        :key="project.id"
        :href="project.link"
      >
        <div class="portfolio-container_project-container_inner">
          <div class="portfolio-container_project-container_inner_front">
            <span class="portfolio-container_project-container_project-name">{{
              project.name
            }}</span>
            <img
              class="portfolio-container_project-container_project-img"
              :src="getImgUrl(project.image)"
            />
          </div>
          <div class="portfolio-container_project-container_inner_back">
            <div
              class="portfolio-container_project-container_inner_back-container"
            >
              <h4
                class="portfolio-container_project-container_inner_back_title"
              >
                Description
              </h4>
              <span
                class="
                  portfolio-container_project-container_inner_back_description
                "
                >{{ project.description }}</span
              >
            </div>
            <div
              class="portfolio-container_project-container_inner_back-container"
            >
              <h4
                class="portfolio-container_project-container_inner_back_title"
              >
                Tools
              </h4>
              <ul
                class="portfolio-container_project-container_inner_back_tools"
              >
                <li
                  class="
                    portfolio-container_project-container_inner_back_tools_tool
                  "
                  v-for="(tool, index) in project.tools"
                  :key="index + '/' + tool"
                >
                  {{ tool }}
                </li>
              </ul>
            </div>
            <a
              class="
                portfolio-container_project-container_inner_back_project-link
              "
              :href="project.link"
              >Go to website</a
            >
          </div>
        </div>
      </a>
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
          name: "Social Network",
          image: "social.png",
          link: "https://srizza93.github.io/social/deploy/index.html",
          description:
            "Social Network - Purely Frontend - Responsive - Mocked functions",
          tools: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
        },
        {
          id: 2,
          name: "Movie Streaming",
          image: "streaming.png",
          link: "https://srizza93.github.io/streaming/deploy/index.html",
          description: "Movie Streaming website - Purely Frontend - Responsive",
          tools: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
        },
        {
          id: 3,
          name: "E-commerce",
          image: "e-commerce.png",
          link: "https://srizza93.github.io/e-commerce/deploy/index.html",
          description: "E-commerce website - Purely Frontend - Responsive",
          tools: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
        },
        {
          id: 4,
          name: "Tooltip plugin",
          image: "tooltip.png",
          link: "https://srizza93.github.io/tooltip/",
          description:
            "A tool tip plugin with specific conditions and optional tasks - Responsive",
          tools: ["HTML", "CSS", "JS"],
        },
        {
          id: 5,
          name: "Square task",
          image: "square-task.png",
          link: "https://srizza93.github.io/square_task/",
          description: "Square following mouse",
          tools: ["HTML", "CSS", "JS"],
        },
        {
          id: 6,
          name: "HTML Email layout",
          image: "email-layout.png",
          link: "https://srizza93.github.io/cv-email-html/",
          description: "Personal CV in HTML-email format - Responsive",
          tools: ["HTML"],
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const path = require.context("../../images/", false, /\.png$/);
      return path("./" + pic);
    },
  },
};
</script>

<style scoped>
.portfolio-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.portfolio-container_project-container {
  background-color: transparent;
  width: 302px;
  height: 350px;
  margin: 10px;
  border: 1px solid #d3d3d3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  perspective: 1000px;
}
.portfolio-container_project-container_inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.portfolio-container_project-container_inner_front,
.portfolio-container_project-container_inner_back {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.portfolio-container_project-container:hover
  .portfolio-container_project-container_inner {
  transform: rotateY(180deg);
}
.portfolio-container_project-container_inner_front {
  background-color: white;
  color: black;
}

/* Style the back side */
.portfolio-container_project-container_inner_back {
  padding: 20px;
  background-color: #0e76a8;
  color: white;
  transform: rotateY(180deg);
}
.portfolio-container_project-container_inner_back_title {
  margin: 0 0 5px 0;
}
.portfolio-container_project-container_inner_back_tools {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.portfolio-container_project-container_project-name {
  color: #0e76a8;
  font-weight: 600;
  padding: 10px;
  font-size: 21px;
}
.portfolio-container_project-container_project-img {
  width: 300px;
  height: 300px;
}
.portfolio-container_project-container_inner_back_project-link {
  padding: 10px 0;
  color: #0e76a8;
  text-decoration: none;
}
.portfolio-container_project-container_inner_back_project-link:hover {
  text-decoration: underline;
}
.selected-content {
  display: flex;
}
</style>
