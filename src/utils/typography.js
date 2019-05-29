import Typography from 'typography'
import theme from 'typography-theme-fairy-gates'
theme.baseFontSize = '18px'
theme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
      textShadow: "none",
      backgroundImage: "none"
    },
    'p, a' : {
        fontFamily: '"Roboto", "sans-serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" '
    },
    "h1,h2,h3,h4,h5,h6": {
      marginTop: `${rhythm(1.5)} !important`,
      marginBottom: `${rhythm(0.5)} !important`,
    }
  })

const typography = new Typography(theme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography