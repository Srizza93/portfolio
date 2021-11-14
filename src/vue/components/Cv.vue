<template>
  <div class="content-container_page cv">
    <div>
      <h2>About</h2>
      <p>
        Since my childhood I've been passionate about software development and
        IT, I fell in love with these disciplines which I would like to orient
        myself professionally. My constant desire for growth, with the skills
        acquired during my experiences in multiple European countries, and my
        tenacity, make me a person today experienced and determined to achieve
        his goals.
      </p>
    </div>
    <div>
      <h2>Experiences</h2>
      <ul>
        <li
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
    <div>
      <h2>Skills</h2>
      <ul>
        <li v-for="skill in skills" :key="skill.id + skill.name">
          {{ skill.name }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Education</h2>
      <span>I.I.S.S. S.Mottura</span>
      <span>Bachelor's degree</span>
      <span>Geo expert</span>
      <span>2009/2012</span>
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
          name: "Github",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cv {
  flex-direction: column;
  padding: 130px;
}
.selected-content {
  display: flex;
}
</style>
