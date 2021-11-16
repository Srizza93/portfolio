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
.home {
  padding: 0 130px 130px 130px;
}
.content-container_page-home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 300px;
  height: 400px;
}
.presentation_hello {
  position: absolute;
  top: 130px;
  left: calc(50% - 37.27px);
}
.presentation_name {
  position: absolute;
  top: -60px;
  left: calc(50% - 112.8px);
  font-size: 35px;
  font-weight: 600;
  animation-name: presentation-name;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  -webkit-animation-fill-mode: forwards;
}
.presentation_job {
  position: absolute;
  top: 150px;
  left: calc(50% - 110.48px);
  font-size: 25px;
  animation-name: presentation-job;
  animation-duration: 0.5s;
  animation-delay: 1.6s;
  animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
}
.bars-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 375px;
  margin: 130px 20px;
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
    top: -60px;
  }
  10% {
    color: #0e76a8;
    transform: rotate(-5deg);
  }
  90% {
    color: #0e76a8;
    transform: rotate(10deg);
  }
  100% {
    color: #0e76a8;
    top: 150px;
  }
}
@keyframes presentation-job {
  from {
    top: 150px;
  }
  to {
    top: 200px;
  }
}

@media screen and (max-width: 750px) {
  .home {
    padding: 0 0 130px 0;
  }
  .content-container_page-home {
    flex-direction: column;
    align-items: center;
  }
  .presentation {
    height: 300px;
  }

  .bars-container {
    margin: 20px;
  }
}
@media screen and (max-width: 300px) {
  .presentation {
    width: 280px;
  }
}
</style>
