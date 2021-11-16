<template>
  <div class="content-container_page home">
    <div class="content-container_page-home">
      <div class="presentation">
        <span class="presentation_hello">Hello, I'm...</span>
        <span class="presentation_name">Simone Rizza</span>
        <span class="presentation_job">Frontend Developer</span>
      </div>
      <div class="bars-container">
        <div class="bars-container-bar blue-bar"></div>
        <div class="bars-container-bar white-bar"></div>
        <div class="bars-container-bar blue-bar"></div>
        <div class="bars-container-bar white-bar"></div>
        <div class="bars-container-bar blue-bar"></div>
        <div class="bars-container-bar white-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.content-container_page-home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 140px);
}
.presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.presentation_hello {
  position: absolute;
  top: 230px;
  margin-left: 5px;
}
.presentation_name {
  position: absolute;
  top: 67px;
  font-size: 35px;
  font-weight: 600;
  animation-name: presentation-name;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
  -webkit-animation-fill-mode: forwards;
}
.presentation_job {
  position: absolute;
  top: 250px;
  font-size: 25px;
  animation-name: presentation-job;
  animation-duration: 0.2s;
  animation-delay: 1.3s;
  animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
}
.bars-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 20px;
}
.bars-container-bar {
  position: relative;
  width: 20px;
  height: 215px;
  margin: 5px;
  border: 1px solid #0e76a8;
  border-radius: 2px;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
.blue-bar {
  background-color: #0e76a8;
  animation-name: blue-bar-animation;
}
.white-bar {
  animation-name: white-bar-animation;
}
.selected-content {
  display: flex;
}
@keyframes blue-bar-animation {
  0% {
    background-color: #0e76a8;
    top: 0;
  }
  50% {
    background-color: white;
    top: 150px;
  }
  100% {
    background-color: #0e76a8;
    top: 0;
  }
}
@keyframes white-bar-animation {
  0% {
    background-color: white;
    top: 150px;
  }
  50% {
    background-color: #0e76a8;
    top: 0;
  }
  100% {
    background-color: white;
    top: 150px;
  }
}
@keyframes presentation-name {
  0% {
    color: white;
    top: 67px;
  }
  10% {
    color: #0e76a8;
    transform: rotate(-5deg);
  }

  100% {
    color: #0e76a8;
    top: 250px;
  }
}
@keyframes presentation-job {
  from {
    top: 250px;
  }
  to {
    top: 300px;
  }
}

@media screen and (max-width: 750px) {
  .home {
    min-height: 700px;
  }
  .content-container_page-home {
    flex-direction: column;
    align-items: center;
  }

  .bars-container {
    margin: 100px 20px 0 20px;
  }
}
</style>
