
import styled from 'styled-components'
import VimeoPlayer from '@u-wave/react-vimeo'

const Vimeo = styled(VimeoPlayer)`
  position: relative;
  padding-bottom: 0;
  padding-top: 0;
  height: 100vh;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`

export default Vimeo