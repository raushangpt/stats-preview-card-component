/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            'gray-100': 'hsl(0, 0%, 100%)',
            'gray-200': 'hsla(0, 0%, 100%, 0.75)',
            'gray-300': 'hsla(0, 0%, 100%, 0.6)',
            'blue-100': 'hsl(244, 38%, 16%)',
            'blue-200': 'hsl(233, 47%, 7%)',
            'violet': 'hsl(277, 64%, 61%)',
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'lexend-deca': ['Lexend Deca', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
