<template>
    <header>
        <div class="container">
            <h1>Intresse List</h1>
            <nav>
                <ul>
                    <li><RouterLink to="/">Start</RouterLink></li>
                    <li><RouterLink to="/intresse">Intresselista</RouterLink></li>
                    <li><RouterLink to="/information">Information </RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    header {
        padding: 0.2em;
        background-color: #42b883;
        color: #fff;
    }
    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        margin: 0 auto;
    }
    ul {
        display: flex;
        list-style-type: none;
        font-size: 1.1em;
    }
    li {
        margin: 0 1em;
    }
    a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
    }
    a:hover {
        text-decoration: underline;
    }
    .router-link-active {
        text-decoration: underline;
    }
    @media screen and (max-width: 1000px) {
        .container {
            width: 95%;
        }
    }

</style>