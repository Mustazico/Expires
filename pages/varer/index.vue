<template>
    <div class="varer-container">
        <div class="overskrift">
            <h1>Vareregister</h1>
            <h2>Her er en oversikt over dine varer. Du kan velge å endre antall varer av en varetype.</h2>
        </div>
        <ul class="varer-liste">
            <li v-for="vare in varer" :key="vare.id" class="vare-kort">
                <img :src="vare.bilde" alt="Bilde av vare" class="vare-bilde" />
                <div class="vare-detaljer">
                    <h2>{{ vare.navn }}</h2>
                    <p class="antall">Antall: {{ vare.antall }}</p>
                    <p class="endre-antall" @click="toggleDetaljer(vare.id)">Fjern varer</p>
                    <p class="endre-antall">Legg til vare</p>
                    <div class="knapper">
                    <p class="btn">Rediger</p>
                    </div>
                </div>

                <!-- Viser detaljene kun hvis dette kortet er valgt -->
                <ul v-if="valgtVare === vare.id" class="detaljer-liste">
                    <li v-for="detalj in vare.detaljer" :key="detalj.id" class="vare-kort">
                        <div class="vare-detaljer">
                            <h2>{{ detalj.navn }}</h2>
                            <p>Utløpsdato: {{ detalj.utløpsdato }}</p>
                            <p class="button">Fjern vare</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            varer: [
    {
        id: 1,
        navn: "Avocado",
        bilde: "https://via.placeholder.com/80",
        antall: 10,
        detaljer: [
            { id: 101, navn: "Avocado", utløpsdato: "2025-04-20" },
            { id: 102, navn: "Avocado", utløpsdato: "2025-04-22" }
        ]
    },
    {
        id: 2,
        navn: "Tomat",
        bilde: "https://via.placeholder.com/80",
        antall: 5,
        detaljer: [
            { id: 201, navn: "Tomat", utløpsdato: "2025-04-18" },
            { id: 202, navn: "Tomat", utløpsdato: "2025-04-25" }
        ]
    },
    {
        id: 3,
        navn: "Agurk",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 301, navn: "Agurk", utløpsdato: "2025-04-15" },
            { id: 302, navn: "Agurk", utløpsdato: "2025-04-20" }
        ]
    },
    {
        id: 4,
        navn: "Løk",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 401, navn: "Løk", utløpsdato: "2025-04-10" },
            { id: 402, navn: "Løk", utløpsdato: "2025-04-12" }
        ]
    },
    {
        id: 5,
        navn: "Paprika",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 501, navn: "Paprika", utløpsdato: "2025-04-18" },
            { id: 502, navn: "Paprika", utløpsdato: "2025-04-22" }
        ]
    },
    {
        id: 6,
        navn: "Salat",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 601, navn: "Salat", utløpsdato: "2025-04-14" },
            { id: 602, navn: "Salat", utløpsdato: "2025-04-16" }
        ]
    },
    {
        id: 7,
        navn: "Brokkoli",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 701, navn: "Brokkoli", utløpsdato: "2025-04-19" },
            { id: 702, navn: "Brokkoli", utløpsdato: "2025-04-23" }
        ]
    },
    {
        id: 8,
        navn: "Blomkål",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 801, navn: "Blomkål", utløpsdato: "2025-04-17" },
            { id: 802, navn: "Blomkål", utløpsdato: "2025-04-21" }
        ]
    },
    {
        id: 9,
        navn: "Gulrot",
        bilde: "https://via.placeholder.com/80",
        antall: 2,
        detaljer: [
            { id: 901, navn: "Gulrot", utløpsdato: "2025-04-13" },
            { id: 902, navn: "Gulrot", utløpsdato: "2025-04-15" }
        ]
    }
],
            valgtVare: null // Holder styr på hvilket kort som er "åpent"
        };
    },
    methods: {
        toggleDetaljer(vareId) {
            // Hvis det samme kortet klikkes igjen, lukk det
            this.valgtVare = this.valgtVare === vareId ? null : vareId;
        }
    }
};
</script>

<style scoped>
.varer-liste {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    margin: 0;
    justify-content: center;
    list-style-type: none;
}

.vare-kort {
    display: flex;
    align-items: center;
    border: 1px solid rgb(62, 62, 62);
    border-radius: 10px;
    padding: 10px;
    width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    transition: transform 0.2s, box-shadow 0.2s;
}

.vare-kort:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.vare-bilde {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
}

.vare-detaljer {
    flex: 1;
}

.vare-detaljer h2 {
    margin: 0 0 10px;
    font-size: 1.5rem;
    color: rgb(62, 62, 62);
}

.antall {
    margin: 0;
    font-size: 1.2rem;
}

.endre-antall {
    margin: 5px 10px 0;
    font-size: 1.2rem;
    color: rgb(85, 120, 131);
    cursor: pointer;
}

.knapper {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.btn {
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    transition: background-color 0.2s;
}

.btn:hover {
    background-color: #0056b3;
}

.detaljer-liste {
    display: flex;
    flex-direction: column; /* Plasser detaljekortene vertikalt */
    align-items: center; /* Sentrer detaljekortene horisontalt */
    gap: 10px; /* Avstand mellom detaljekortene */
    margin-top: 20px; /* Avstand mellom hovedkortet og detaljekortene */
    width: 100%; /* Sørg for at listen strekker seg over hele bredden */
}

.detaljer-liste .vare-kort {
    width: 500px; /* Samme bredde som hovedkortet */
    margin: 0 auto; /* Sentrer kortene horisontalt */
    display: flex;
    align-items: center;
    border: 1px solid rgb(62, 62, 62);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    transition: transform 0.2s, box-shadow 0.2s;
}

.detaljer-liste .vare-kort:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.button {
    margin-top: 10px;
    font-size: 1rem;
    color: rgb(200, 50, 50);
    cursor: pointer;
    text-decoration: underline;
}
.button:hover {
    color: rgb(150, 30, 30);
}
</style>