<template>
  <div class="container">
    
    <div class="slide slide_vh-centered">
      <div class="window-small window-img-wrapper_medium">
        <div class="slide-1">
          <h1>Интро HTML</h1>
          <h1>Интро CSS</h1>
        </div>
        <img src="/teaching/2/illustration_1.png" alt="">
      </div>
      <div class="window-img-wrapper pop-out img-attr img-big"><img src="/teaching/2/text.gif" alt=""></div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small heading">
        вспоминаем, что делали на прошлом занятии
      </div>
      <div class="window-small">история</div>
      <div class="window-small">структура страницы</div>
      <div class="window-small">🧐 как работает интернет?</div>
      <div class="window-small">Visual Studio Code</div>
      <div class="window-small">Chrome Developer Tools</div>
      <div class="window-small pop-out window-img-wrapper_medium img-2">
        <img src="/teaching/2/marginalia-unsubscribed.png" alt="">
      </div>
    </div>
    <!-- тег/атрибут -->
    <div class="slide slide_vh-centered">
          <div class="window-small heading">Тег</div>
          <div class="window-img-wrapper window-small pop-out img-tag img-big"><img src="/teaching/2/tag.png" alt=""></div>

          <div class="window-small">Тег. Атрибуты</div>
          <div class="window-img-wrapper pop-out window-small img-attr img-big"><img src="/teaching/2/attribute.png" alt=""></div>
          <div class="window-small">Теги с обязательными атрибутами: <em>img, a</em></div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-img-wrapper pop-out window-small img-medium img-3"><img src="/teaching/2/illustration_2.png" alt=""></div>
      <div class="window-small code-block">
        <div v-for="i in tagsBlock" :key=i.name>
          <b>&lt;{{i.name}}&gt;</b> - <em>{{i.description}}</em>
        </div>
      </div>
      <div class="window-small code-block">
        <div v-for="i in tagsInline" :key=i.name>
          <b>&lt;{{i.name}}&gt;</b> - <em>{{i.description}}</em>
        </div>
      </div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small img-medium pop-out img-podcasts">
        <img src="/teaching/2/marginalia-no-comments.png" alt="">
      </div>
      <div class="window-small">подкасты</div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium img-4">
        <img src="/teaching/2/marginalia-message-sent.png" alt="">
      </div>
      <div class="window-small">верстаем структуру сайта c 3мя треками</div>
      <div class="window-small">заголовок + описание + трек</div>
      <div class="window-small code-block">
        новый тег <b><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio">&lt;audio&gt;</a></b>
      </div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium">
        <img src="/teaching/2/marginalia-coming-soon.png" alt="">
      </div>
      <div class="window-small heading">CSS</div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium img-css-props">
        <img src="/teaching/2/css_props.png" alt="">
      </div>
      <div class="window-small pop-out window-img-wrapper img-medium img-css-selector">
        <img src="/teaching/2/css_selector.png" alt="">
      </div>
      <div class="window-small heading">селекторы</div>
      <div class="window-small">синтаксис</div>
      <div class="window-small">стилизуем c помощью HTML селекторов</div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium img-5">
        <img src="/teaching/2/marginalia-list-is-empty.png" alt="">
      </div>
      <div class="window-small heading">классы </div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium">
        <img src="/teaching/2/marginalia-productive-work.png" alt="">
      </div>
      <div class="window-small">подключаем шрифты</div>
      <div class="window-small"> <a href="https://fonts.google.com">Google Fonts</a></div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium img-containers">
        <img src="/teaching/2/marginalia-shipping.png" alt="">
      </div>
      <div class="window-small">контейнеры</div>
    </div>

    <div class="slide slide_vh-centered">
      <div class="window-small pop-out img-medium">
        <img src="/teaching/2/marginalia-sign-in.png" alt="">
      </div>
      <div class="window-small">конец второго дня</div>
      <div class="pop-out img-pics-info">
        <em>иллюстрации <a href="https://icons8.com/ouch/style/marginalia">icons8</a></em>
      </div>
      <div class="pop-out img-book-info">
        <em>фрагменты книги <a href="http://www.htmlandcssbook.com/">Html &amp; Css by Jon Duckett</a></em>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagsBlock: [{name:'div',description: 'универсальный блочный тег'},{name:'p', description: 'абзац текста'}, {name:'h1...h6', description:'заголовки'}, {name: 'ul', description:'маркированный список'}, {
        name: 'li', description:'элемент списка',
        name: 'br', description:'обрыв строки'
      }],
      tagsInline: [{name:'a', description: 'ссылка'}, {name: 'img', description: 'изображение'}, {name: 'b', description: 'жирное начертание'}, {name: 'em', description: 'курсив'}]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "./assets/teaching/style";

.container {
  background: white;
  color: black;
}

.slide-1 {
left: -150px;
    top: -50px;
    font-size: 1em;
    position: absolute;
    color: white;
    /* text-transform: uppercase; */
    width: 100%;
    /* text-shadow: 12px 15px 1px black; */
    /* mix-blend-mode: unset; */
    mix-blend-mode: luminosity;
    box-shadow: -20px -20px 1px #c5c5c5;
    background: rgba(253, 0, 160, 0.41176);
    transform: rotate(-7deg);
}

.slide {
  border-color: black;
}

.img {
  &-2 {
    left: 50px;
    z-index: 0;
    transform: rotate(-5deg);
  }
  &-3 {
    top: 0;
    right: 150px;
    transform: rotate(-10deg);
  }
  &-podcasts {
    bottom: 0;
    right: 0;
    transform: rotate(10deg);
  }
  &-4 {
    left: 0;
    transform: rotate(-3deg);
  }
  &-5 {
    left: 0;
    bottom: 0;
    transform: rotate(1deg);
  }
  &-css-props {
        top: 50px;
    right: 50px;
    transform: rotate(-1deg);
  }
  &-css-selector {
        left: 150px;
    bottom: 300px;
    transform: rotate(1deg);
  }
  &-pics-info {
    bottom: 0;
    right: 0;
    font-size: .5em;
    padding: 50px;
  }
  &-book-info {
    bottom: 50px;
    right: 0;
    font-size: .5em;
    padding: 50px;
  }
  &-containers {
    top: 75px;
    right: 50px;
    transform: rotate(1deg);
  }

  &-big {
    z-index: 0;
    font-size: 0;
    img {
      max-width: 1000px;
    }
  }
  &-medium {
    font-size: 0;
    img {
      max-width: 600px;
    }
  }
  &-tag {
    top: 25px;
    left: 50px;
  }
  &-attr {
    bottom: 25px;
    left: 100px;
  }
}

.inner {
  width: 100%;
}
.inner-horizontal {
  width: 200%;
  height: 100%;
}

.code-block {
  font-size: .9em;
}
</style>
