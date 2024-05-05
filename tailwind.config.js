module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      backgroundImage: theme => ({
        'f1': "url('/src/assets/home/f1.jpg')",
        'f2': "url('/src/assets/home/f2.jpg')",
        'f3': "url('/src/assets/home/f3.png')",
        'homefrontbg': "url('/src/assets/home/front_world.png')",
        'quiz-bg': "url('/src/assets/home/quiz_bg.png')",
      }),
      animation: {
        'bg': 'bg 20.04s infinite alternate',
      },
      keyframes: {
        bg: {
          '0%': { backgroundImage: 'var(--bg-f1)' },
          '25%': { backgroundImage: 'var(--bg-f2)' },
          '50%': { backgroundImage: 'var(--bg-f3)' },
          '75%': { backgroundImage: 'var(--bg-f2)' },
          '100%': { backgroundImage: 'var(--bg-f1)' },
        }
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
      backgroundRepeat: {
        repeat: 'repeat',
        'no-repeat': 'no-repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
        round: 'round',
        space: 'space',
      },
      colors: {
        "button-primary": "#D9CAB3",
        "button-primary-hover": "#B9CAB8",
      },
    },
  },
  plugins: [],
};
