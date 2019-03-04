<template>
    <div class="container">
        <h1 id="t-position">Анимация</h1>
        <h2>Transition</h2>
        <p>Первое, что можно сделать — это задать автомическую анимацию при изменении любого из свойств.</p>
        <p>Например при :hover</p>
        <p><pre><code>.css 
            {
                hover: hi
            }
        </code></pre></p>
        <p>Примеры каждого из свойств и сокращенная форма</p>
        <h2>Keyframes</h2>
        <p>from to - примеры кода</p>
        <h3>Задание</h3>
        <p>Анимируем абсолютно спозиционированные круги</p>
        <p><i>Допольнительно:</i>Добавляем mix-blend-mode</p>
        <h3>Адванс</h3>
        <p>Анимируем аутлайн текст как на кодпене</p>
    </div>
</template>

<script>
import Pen from '@/components/windows/old_mac_window.vue';

export default {
  components: {Pen}
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'druk';
    src: url('/fonts/druk_super_italic.woff') format('woff');
}
.container {
    padding: 0;
    font-size: 2em;
}
p {
    font-size: .5em;
}
h1, h2, h3 {
    font-family: 'druk';
    color: #E64A69;
    margin-left: -1em;
}
h2 {
    margin-bottom: .5em;
    margin-top: .1em;
}
</style>
