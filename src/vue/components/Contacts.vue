<template>
  <div class="content-container_page contacts">
    <span class="contacts_title">Phone:</span>
    <a class="contacts_link" href="tel:+33772233271">+33772233271</a>
    <span class="contacts_title">Email:</span>
    <a class="contacts_link" href="mailto:simonerizzanl@gmail.com"
      >simonerizzanl@gmail.com</a
    >
    <span class="contacts_title">Linkedin:</span>
    <a class="contacts_link" href="https://www.linkedin.com/in/simonerizza1993">
      <img
        class="cv_section_icons_icon"
        src="https://github.com/Srizza93/cv-email-html/blob/main/linkedin.png?raw=true"
        alt="linkedin"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style scoped>
.contacts {
  flex-direction: column;
  align-items: center;
}
.contacts_title {
  color: #0e76a8;
  font-weight: 600;
  padding: 10px;
  font-size: 21px;
}
.contacts_link {
  color: black;
  text-decoration: none;
  font-size: 18px;
}
.cv_section_icons_icon {
  display: block;
  width: 68px;
  height: 48px;
  margin: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
}
.selected-content {
  display: flex;
}
</style>
