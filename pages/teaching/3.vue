<template>
<div class="outer">
  <div class="container" >
    <!-- вспоминаем что выучили -->
    <!-- - шрифты -->
    <!-- основные html элементы -->
    <!-- тег, атрибут -->
    <!-- css, свойства, варианты записи -->
    <!-- основные css свойства -->
    <!-- блочная модель -->
    <!-- линейный против блочного -->
    <!-- в ряд - inline-block -->
    <!-- отступы внешние vs внутренние -->
    <!-- контейнеры (выравнивание по центру) -->
    <!-- flex -->
    <!-- ховер, выделение, курсор -->
    <!-- транзишн -->
    <!-- GIT -->
    <!-- ДЗ?  -->
    <!-- продолжаем делать подкасты? -->

    <!-- в примерах уделять внимание шрифту -->
    <!-- красные и черные кружочки? -->
    <div class="slide slide-1" :class="{isSelected: selected == 1}" @click="setSelected(1)">
      <section>
        <h1>CSS HARD PARTS</h1>
        <h2>часть первая</h2>
        <!-- <div class="logo">hashslash</div> -->
        <div class="circle circle-centered"></div>
        <div class="logo">hashslash</div>
        <p></p>
      </section>
    </div>
    <div class="slide slide-2" :class="{isSelected: selected == 2}" @click="setSelected(2)">
      <div class="caption">все, что раньше</div>
      <section>
        <h1>На&nbsp;предыдущем занятии</h1>
        <h2>Тег,  Атрибут</h2>
        <p>Тег выглядит вот так &mdash; &lt;h1&gt;&lt;/h1&gt;. Все, что между открывающего и закрывающего тега называется контентом, а сам тег в этом случае становится родителем и контейнером для своего контента. <br>
        Атрибут &mdash; &lt;h1 class="my-style"&gt;&lt;/h1&gt;. Любая форма записи со словом, знаком "равно" и значением в кавычках после &mdash; это атрибут. С помощью атрибутов задаются классы, указываются ссылки на другие сайты и изображения. Атрибуты нужны, что бы передать дополнительную информацию в тег. 

        <h2>Основные html элементы</h2>
        <p>
          <ul>
            <li>div - универсальный блочный тег</li>
            <li>h1 - заголовок первого уровня</li>
            <li>p - абзац текста</li>
            <li>br - обрыв строки</li>
            <li>span - универсальный линейный тег</li>
            <li>a - ссылка</li>
            <li>img - картинка</li>
            <li>em - курсив</li>
            <li>b - жирное начертание</li>
          </ul>
        </p>

        <h2>CSS. Варианты записи</h2>
        <p>в атрибут, в тег, отдельным файлом</p>

        <h2>Синтаксис</h2>
        <p>h1 { font-size: 2em;}</p>

        <h2>Шрифты</h2>
        <p>подключение, css свойства, <a href="https://fonts.google.com">Гугл Шрифты</a></p>

        <ul>
          <li>@font-face - подключение локального файла со шрифтом</li>
          <li>font-family - установка шрифта</li>
          <li>font-size - размер шрифта</li>
          <li>font-weight - установка толщины начертания</li>
          <li>line-height - интерлиньяж</li>
          <li>letter-spacing - межбуквенный интервал</li>
          <li>text-transform - свойство ALLCAPS искать здесь</li>
          <li>-webkit-text-stroke - аутлайн, не забудь поставить прозрачный цвет текста (transparent)</li>
        </ul>
      </section>
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      <div class="caption">Box-model</div>
      <section>
        <h1>Box model</h1>
        <div class="pop pop-3-1">
          <img src="/teaching/3/box-model.png" alt="">
        </div>
        <p>Блочная модель расчитывает положение элемента на странице из следующиех свойств:</p>
        <h2>width, height</h2>
        <p>Но высота и ширина, для линейных элементов не работает</p>
        <h2>Как же быть с элементами в ряд?!</h2>
        <p>спойлер (display:inline-block)</p>
        <h2>padding</h2>
        <p>внутренний отступ</p>
        <h2>margin</h2>
        <p>отступ вне границ элемента</p>
        <p>margin: auto, выравниванием по центру устанавливая равные отступы слева и справа</p>
        <!-- про выровнять по центру -->
        <h2>border</h2>
        <p class="code-block"> h1 {<br>border: 1px solid black<br>}</p>
        <h2>сокращенная форма записи для всего выше</h2>

        <p>
          в одну строчку и значения по часовой стрелке margin: 10px 10px 10px 10px <br>
          тоже самое, что и margin: 10px <br>
          а margin: 10px 20px тоже самое, что и margin: 10px 20px 10px 20px (пары слева и справа)
        </p>

        <h2>линейные и блочные</h2>
        <p>ну в общем, линейным ширину и высоту задать нельзы, отступ сверху и снизу тоже (высота линии, привет!) это текст</p>
        <p><a href="http://learnlayout.com/">классный сайт про лейаут</a></p>
      </section>
    </div>
    <div class="slide slide-4" :class="{isSelected: selected == 4}" @click="setSelected(4)">
      <div class="caption">Background</div>
      <section>
        <h1>Background</h1>
        <h2>color</h2>
        <p>задает цвет фона</p>
        <h2>image</h2>
        <p>задает картинку через url()</p>
        <h2>Size</h2>
        <p>задает поведение картинки внутри элемента</p>
        <h2>gradient</h2>
        <p>позволяет сделать переход от одного блока к другому <br>почитать - https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient</p>
      </section>
    </div>
    <div class="slide slide-5" :class="{isSelected: selected == 5}" @click="setSelected(5)">
      <div class="caption">Единицы измерения</div>
      <section>
        <h1>Единицы Измерения</h1>
         <h2>px</h2>
         <p>абсолютное значение, все понятно</p>
         <h2>%</h2>
         <p>свойство, значение которого задается от значения свойства родителя</p>
         <h2>Em, Rem</h2>
         <p>свойство, значения которого берутся от свойства font-size родителя</p>
         <h2>Vh, Vw</h2>
         <p>относительно высоты(vh) и ширины (vw) окна браузера</p>
         <p>
           <a href="https://learn.javascript.ru/css-units">вот здесь больше и подробно</a>
        </p>
        
        <h2>black</h2>
        <p>раньше компьютеры поддерживали 256 цветов, вот это наследие</p>
         <h2>#000</h2>
         <p>такая форма записи называется HEX, на маке есть удобное приложение - digital colour meter</p>
         
         <h2>rgb(0,0,0)</h2>
         <p>запись цвета по трем цветам (красный, зеленый, синий)</p>
         <h2>rgba(0,0,0,0)</h2>
         <p>тоже самое плюс альфа канал</p>
         
      </section>
    </div>
    <div class="slide slide-6" :class="{isSelected: selected == 6}" @click="setSelected(6)">
      <div class="caption">::псевдо-классы</div>
      <section>
        <h1>::псевдо-классы</h1>
        <p><a href="https://developer.mozilla.org/ru/docs/Web/CSS/%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B">линк</a></p>
        <h2>hover</h2>
        <h2>selection</h2>
      </section>
    </div>
    <div class="slide slide-7" :class="{isSelected: selected == 7}" @click="setSelected(7)">
      <div class="caption">Transitions</div>
      <section>
        <h1>Transitions</h1>
        <p>transition: all .3s</p>
      </section>
    </div>
    <div class="slide slide-8" :class="{isSelected: selected == 8}" @click="setSelected(8)">
      <div class="caption">cursor</div>
      <section>
        <h1>Cursor</h1>
        <p>какие размеры и все такое и ссылка</p>
        
      </section>
    </div>
    <div class="slide slide-9" :class="{isSelected: selected == 9}" @click="setSelected(9)">
      <div class="caption">ДЗ</div>
      <section>
        <h1>Спасибо за внимание</h1>
        <h2>ДЗ</h2>
        <p>E S H</p>
        <h2>?</h2>
      </section>
    </div>                    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      current: '',
      selected: 1,
    }
  }, methods: {
    clickHandler: function(i) {
      this.setSelected(i);
    },
    setSelected: function(i) {
      this.selected = i;
    },
    onKey: function(e) {
      if (e.key == 'ArrowLeft') this.selected--
      else if(e.key == 'ArrowRight') this.selected++
    }
  }, mounted: function() {
    window.addEventListener('keydown', this.onKey)
  }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Mono|PT+Serif&subset=cyrillic');

h1, h2, p {
font-family: 'PT Mono', monospace;  
}
body {
  font-size: 10px;
}

.logo {
      mix-blend-mode: overlay;
    text-transform: uppercase;
    letter-spacing: 0;
    font-weight: bold;
    /* font-family: fantasy; */
    position: absolute;
    bottom: -200px;
    right: 50px;
    transform: scaleX(4) scaleY(6) rotate(-1deg);
}

.outer {
  overflow-x: auto;
  overflow-y: hidden;
}
.container {
  height: 100vh;
  width: 120vw;
  background: black;
  font-size: 100px;
  color: white;

  display: flex;
  justify-content: center;
}

section {
  width: 800px;
  position: relative;
  font-size: 40px;
}

.slide {
  flex-basis: 1%;
  background: black;
  border: 1px solid white;
  flex-shrink: 1;
  flex-grow: 1;
  transition: all .6s;
  overflow: auto;
  color: transparent;
  font-size: 50px;
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;
  padding: 50px;

  &.isSelected {
    flex-basis: 100%;
    color: white;
    .caption {
      transform: translateX(-200%);
    }
  }
  .pop {
    position: absolute;
    filter: grayscale(1);
    :hover {
      filter: grayscale(0)
    }
  }
  .caption {
    position: absolute;
    writing-mode: tb;
    left: 1em;
    font-size: 0.6em;
    text-transform: uppercase;
    font-weight: 800;
    color: white;
    transition: all .5s;
    cursor: pointer;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: .6em;
    line-height: 1;
  }
  h2 {
    font-size: 1.5em;
    line-height: 1;
    margin-bottom: .2em;
    letter-spacing: 1px;
  }
  
  p {
    font-size: .8em;
    line-height: 1;
    margin-bottom: 1.5em;
  }
}

.slide-1 {
  background: linear-gradient(darkblue, darksalmon);
  background-size: 200% 200%;
  background-position:0% 0%;

    color: white !important;
  &:hover {
    background-position:100% 100%;
  }
  h1 {
    font-size: 3.5em;
    line-height: 1;
  }
  .circle {
    position: absolute;
    right: 100px;
    bottom: 150px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient( darksalmon,darkblue);
    &-centered {
      margin: 0 auto;
    }
  }
}

a{ 
  color: inherit;
}

.slide-3 {
  .pop-3-1 {
    right: -80%;
  }
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    
}

</style>
