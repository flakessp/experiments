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
        <p></p>
      </section>
    </div>
    <div class="slide slide-2" :class="{isSelected: selected == 2}" @click="setSelected(2)">
      <div class="caption">в предыдущей серии</div>
      <section>
        <h1>На предыдущем занятии</h1>

        <h2>Тег,  Атрибут</h2>
        <p>как выглядит тег, а как атрибут <br>какие бывают атрибуты (стили, классы, ссылки и тд)</p>

        <h2>Основные html элементы</h2>
        <p>
          <ul>
            <li>div</li>
            <li>h1</li>
            <li>p</li>
            <li>br</li>
            <li>span</li>
            <li>a</li>
            <li>img</li>
            <li>em</li>
            <li>b</li>
          </ul>
        </p>
        
        <h2>CSS</h2>

        <h2>Варианты записи CSS</h2>

        <h2>Основные свойства</h2>
        <!--  color, background-->

        <h2>Шрифты</h2>
        <p>подключение, css свойства, ссылка на google fonts</p>
        <p>
          <ul>
            <li>@font-face</li>
              <li>font-family</li>
            <li>font-size</li>
            <li>font-weight</li>
            <li>line-height</li>
            <li>text-transform</li>
          </ul>
        </p>

      </section>
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      <div class="caption">Box-model</div>
      <section>
        <h1>Box-model</h1>
        <p>блочная модель расчитывает положение элемента на странице из следующиех свойств:</p>
        <h2>width, height</h2>
        <p>высота и ширина, для линейных элементов не работает</p>
        <h2>padding</h2>
        <p>внутренний отступ</p>
        <h2>margin</h2>
        <p>margin: auto, выравниванием по центру устаноавливая равные отступы слева и справа</p>
        <!-- про выровнять по центру -->
        <h2>border</h2>
        <h2>сокращенная форма записи для всего выше</h2>
        <p>
          в одну строчку и значения по часовой стрелке margin: 10px 10px 10px 10px <br>
          тоже самое, что и margin: 10px <br>
          а margin: 10px 20px тоже самое, что и margin: 10px 20px 10px 20px (пары слева и справа)
        </p>

        <h2>линейные и блочные</h2>
        <p>коротко говоря, линейным ширину и высоту задать нельзы, отступ сверху и снизу тоже (высота линии, привет!) это текст</p>

        <h2>полезные ссылки</h2>
        <p>learnlayout</p>
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
         <h2>%</h2>
         <h2>Em, Rem</h2>
         <h2>Vh, Vw</h2>

         <h2>#000</h2>
         <h2>black</h2>
         <h2>rgb(0,0,0)</h2>
         <h2>rgba(0,0,0,0)</h2>
      </section>
    </div>
    <div class="slide slide-6" :class="{isSelected: selected == 6}" @click="setSelected(6)">
      <div class="caption">::псевдо-селекторы</div>
      <section>
        <h1>::псевдо-селекторы</h1>
        <p>классная история</p>
        <h2>hover</h2>
        <h2>selection</h2>

        <p>ссылки на почитать</p>
      </section>
    </div>
    <div class="slide slide-7" :class="{isSelected: selected == 7}" @click="setSelected(7)">
      <div class="caption">Transitions</div>
      <section>
        <h1>Transitions</h1>
        <p>all .3s ease-in-out</p>
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

.outer {
  width: 100vw;
}
.container {
  height: 100vh;
  background: black;
  font-size: 100px;
  color: white;

  display: flex;
  justify-content: center;
  // align-items: center;
}

section {
  width: 800px;
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
  .caption {
    position: absolute;
    writing-mode: tb;
    left: 1em;
    font-size: 0.6em;
    // font-style: italic;
    text-transform: uppercase;
    font-weight: 800;
    color: white;
    transition: all .5s;
    cursor: pointer;
  }

  h1 {
    font-size: 2.5em;
    margin-bottom: .4em;
    line-height: 1;
    font-family: 'pt mono';
  }
  h2 {
    font-size: 1.5em;
    margin-bottom: .3em;
    font-family: 'pt mono';
    letter-spacing: 1px;
  }
  
  p {
    font-family: 'aeroport';
    font-size: .8em;
    line-height: 1;
    margin-bottom: 1em;
  }
  .code-block {
    font-family: monospace;
    padding: .25em 0;
    padding-left: .5em;
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient( darksalmon,darkblue);
    &-centered {
      margin: 0 auto;
    }
    // box-shadow: 0px 0px 20px darkblue;
  }
}

.slide-2 {
  section {
  }
  
  
}

</style>
