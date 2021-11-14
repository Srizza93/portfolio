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
  width: 100%;
  height: calc(100vh - 140px);
}
.presentation {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 130px;
}
.presentation_hello {
  position: absolute;
  top: 280px;
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
  top: 320px;
  font-size: 25px;
  animation-name: presentation-job;
  animation-duration: .2s;
  animation-delay: 1.3s;
  animation-timing-function: linear;
  -webkit-animation-fill-mode: forwards;
}
.bars-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40%;
  padding: 80px;
}
.bars-container-bar {
  position: relative;
  width: 20px;
  height: 215px;
  margin: 5px;
  border-radius: 2px;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.blue-bar {
  border: none;
  background-color: #0e76a8;
  animation-name: blue-bar-animation;
}
.white-bar {
  border: 1px solid #0e76a8;
  animation-name: white-bar-animation;
}
.selected-content {
  display: flex;
}
@keyframes blue-bar-animation {
  0% {
    border: none;
    background-color: #0e76a8;
    top: 0;
  }
  50% {
    border: 1px solid #0e76a8;
    background-color: white;
    top: 200px;
  }
  100% {
    border: none;
    background-color: #0e76a8;
    top: 0;
  }
}
@keyframes white-bar-animation {
  0% {
    border: 1px solid #0e76a8;
    background-color: white;
    top: 200px;
  }
  50% {
    border: none;
    background-color: #0e76a8;
    top: 0;
  }
  100% {
    border: 1px solid #0e76a8;
    background-color: white;
    top: 200px;
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
    top: 320px;
  }
}
@keyframes presentation-job {
  from {
    top: 320px;
  }
  to {
    top: 370px;
  }
}
</style>
