<template>
    <button @click="scrollToTop" class="go-to-top-button">
        <span class="sr-only">Go to top</span>
        <font-awesome-icon class="icone" icon="fa-regular fa-circle-up" />
    </button>
</template>
  
<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    created() {
        // Ajouter un écouteur d'événement de défilement à la fenêtre lors de la création du composant
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        // Supprimer l'écouteur d'événement de défilement de la fenêtre lors de la destruction du composant
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        // Fonction pour gérer l'événement de défilement
        handleScroll() {
            if (window.pageYOffset > 300) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        },
        // Fonction pour faire défiler jusqu'en haut de la page
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>
  
<style scoped>
.go-to-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    color: #fff;
    background: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
    opacity: 1;
}

.icone {
    font-size: 24px;
    background-color: #3498db;
    padding: 10px;
    border-radius: 50px;
}

.go-to-top-button:hover {
    opacity: 0.8;
}

.go-to-top-button:focus {
    outline: none;
}

.go-to-top-button.is-show {
    opacity: 1;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px),
(min-width: 429px) and (max-width: 834px) {
    .go-to-top-button {
        bottom: 40px;
        right: 43px;
    }
}
</style>
  