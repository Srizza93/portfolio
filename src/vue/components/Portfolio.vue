<template>
  <div class="content-container_page portfolio">
    <div class="portfolio-container">
      <div
        class="portfolio-container_project-container"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="portfolio-container_project-container_flip-container">
          Description
        </div>
        <a :href="project.link">
          <div class="portfolio-container_project-container_inner">
            <div class="portfolio-container_project-container_inner_front">
              <span
                class="portfolio-container_project-container_project-name"
                >{{ project.name }}</span
              >
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
                  class="portfolio-container_project-container_inner_back_description"
                  >{{ project.description }}</span
                >
              </div>
              <div
                class="portfolio-container_project-container_inner_back-container"
              >
                <h4
                  class="portfolio-container_project-container_inner_back_title"
                  v-if="project.functionalities"
                >
                  Functionalities
                </h4>
                <ul
                  class="portfolio-container_project-container_inner_back_tools"
                  v-if="project.functionalities"
                >
                  <li
                    class="portfolio-container_project-container_inner_back_tools_tool"
                    v-for="(functionality, index) in project.functionalities"
                    :key="index + '/' + functionality"
                  >
                    {{ functionality }}
                  </li>
                </ul>
                <h4
                  class="portfolio-container_project-container_inner_back_title"
                >
                  Tools
                </h4>
                <ul
                  class="portfolio-container_project-container_inner_back_tools"
                >
                  <li
                    class="portfolio-container_project-container_inner_back_tools_tool"
                    v-for="(tool, index) in project.tools"
                    :key="index + '/' + tool"
                  >
                    {{ tool }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a>
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
          name: "E-commerce 2",
          image: "advent.png",
          link: "https://srizza93.github.io/sales/",
          description: "E-commerce website",
          tools: ["HTML", "CSS", "JS", "Vue", "Vue-router", "Webpack"],
        },
        {
          id: 2,
          name: "Advent Challenges",
          image: "advent.png",
          link: "https://srizza93.github.io/advent-challenges/deploy/index.html#/",
          description: "Collection of 24 Coding Challenges - Responsive",
          tools: ["HTML", "CSS", "JS", "Vue", "Vue-router"],
        },
        {
          id: 3,
          name: "Social Network",
          image: "social.png",
          link: "https://srizza93.github.io/social/deploy/index.html",
          description:
            "Social Network - Purely Frontend - Responsive - Mocked functions",
          functionalities: [
            "API data rendering",
            "Navigation bar filtering",
            "Profile page access",
            "Notification system",
            "Posts and comments publication",
            "Chat system",
            "Chat storing",
          ],
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
          name: "Movie Streaming",
          image: "streaming.png",
          link: "https://srizza93.github.io/streaming/deploy/index.html",
          description: "Movie Streaming website - Purely Frontend - Responsive",
          functionalities: [
            "API data rendering",
            "Search bar filtering",
            "Notification system",
            "Sign up page",
            "Trailer watching",
            "Movie details access",
            "Movie player access",
          ],
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
          id: 5,
          name: "E-commerce",
          image: "e-commerce.png",
          link: "https://srizza93.github.io/e-commerce/deploy/index.html",
          description: "E-commerce website - Purely Frontend - Responsive",
          functionalities: [
            "Navigation bar filtering",
            "Gallery playing",
            "Cart access and functionality",
            "Products filtering and sort system",
            "Product details page",
            "Purchase process",
            "Personal info validation",
            "Credit card validation",
            "Loading page",
            "Purchase confirmation",
          ],
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
          id: 6,
          name: "Tooltip plugin",
          image: "tooltip.png",
          link: "https://srizza93.github.io/tooltip/",
          description:
            "A tool tip plugin with specific conditions and optional tasks - Responsive",
          functionalities: [
            "Custom content re-usability",
            "Unlimited size",
            "Respect viewport boundaries",
            "Activation on dynamically loaded content",
            "Possible to select the inner text",
            "Centering",
          ],
          tools: ["HTML", "CSS", "JS"],
        },
        {
          id: 7,
          name: "Square task",
          image: "square-task.png",
          link: "https://srizza93.github.io/square_task/",
          description: "Square following mouse",
          functionalities: [
            "Square catching mouse",
            "Square increase its size when it comes closer",
            "Square respects window edges",
            "Speed increase on mouse in the outer square",
            "Speed decrease on mouse out the outer square",
          ],
          tools: ["HTML", "CSS", "JS"],
        },
        {
          id: 8,
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
  margin: 40px 10px;
  border: 1px solid #d3d3d3;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  perspective: 1000px;
}
.portfolio-container_project-container_inner {
  position: relative;
  width: 100%;
  height: auto;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.portfolio-container_project-container_inner_front,
.portfolio-container_project-container_inner_back {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 350px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.portfolio-container_project-container:hover
  .portfolio-container_project-container_inner {
  transform: rotateY(180deg);
}
.portfolio-container_project-container_inner_front {
  justify-content: space-between;
  background-color: white;
  color: black;
}
.portfolio-container_project-container_inner_back {
  padding: 20px;
  background-color: #0e76a8;
  color: white;
  transform: rotateY(180deg);
  overflow-x: auto;
}
.portfolio-container_project-container_inner_back-container {
  margin-bottom: 20px;
}
.portfolio-container_project-container_inner_back_title {
  margin: 0 0 5px 0;
}
.portfolio-container_project-container_inner_back_tools {
  padding: 0;
  margin: 0 0 20px 0;
  list-style-type: none;
}
.portfolio-container_project-container_inner_back_tools_tool {
  margin: 5px 0;
}
.portfolio-container_project-container_project-name {
  color: #0e76a8;
  font-weight: 600;
  padding: 10px;
  font-size: 21px;
}
.portfolio-container_project-container_flip-container {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  border-radius: 10px 10px 0 0;
  background-color: #0e76a8;
  color: white;
  text-align: center;
  font-weight: 600;
}
.portfolio-container_project-container_project-img {
  width: 300px;
  height: 300px;
}
.selected-content {
  display: flex;
}
.flip-card {
  transform: rotate(0deg);
}

@media screen and (max-width: 450px) {
  .portfolio-container_project-container {
    height: 400px;
    border-radius: 10px 10px 0 0;
  }
  .portfolio-container_project-container_flip-container {
    display: flex;
  }
}
@media screen and (max-width: 350px) {
  .portfolio-container_project-container {
    height: 350px;
    width: 202px;
  }
  .portfolio-container_project-container_inner_front,
  .portfolio-container_project-container_inner_back {
    height: 300px;
  }
  .portfolio-container_project-container_project-img {
    width: 200px;
    height: 200px;
  }
}
</style>
