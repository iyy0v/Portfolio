import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { color } from 'framer-motion'


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false, 
}

const theme = extendTheme({ 
    config,
    textStyles: {
        h1: {
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
        },
        nav: {
            fontSize: ['16px', '18px'],
            fontWeight: 'medium',
            lineHeight: '100%',
            letterSpacing: '2%',
        }
    },
    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },
        selected: {
            bg: 'teal.500',
            color: 'teal.700',
            borderColor: 'orange.500',
        },
    },
    semanticTokens: {
        colors: {
            error: 'red.500',
            success: 'green.500',
            primary: {
                default: '#030310',
                _dark: '#030310',
            },
            secondary: {
                default: 'red.800',
                _dark: 'red.700',
            },
        },
    },
})

export default theme