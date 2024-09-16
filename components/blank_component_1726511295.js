<!--
INSTRUCTION: Summary: The blank component contains the following two parts:
INSTRUCTION: - To the left: There is an empty div with text on top and bottom.
INSTRUCTION: - To the right: There is an empty div.
INSTRUCTION:
INSTRUCTION: If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div>` and then use the following syntax:
INSTRUCTION: <div class="grid">
INSTRUCTION:     <!-- these components appear to the left side -->
INSTRUCTION:     <div id="left-side-container" class="flex"> Left side part here </div>
INSTRUCTION:
INSTRUCTION:     <!-- these components appear to the right side -->
INSTRUCTION:     <div id="right-side-container" class="flex"> Right side part here</div>
INSTRUCTION: </div>
-->
<template>
    <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <section id="blank-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div class="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 m-4">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Sustainable Water Bottles</h2>
                    <p class="text-gray-600 dark:text-gray-300">
                        Discover our eco-friendly water bottles, designed to keep you hydrated while reducing plastic waste. Made from durable, BPA-free materials, these bottles are perfect for your daily adventures, workouts, or office use. Choose sustainability without compromising on style or functionality.
                    </p>
                    <div class="mt-4 flex items-center">
                        <i class='bx bx-droplet text-blue-500 mr-2'></i>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Capacity: 500ml - 1L</span>
                    </div>
                </div>
            </div>
        </section>  
    </div>
</template>

<script>
export default {
    name: "BlankComponent",
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
