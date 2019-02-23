<template>
  <div class="container">
    <div class="slide slide_vh-centered">
      <div class="window-small heading  ">HASHSLASH / INTERNET 101</div>
      <div class="pop-out img-earth"><img src="/teaching/world.gif" alt=""></div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small heading">🤓 Курикулум </div>
      <div class="window-small"><a href="https://readymag.com/serejaris/snowmen-1/" target="_blank">Слайды</a></div>
        <div>
          <div class="window-small window-img-wrapper" v-for="i in 4" :key="i"><img :src="`/teaching/${i}.png`" alt=""></div>
        </div>
        
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small heading">Инструменты</div>
      <div>
        <div class="window-small">VS Code</div>
        <div class="window-small">Chrome</div>
        <div class="window-small">Git</div>
        <div class="window-small">terminal / cmd</div>
      </div>
    </div>


    <div class="slide slide_vh-centered">
      <div class="window-small">VS Code</div>
      <div class=" window-img-wrapper_medium pop-out">
        <a href="https://code.visualstudio.com/" target="_blank">
          <img src="/teaching/vscode.png" alt="">
        </a>
      </div>
    </div>



    <div class="slide slide_vh-centered">
      <div>
        <div class="window-small heading">Chrome</div>
        <div class="window-img-wrapper_medium">
          <a href="https://www.google.com/chrome/canary/" target="_blank">
            <img src="/teaching/chrome.png" alt="">
          </a>
        </div>
      </div>
      <div class="window-small">Chrome Developer Tools</div>
      <div class="window-small">Поиск проблем (дебаггинг) / Протипирование</div>
      <div class="window-small font-task">
        фаст-таск: улучшаем твитер <a href="https://twitter.com/kanyewest">Йе</a>
      </div>
    </div>
    
    <div class="slide slide_vh-centered ">
      <div class="window-small heading">Git</div>
      <div class="window-small">технология</div>
      <div class="window-small"><a href="https://github.com/">Github</a></div>
      <div class="window-small">зачем это нужно?</div>
      <div class="window-small">Github Desktop</div>
      <div class="window-img-wrapper_medium pop-out">
        <a href="https://desktop.github.com" target="_blank"><img src="/teaching/github.png" alt=""></a>
      </div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-img-wrapper_medium"><img src="/teaching/baby.gif" alt=""></div>
      <div class="window-img-wrapper_medium"><img src="/teaching/helloworld.gif" alt=""></div>
      <div class="window-img-wrapper_medium"><img src="/teaching/website.gif" alt=""></div>
    </div>

        
    <div class="slide slide_vh-centered">
      <div class="window-small heading">Языки программирования</div>
      <div>
        <div class="window-small">🚀 Frontend 🚀</div>
        <div class="window-small">🔞 Backend 🔞</div>
      </div>
    </div>
  
    <div class="slide slide_vh-centered">
      <div class="window-small heading">История веб</div>
      <!-- сделать один слайд с инфографикой про историю, истории очень много и от нее устают -->
      <div class="window-small">браузеры</div>
      <div class="window-small font-task">фаст таск -  curl wttr.in/moscow</div>
      <div class="window-small">Тим Бернерс-Ли</div>
      <div class="window-small">W3C</div>
    </div>
    
    <div class="slide slide_vh-centered">
      <div class="window-small heading">Структура</div>
      <div class="window-small">Линейные / блочные теги</div>
      <div class="window-small">тег / атрибут </div>
      <div class="window-small">устройство страницы, базовые теги</div>
      <div class="window-small">div, span, a, h1, p, img </div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small heading">Как работает интернет</div>
      <div class="window-small">сетевые запросы</div>
      <div class="window-small">index.html - это почему?</div>
      <div class="window-small">как работает DNS</div>

      <div class="window-small font-task">проверить путь до яндекса - traceroute / tracert</div>
    </div>
    
    <!-- <div class="slide">
      <div class="window-small">
      первый проект
      «Свидетели HTML»
      </div>
    </div> -->

    <div class="slide slide_vh-centered">
      <div class="window-small heading">ДЗ</div>
      <div class="window-small font-task">Страница с ссылками на 5 x (*.html -> текст + изображение)</div>
      <div class="window-small">На каждой из страниц текст и изображение. Минимум одно слово и минимум одно изображение</div>
    </div>

    <!-- дз Ж по сайту в день -->

    <div class="slide slide_vh-centered">
      <div class="window-small">конец первого занятия! (9 впереди)</div>
      <div class="pop-out img-baby">
        <img src="/teaching/wow.gif" alt="">
      </div>
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
@import "./assets/teaching/style";
</style>
