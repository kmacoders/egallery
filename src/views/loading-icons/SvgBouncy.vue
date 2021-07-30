<template>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 81 45" enable-background="new 0 0 81 45" xml:space="preserve">
    <circle class="circle1" fill="#1A7FC3" cx="13.5" cy="22.5" r="4.5"/>
    <circle class="circle2" fill="#1A7FC3" cx="31.5" cy="22.5" r="4.5"/>
    <circle class="circle3" fill="#1A7FC3" cx="49.5" cy="22.5" r="4.5"/>
    <circle class="circle4" fill="#1A7FC3" cx="67.5" cy="22.5" r="4.5"/>
  </svg>
</template>
<style lang="scss" scoped>
$delays: 0 125ms 250ms .375s;
@for $i from 1 through 4 {
  .circle#{$i} {
    animation: bounce linear 2.2s infinite forwards;
    animation-delay: nth($delays, $i);
  }
}

svg {
  width: 200px;
  height: 200px;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  20%, 50% {
    transform: translateY(9px);
  }
  80% {
    transform: translateY(2px)
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}
</style>
