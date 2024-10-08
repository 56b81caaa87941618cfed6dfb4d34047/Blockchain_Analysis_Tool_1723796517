/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723796520", {
    template: `
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Blockchain_Analysis_Tool_1723796517/main/images/e122bb40e12b4bee987984d07fb43806.jpeg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            ChainSight
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        © 2023 ChainSight. Empowering blockchain analysis with real-time insights.
                        © 2023 ChainSight. Empowering blockchain analysis with real-time insights.
                        <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Hello World
                        </button>
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});