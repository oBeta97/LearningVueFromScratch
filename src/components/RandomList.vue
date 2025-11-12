<template>
<ul>
    <li v-for="filmPhrase in randomFilmPhrases">
        <!-- In questo default slot vengono passati diversi attributi.
         Questi attributi vengono forniti all'utilizzatore di questo slot all'interno
         di un oggetto così da poter inserire questi dati in eventuali template personalizzati -->
        <slot :listItem="filmPhrase" standardPhrase="frase di un film"> </slot>
    </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
        randomFilmPhrases: [
            'May the Force be with you.',
            'I\'ll be back.',
            'Here\'s looking at you, kid.',
            'You can\'t handle the truth!',
            'I am your father.',
            'To infinity and beyond!',
            'Houston, we have a problem.',
            'Why so serious?',
            'I see dead people.',
            'Just keep swimming.'
        ]
    };
  }
};

</script>