import React from 'react'

const ReactContextObj = React.createContext({
  isDark: false,
  changeDark: () => {},
})

export default ReactContextObj
