<template>
<div class="outer">
  <div class="container">
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
        <div class="logo">hashslash</div>
        <div class="circle"></div>
        <p></p>
      </section>
    </div>
    <div class="slide slide-2" :class="{isSelected: selected == 2}" @click="setSelected(2)">
      <section>
        <h1>в предыдущей серии</h1>
        <h2>шрифты</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas ipsam eum molestias mollitia deserunt repudiandae dignissimos laborum unde commodi? Eaque blanditiis obcaecati iste quis exercitationem illum, aut natus eligendi.</p>

        <h2>основные html элементы</h2>
        <p class="code-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dolore pariatur dignissimos veniam nisi, alias sit dolores, repellendus repudiandae voluptas amet, sunt cumque quis nihil! Vero, vel. Libero, magnam nostrum.</p>
        
        <h2>тег,  атрибут</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quae quo temporibus odio labore asperiores, vero repudiandae iusto eveniet aliquam laudantium reprehenderit corporis placeat repellat sapiente est a perspiciatis nulla!</p>

        <h2>CSS</h2>

        <h2>Варианты записи CSS</h2>

        <h2>основные свойства</h2>

        <h2>отступы внешние vs внутренние</h2>
      </section>
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      <section>
        <h1>Box-model</h1>
        <h2>width, height</h2>
        <h2>padding</h2>
        <h2>margin</h2>
        <h2>border</h2>

        <h2>линейные и блочные</h2>
        <p>коротко говоря, линейным ширину и высоту задать нельзы, отступ сверху и снизу тоже (высота линии, привет!) это текст</p>

        <h2>полезные ссылки</h2>
        <p>learnlayout</p>
      </section>
    </div>
    <div class="slide slide-4" :class="{isSelected: selected == 4}" @click="setSelected(4)">
      4
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      3
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      3
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      3
    </div>
    <div class="slide slide-3" :class="{isSelected: selected == 3}" @click="setSelected(3)">
      3
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
    }
  }
}
</script>


<style lang="scss" scoped>

.outer {
  width: 110vw;
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
  flex-basis: 10%;
  background: black;
  border: 1px solid white;
  flex-shrink: 1;
  flex-grow: 1;
  transition: all .5s;
  overflow: auto;
  color: white;
  font-size: 50px;
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;
  padding: 50px;

  &.isSelected {
    flex-basis: 100%;
  }

  h1 {
    font-size: 2em;
    margin-bottom: .4em;
    line-height: 1;
  }
  h2 {
    font-size: .8em;
    margin-bottom: .3em;
  }
  
  p {
    font-size: .6em;
    line-height: 1;
    margin-bottom: 1em;
  }
  .code-block {
    background: gray;
    font-family: monospace;
    padding: .25em 0;
    padding-left: .5em;
  }
}

.slide-1 {
  background: linear-gradient(darkblue, darksalmon);
  background-size: 200% 200%;
  background-position:0% 0%;
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
    // box-shadow: 0px 0px 20px darkblue;
  }
}

.slide-2 {
  section {
  }
  
  
}

</style>
