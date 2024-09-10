import { xTermTheme } from '#theme.ts'
import { FitAddon } from '@xterm/addon-fit'
import { ImageAddon } from '@xterm/addon-image'
import { WebglAddon } from '@xterm/addon-webgl'
import { Terminal as XTerm } from '@xterm/xterm'
import { WebLinksAddon } from '@xterm/addon-web-links'
import { ClipboardAddon } from '@xterm/addon-clipboard'
import { SerializeAddon } from '@xterm/addon-serialize'

export type XTermAddon = {
  fitAddon: FitAddon
  webglAddon: WebglAddon
  imageAddon: ImageAddon
  webLinksAddon: WebLinksAddon
  clipboardAddon: ClipboardAddon
  serializeAddon: SerializeAddon
}
export type { XTerm as OTerm }

export async function oTerm(
  terminalElement: HTMLElement,
  options: {
    readonly?: boolean
  } = { readonly: false }
): Promise<{
  terminal: XTerm
  addons: XTermAddon
}> {
  const terminal = new XTerm({
    fontSize: 15,
    convertEol: true,
    cursorBlink: true,
    theme: xTermTheme,
    cursorStyle: 'bar',
    allowProposedApi: true,
    cursorInactiveStyle: 'bar',
    disableStdin: options.readonly,
    drawBoldTextInBrightColors: true,
    fontFamily: 'JetBrains Mono, monospace'
  })
  const fitAddon = new FitAddon()
  terminal.loadAddon(fitAddon)

  const webglAddon = new WebglAddon()
  webglAddon.onContextLoss(_event => webglAddon.dispose())
  terminal.loadAddon(webglAddon)

  const serializeAddon = new SerializeAddon()
  terminal.loadAddon(serializeAddon)

  const webLinksAddon = new WebLinksAddon()
  terminal.loadAddon(webLinksAddon)

  const clipboardAddon = new ClipboardAddon()
  terminal.loadAddon(clipboardAddon)

  const imageAddon = new ImageAddon()
  terminal.loadAddon(imageAddon)
  terminal.open(terminalElement)
  fitAddon.fit()

  return {
    terminal,
    addons: {
      fitAddon,
      webglAddon,
      imageAddon,
      webLinksAddon,
      clipboardAddon,
      serializeAddon
    }
  }
}
