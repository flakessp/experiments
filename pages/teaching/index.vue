<template>
  <div class="container">
    <div class="slide slide_centered">
      <div class="window-small">HASHSLASH / INTERNET 101</div>
      <div class="pop-out img-earth"><img src="/teaching/world.gif" alt=""></div>
    </div>
    
    <div class="slide slide_centered">
      <div class="window-small">ГДЕ Я Сейчас мы здесь (шкала из занятий)</div>
    </div>

    <div class="slide">
      <div class="window-small">Что мы изучим на курсе?</div>
        <div>
          <div class="window-small window-img-wrapper" v-for="i in 4" :key="i"><img :src="`/teaching/${i}.png`" alt=""></div>
        </div>
    </div>
    
    <div class="slide">
      <div class="window-small">Какие бывают языки программирования?</div>
      <div>
        <div class="window-small">Frontend</div>
        <div class="window-small">Backend</div>
      </div>
    </div>

    <div class="slide">
      <div class="window-small">Знакомство с инфраструкторой </div>
      <div class="window-small">спиcок инструментов</div>
      <div class="window-small">terminal / cmd</div>
    </div>

    <div class="slide">
      <div class="window-small">VS Code</div>
      <div class="window-small window-img-wrapper">
        <img src="/teaching/vscode.png" alt="">
      </div>
    </div>

    <div class="slide">
      <div>
        <div class="window-small">Chrome</div>
        <div class="window-small window-img-wrapper">
          <img src="/teaching/chrome.png" alt="">
        </div>
      </div>
      <div class="window-small">Chrome Developer Tools</div>
      <div class="window-small">Поиск проблем (дебаггинг) / Протипирование</div>
      <div class="window-small">
        фаст-таск: ломаем твитер https://twitter.com/kanyewest
        адванс - дефейс хз чего
      </div>
    </div>
    
    <div class="slide">
      <div class="window-small">Git</div>
      <div class="window-small">технология</div>
      <div class="window-small">зачем это нужно?</div>
      <div class="window-small">Github Desktop</div>
    </div>
  
    <div class="slide">
      <div class="window-small">История веб</div>
      <div class="window-small">фаст таск -  curl wttr.in/moscow</div>
      <div class="window-small">браузеры</div>
      <div class="window-small">тим бернерс ли</div>
      <div class="window-small">W3C</div>
    </div>
    
    <div class="slide">
      <div class="window-small">Линейные / блочные теги</div>
      <div class="window-small">тег / атрибут </div>
      <div class="window-small">устройство страницы, базовые теги</div>
      <div class="window-small">div, span, a, h1, p, img </div>
    </div>

    <div class="slide">
      <div class="window-small">Как работает интернет</div>
      <div class="window-small">сетевые запросы</div>
      <div class="window-small">почему index.html</div>
      <div class="window-small">как раотает DNS</div>

      <div class="window-small">фаст таск - проверить путь до яндекса - traceroute / tracert</div>
    </div>
    

    <div class="slide">
      <div class="window-small">Медиа файлы</div>
      <div class="window-small">картинки</div>
      <div class="window-small">аудио</div>
      <div class="window-small">видео</div>
    </div>

    <div class="slide">
      <div class="window-small">
      первый проект
      «Свидетели HTML»
      </div>
    </div>

    <div class="slide">
      <div class="window-small">
      ДЗ
      Заверстать что?
      Только теги (показать древние типа marquee) со стилями по умолчанию 
      - портфолио либо ноунейма ЛИБО: 
      - Скорпион (мк)
      - Егор Летов
      - Чихольд 
      </div>
    </div>

    <div class="slide">
      <div class="window-small">конец первого занятия! (9 впереди)</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

$font-stack:    Helvetica, sans-serif;
$base-color: #4350B6;
$secondary-color: #B2B5B6;
$third-color: #F84742;

$color-shadow: #000;
$color-bg: $secondary-color;
$color-text: $base-color;
$color-highlight: $third-color;
$color-shadow: $third-color;


.container {
  min-height: 100vh;
  background: $color-bg;
  color: $base-color;
  font-family: 'Aeroport', sans-serif;
  font-size: 50px;
}
.slide {
  min-height: 100vh;
  position: relative;

  &_centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.highlight {
  color: $color-highlight;
}

.window-small {
  display: inline-block;
  position: relative;
  z-index: 100;
  padding: .5em;
  margin: .5em;
  background: white;
  border: 1px solid black;
  box-shadow: 10px 10px 0px black;
  color: black;
}

.window-img-wrapper {
  padding: 0;
  img {
    max-width: 300px;
  }
}

.pop-out {
  position: absolute;
}

.img {
  &-earth {
    transform: scale(4);
    mix-blend-mode: saturation;
  }
}

</style>
