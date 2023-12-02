<template>
    <section id="Hero">
        <div
            class="w-full h-full relative bg-gradient-to-r from-black/95 from-20% to-transparent text-white flex flex-col justify-center gap-16 lg:px-[10%] pb-[10%]">
            <h1 class="font-semibold text-6xl">
                Passionnés, et<br />
                plus encore...
            </h1>

            <p class="text-3xl w-2/3 ml-16">
                JuraGeek est une association à but non lucratif, qui a pour but
                de promouvoir la culture geek dans le Jura.
            </p>
        </div>
    </section>
</template>

<style scoped>
section {
    background-image: url("~/assets/photos/hero.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    text-shadow: 4px 3px 10px black;
}
</style>
