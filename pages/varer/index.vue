<template>
    <div class="varer-container">
        <div class="overskrift">
            <h1>Vareregister</h1>
            <h2>Her er en oversikt over dine varer. Du kan velge å endre antall varer av en varetype. Du kan også endre bilde og navn på en vare, eller velge å slette en varetype helt fra din beholdning.</h2>
        </div>
        <ul class="varer-liste">
            <li v-for="vare in varer" :key="vare.id" class="vare-kort">
                <img :src="vare.bilde" alt="Bilde av vare" class="vare-bilde" />
                <div class="vare-detaljer">
                    <h2>{{ vare.navn }}</h2>
                    <p class="antall">Antall: {{ vare.antall }}</p>
                    <p class="endre-antall">Endre antall</p>
                    <div class="knapper">
                        <button class="btn">Rediger</button>
                        <button class="btn">Slett</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            varer: [
                { id: 1, navn: "Avocado", bilde: "https://via.placeholder.com/80", antall: 10 },
                { id: 2, navn: "Tomat", bilde: "https://via.placeholder.com/80", antall: 5 },
                { id: 3, navn: "Agurk", bilde: "https://via.placeholder.com/80", antall: 8 },
                { id: 4, navn: "Løk", bilde: "https://via.placeholder.com/80", antall: 12 },
                { id: 5, navn: "Paprika", bilde: "https://via.placeholder.com/80", antall: 7 },
                { id: 6, navn: "Salat", bilde: "https://via.placeholder.com/80", antall: 4 },
                { id: 7, navn: "Brokkoli", bilde: "https://via.placeholder.com/80", antall: 6 },
                { id: 8, navn: "Blomkål", bilde: "https://via.placeholder.com/80", antall: 3 },
                { id: 9, navn: "Gulrot", bilde: "https://via.placeholder.com/80", antall: 15 },
                { id: 10, navn: "Potet", bilde: "https://via.placeholder.com/80", antall: 20 }
            ]
        };
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
</style>

