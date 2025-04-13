<template>
    <div class="vare-kort" :class="{utvider: erUtvidet}">
        <img :src="bilde" :alt="navn" class="oppskrift-bilde" />
        <div class="oppskrift-detaljer">
            <h2>{{ navn }}</h2>
            <button @click="toggleVisMer" class="vis-mer-knapp">
                {{ erUtvidet ? 'Vis mindre' : 'Vis mer' }}
            </button>
            <div v-if="erUtvidet" class="ekstra-detaljer">
                <h3>Ingredienser:</h3>
                <ul>
                    <li v-for="(ingrediens, index) in ingredienser" :key="index">
                        {{ ingrediens }}
                    </li>
                </ul>
                <h3>Beskrivelse:</h3>
                <p>{{ beskrivelse }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        navn: {
            type: String,
            required: true
        },
        bilde: {
            type: String,
            required: false,
        },
        ingredienser: {
            type: Array,
            default: () => []
        },
        beskrivelse: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            erUtvidet: false
        };
    },
    methods: {
        toggleVisMer() {
            this.erUtvidet = !this.erUtvidet;
            this.$emit('toggleVisMer');
        }
    }
};
</script>

<style scoped>
.vare-kort {
    transition: all 0.3s ease;
    overflow: hidden;
}

.vare-kort.utvidet {
    max-height: 500px; /* Øk høyden når kortet er utvidet */
}

.ekstra-detaljer {
    margin-top: 10px;
}
.oppskrift-bilde {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
}

.oppskrift-detaljer {
    flex: 1;
}

.vis-mer-knapp {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: rgb(85, 120, 131);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.vis-mer-knapp:hover {
    background-color: rgb(65, 100, 111);
}
</style>