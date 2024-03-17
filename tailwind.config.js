/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'), require('flowbite')],
    
};

module.export = {
    daisyui: {
        themes: ["light", "dark"]
    },
    screens: {
        'sm': {'min': '530px', 'max': '639px'},
  
        'md': {'min': '1023px'},
  
        'lg': {'min': '1279px'},
  
        'xl': {'min': '1535px'},
  
        '2xl': {'min': '1536px'},
    },

}

