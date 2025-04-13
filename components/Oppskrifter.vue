<template>
    <div>
        <h1>Oppskrifter</h1>
        <button @click="visModal = true" class="opprett-knapp">Opprett ny oppskrift</button>
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
        <div v-if="visModal" class="modal-overlay">
            <div class="modal">
                <h2>Opprett ny oppskrift</h2>
                <form @submit.prevent="opprettOppskrift">
                    <label for="navn">Navn:</label>
                    <input type="text" id="navn" v-model="nyOppskrift.navn" required />

                    <label for="bilde">Bilde URL:</label>
                    <input type="text" id="bilde" v-model="nyOppskrift.bilde" />

                    <h3>Ingredienser</h3>
                    <div v-for="(ingrediens, index) in nyOppskrift.ingredienser" :key="index" class="ingrediens-rad">
                        <select v-model="ingrediens.vare" required>
                            <option disabled value="">Velg vare</option>
                            <option v-for="vare in varer" :key="vare.id" :value="vare.navn">
                                {{ vare.navn }}
                            </option>
                        </select>
                        <select v-model="ingrediens.enhet" required>
                            <option disabled value="">Velg enhet</option>
                            <option value="gram">Gram</option>
                            <option value="antall">Antall</option>
                            <option value="kg">Kilogram</option>
                            <option value="dl">Desiliter</option>
                            <option value="liter">Liter</option>
                        </select>
                        <input v-model.number="ingrediens.mengde" type="number" placeholder="Mengde" required/>
                        <button type="button" @click="fjernIngrediens(index)">Fjern</button>
                    </div>
                    <button type="button" class="btn"@click="leggTilIngrediens">Legg til ingrediens</button>

                    <label for="beskrivelse">Beskrivelse:</label>
                    <textarea id="beskrivelse" v-model="nyOppskrift.beskrivelse" required></textarea>

                    <div class="modal-knapper">
                        <button type="submit" class="lagre-knapp">Lagre</button>
                        <button type="button" @click="visModal = false" class="avbryt-knapp">Avbryt</button>
                    </div>
                </form>
            </div>
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
        ingredienser: [
            { vare: 'Pasta', enhet: 'gram', mengde: 200 },
            { vare: 'Egg', enhet: 'antall', mengde: 2 }
        ],
        beskrivelse: 'Kok pastaen. Bland egg og parmesan. Stek bacon. Bland alt sammen.'
    }
]);

const varer = ref([
    { id: 1, navn: 'Pasta' },
    { id: 2, navn: 'Egg' },
    { id: 3, navn: 'Parmesan' },
    { id: 4, navn: 'Bacon' }
]);


const visModal = ref(false);

const nyOppskrift = ref({
    navn: '',
    bilde: '',
    ingredienser: [],
    beskrivelse: ''
});

    // FUNKSJONER //
    function leggTilIngrediens() {
    nyOppskrift.value.ingredienser.push({ vare: '', enhet: '', mengde: null });
}

function fjernIngrediens(index) {
    nyOppskrift.value.ingredienser.splice(index, 1);
}

function leggTilOppskrift() {
    oppskrifter.value.push({
        id: oppskrifter.value.length + 1,
        navn: nyOppskrift.value.navn,
        bilde: nyOppskrift.value.bilde || 'https://via.placeholder.com/100',
        ingredienser: nyOppskrift.value.ingredienser,
        beskrivelse: nyOppskrift.value.beskrivelse
    });
    nyOppskrift.value = { navn: '', bilde: '', ingredienser: [], beskrivelse: '' };
    visModal.value = false;
}
</script>

<style scoped>
.oppskrifter-liste {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.opprett-knapp {
    margin: 20px 0;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.opprett-knapp:hover {
    background-color: #0056b3;
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.ingrediens-rad {
    display: flex;
    gap: 10px;
    align-items: center;
}
.ingrediens-rad select,
.ingrediens-rad input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.modal input,
.modal textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.modal-knapper {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.lagre-knapp,
.avbryt-knapp {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.lagre-knapp {
    background-color: rgb(85, 120, 131);
    color: white;
}

.lagre-knapp:hover {
    background-color: rgb(65, 100, 111);
}

.avbryt-knapp {
    background-color: rgb(200, 200, 200);
    color: black;
}

.avbryt-knapp:hover {
    background-color: rgb(170, 170, 170);
}

</style>