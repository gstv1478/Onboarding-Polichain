/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita o modo escuro via classe
  content: [
    // ... (conteúdo existente)
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores escuras personalizadas
        dark: {
          100: '#E0E0E0',
          200: '#BDBDBD',
          800: '#212121',
          900: '#121212',
        },
        blockchain: {
          purple: '#6E3BCA',
          blue: '#3B82F6',
        }
      }
    }
  }
}