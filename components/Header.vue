<script setup></script>

<template>
    <header
        class="h-screen w-1/4 bg-white border-r-4 border-gray-800 py-8 flex flex-col justify-between items-center fixed">
        <a href="#Hero" class="w-4/5">
            <img src="~/assets/images/logo.png" alt="Logo de l'association JuraGeek"
                class="mx-auto hover:scale-105 transition" />
        </a>

        <ul id="Menu" class="-skew-y-6 flex flex-col gap-4 w-full mb-16">
            <li>
                <a href="#About" class="bg-[#E41118]">
                    <IconsGamepad id="Icon" />L'association
                </a>
            </li>
            <li>
                <a href="#Calendar" class="bg-yellow-400">
                    <IconsCalendar id="Icon" />Calendrier
                </a>
            </li>
            <li>
                <a href="#Photos" class="bg-[#27A33A]">
                    <IconsPhotos id="Icon" />Photothèque
                </a>
            </li>
            <li>
                <a href="#Contact" class="bg-[#3B4E9B]">
                    <IconsMessage id="Icon" />Contact
                </a>
            </li>
        </ul>

        <span class="text-center">
            26, rue des commards <br />
            39100 Dole, France
        </span>
    </header>
</template>

<style scoped>
#Menu a {
    @apply w-full text-white font-bold py-4 px-[12%] text-2xl hover:pl-[16%] transition-all flex items-center gap-4;
    text-shadow: 3px 3px 2px black;
}

#Icon {
    @apply w-8 h-8;
    filter: drop-shadow(3px 3px 1px black);
}
</style>
