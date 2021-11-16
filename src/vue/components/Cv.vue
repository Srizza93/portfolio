<template>
  <div class="content-container_page cv">
    <div class="cv-download-container">
      <a
        class="cv_download"
        :href="cv.path"
        :download="cv.name"
        v-for="cv in cvs"
        :key="cv.id"
      >
        <span class="cv_download_text">Download</span>
        <img class="cv_download_flag" :src="getImgUrl(cv.img)" :alt="cv.alt" />
      </a>
    </div>
    <div class="cv_section cv_section_icons">
      <a href="https://www.linkedin.com/in/simonerizza1993">
        <img
          class="cv_section_icons_icon"
          src="https://github.com/Srizza93/cv-email-html/blob/main/linkedin.png?raw=true"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/Srizza93">
        <img
          class="cv_section_icons_icon"
          src="https://github.com/Srizza93/cv-email-html/blob/main/github.png?raw=true"
          alt="github"
        />
      </a>
    </div>
    <div class="cv_section">
      <span class="cv_title">About</span>
      <p>
        Since my childhood I've been passionate about software development and
        IT, I fell in love with these disciplines which I would like to orient
        myself professionally. My constant desire for growth, with the skills
        acquired during my experiences in multiple European countries, and my
        tenacity, make me a person today experienced and determined to achieve
        his goals.
      </p>
    </div>
    <div class="cv_section">
      <span class="cv_title">Experiences</span>
      <ul class="cv_list-container">
        <li
          class="cv_list-container_items"
          v-for="experience in experiences"
          :key="experience.id + experience.job"
        >
          <span>{{ experience.job }}</span>
          <span>{{ experience.dates }}</span>
          <span>{{ experience.company }}</span>
          <span>{{ experience.city }}</span>
        </li>
      </ul>
    </div>
    <div class="cv_section">
      <span class="cv_title">Skills</span>
      <ul class="cv_list-container">
        <li
          class="cv_list-container_items"
          v-for="skill in skills"
          :key="skill.id + skill.name"
        >
          {{ skill.name }}
        </li>
      </ul>
    </div>
    <div class="cv_section">
      <span class="cv_title">Education</span>
      <ul class="cv_list-container">
        <li class="cv_list-container_items">I.I.S.S. S.Mottura</li>
        <li class="cv_list-container_items">Bachelor's degree</li>
        <li class="cv_list-container_items">
          Technological Scientific High School
        </li>
        <li class="cv_list-container_items">2009/2012</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cv",
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: "Booking.com",
          job: "Frontend Developer - Mentorship",
          dates: "January 2021 – Present",
          city: "Lille, Hauts-de-France, France",
        },
        {
          id: 2,
          company: "Booking.com",
          job: "CS Senior Guest Specialist",
          dates: "May 2019 – Present",
          city: "Lille, Hauts-de-France, France",
        },
        {
          id: 3,
          company: "Booking.com",
          job: "CS Guest Specialist",
          dates: "March 2018 – October 2021",
          city: "Lille, Hauts-de-France, France",
        },
      ],
      skills: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
        {
          id: 3,
          name: "JavaScript",
        },
        {
          id: 4,
          name: "Vue",
        },
        {
          id: 5,
          name: "Vuex",
        },
        {
          id: 6,
          name: "Vue Test Utils",
        },
        {
          id: 7,
          name: "Webpack",
        },
        {
          id: 8,
          name: "Jest",
        },
        {
          id: 9,
          name: "Git",
        },
      ],
      cvs: [
        {
          id: 1,
          name: "cv-fr",
          alt: "french-flag",
          img: "fr-flag.png",
          path: "https://srizza93.github.io/portfolio/src/downloads/cv-fr.pdf",
        },
        {
          id: 2,
          name: "cv-eng",
          alt: "uk-flag",
          img: "uk-flag.png",
          path: "https://srizza93.github.io/portfolio/src/downloads/cv-eng.pdf",
        },
        {
          id: 3,
          name: "cv-ita",
          alt: "ita-flag",
          img: "ita-flag.png",
          path: "https://srizza93.github.io/portfolio/src/downloads/cv-ita.pdf",
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      const path = require.context("../../images", false, /\.png$/);
      return path("./" + pic);
    },
  },
};
</script>

<style scoped>
.cv {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.cv-download-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.cv_download {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background-color: #0e76a8;
  text-decoration: none;
}
.cv_download:hover {
  opacity: 0.7;
}
.cv_download_text {
  padding: 5px;
  color: white;
  font-weight: 600;
}
.cv_download_flag {
  width: 35px;
  height: auto;
  padding: 5px;
}
.cv_section {
  padding: 20px 0;
}
.cv_section_icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cv_section_icons_icon {
  display: block;
  width: 68px;
  height: 48px;
  margin: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
}
.cv_title {
  padding: 10px;
  color: #0e76a8;
  font-weight: 600;
  font-size: 21px;
}
.cv_list-container {
  padding: 0;
  list-style-type: none;
}
.cv_list-container_items {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}
.selected-content {
  display: flex;
}
</style>
