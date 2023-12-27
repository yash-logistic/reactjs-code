/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ls:'10px',
        lr:'32px'
      },
      spacing: {
        at: '480px',
        tp:'-30px',
        88:'415px',
        ts:'-20px',
        gm:'-20px',
        lc:'770px'
      },
      width: {
        'cuswid': '560px',
        'gw':'32px',
        'swid':'40px',
        'cwid':'409px'
      },
      height: {
        'gh': '96px',   
      },
    },
  },
  plugins: [],
}

