/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    
};

module.export = {
    daisyui: {
        themes: ["light", "dark"]
    }
}

