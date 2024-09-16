<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800" style=""><div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10" style=""><hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div id="footer-content" class="text-center"><div class="flex"><a id="footer-logo-link" href="#" data-mf-new="true" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white" style="">
                        AquaFlask: Redefined
                    © 2024 AquaFlask. Stay hydrated, stay healthy. All rights reserved.
                </div></div>
                
                <div class="mt-4">
                    <button @click="showAlert" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                        Alert Me
                    </button>
                </div>
                
                </div></div></footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
    methods: {
        // Alert method
        showAlert() {
            alert('Button pressed!');
        }
        // End of Alert method
    },
}
</script>
