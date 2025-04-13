<template>
    <div>
        <h1>Oppskrifter</h1>
        <div class="oppskrifter-liste">
            <OppskriftKort
                v-for="oppskrift in oppskrifter"
                :key="oppskrift.id"
                :navn="oppskrift.navn"
                :bilde="oppskrift.bilde"
                :ingredienser="oppskrift.ingredienser"
                :beskrivelse="oppskrift.beskrivelse"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import OppskriftKort from '~/components/OppskriftKort.vue';

const oppskrifter = ref([
    {
        id: 1,
        navn: 'Pasta Carbonara',
        bilde: 'https://via.placeholder.com/100',
        ingredienser: ['Pasta', 'Egg', 'Parmesan', 'Bacon'],
        beskrivelse: 'Kok pastaen. Bland egg og parmesan. Stek bacon. Bland alt sammen.'
    },
    {
        id: 2,
        navn: 'Kylling Tikka Masala',
        bilde: 'https://via.placeholder.com/100',
        ingredienser: ['Kylling', 'Yoghurt', 'Krydder', 'Tomatsaus'],
        beskrivelse: 'Mariner kyllingen. Stek den. Lag sausen. Bland alt sammen.'
    },
    {
        id: 3,
        navn: 'Vegetar Lasagne',
        bilde: 'https://via.placeholder.com/100',
        ingredienser: ['Lasagneplater', 'Tomatsaus', 'Grønnsaker', 'Ost'],
        beskrivelse: 'Legg lagvis lasagneplater, tomatsaus, grønnsaker og ost. Stek i ovnen.'
    }
]);
</script>

<style scoped>
.oppskrifter-liste {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>