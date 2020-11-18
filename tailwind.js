const colors = {
    gruvwhite: '#ebdbb2',
    gruvblack: '#282828',
    gruvfg: {
        0: '#fbf1c7',
        1: '#ebdbb2',
        2: '#d5c4a1',
        3: '#bdae93',
        4: '#a89984',
        5: '#ebdbb2',
    },
    gruvbg: {
        0: '#282828',
        1: '#3c3836',
        2: '#504945',
        3: '#665c54',
        4: '#7c6f64',
        5: '#1d2021',
    },
    redgruv: {
        light: '#fb4934',
        dark: '#cc241d',
        default: '#cc241d',
    },
    greengruv: {
        light: '#b8bb26',
        dark: '#9897a1',
        default: '#9897a1',
    },
    yellowgruv: {
        light: '#fabd2f',
        dark: '#d79921',
        default: '#d79921',
    }, 
    bluegruv: {
        light: '#83a598',
        dark: '#458588',
        default: '#458588',
    },
    purplegruv: {
        light: '#d3869b',
        dark: '#b16286',
        default: '#b16286',
    },
    aquagruv: {
        light: '#8ec07c',
        dark: '#689d6a',
        default: '#689d6a',
    },
    graygruv: {
        light: '#a89984',
        dark: '#928374',
        default: '#928374',
    },
    orangegruv: {
        light: '#fe8019',
        dark: '#d65d0e',
        default: '#d65d0e',
    },
  }
  
  module.exports = {
    theme: {
      extend: {
        colors: colors,
      }
    }
  }