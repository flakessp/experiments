<template>
  <slide>
    <div class="container">
      <h1>
        Позиционирование
      </h1>
      <pen><iframe height="400" style="width: 100%;" scrolling="no" title="🐝&amp;💣 mix-blend animation" src="//codepen.io/cobra_winfrey/embed/yvzazQ/?height=400&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"/></pen>
      <h2>ПОТОК страницы</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam asperiores quae commodi cum, assumenda beatae dolorum, reiciendis natus molestias ut praesentium, cumque molestiae autem omnis fugit esse deleniti odit!</p>
      <h2>POSITION ABSOLUTE</h2>
      <pen>
        <iframe height="453" style="width: 100%;" scrolling="no" title="CMY/CMYK Color printing with background-blend-mode" src="//codepen.io/bennettfeely/embed/qBJyj/?height=453&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"/>
      </pen>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam consequatur corrupti ut suscipit, dicta maiores consequuntur pariatur eos! Vero aliquid aliquam veniam error iusto quis ad reiciendis debitis voluptas in?</p>
      <h2>Задачка</h2>
    </div>

    <div class="container">

    <h1 id="t-position">Анимация</h1>
    <h2>Keyframes</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio totam natus quae ratione quod quam expedita modi amet id sit eveniet repellendus, in repudiandae quasi, nesciunt et magnam dignissimos.</p>
    <h2>from to</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam laboriosam sed dignissimos officiis iste. Temporibus nemo sapiente aspernatur consequatur tenetur inventore, illum quos cupiditate veritatis ipsam ipsa aliquid. Inventore?</p>
    </div>

    <div class="container">
      <h1>Вариативные шрифты</h1>
      <pen>
        <iframe height="530" style="width: 100%;" scrolling="no" title="CMY/CMYK Color printing with background-blend-mode" src="//codepen.io/nathantaylor/embed/xgazdX/?height=530&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"/>
      </pen>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quasi quibusdam pariatur minus magni unde est odio, odit officia commodi cumque reiciendis tempore, nemo perspiciatis asperiores magnam. Tempore, in? Itaque?</p>
    </div>

    <div class="container">
      <h1>Javascript</h1>
      <h2>Переменные</h2>
      <h2>jQuery</h2>
      <h2>events</h2>
    </div>
    
  </slide>  
</template>

<style lang="scss" scoped>
.container {
  margin: 2em;
  padding: 1em;
  border: 1px solid black;
}


h1, h2 {
  margin: .5em 0;
}
</style>

<script>
import Slide from '@/components/teaching/4/slide.vue';
import Pen from '@/components/windows/old_mac_window.vue';

export default {
    components: {Slide, Pen},
}
</script>