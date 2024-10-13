import { xTermTheme } from '#theme.ts'
import { FitAddon } from '@xterm/addon-fit'
import { ImageAddon } from '@xterm/addon-image'
import { Terminal as XTerm } from '@xterm/xterm'
import { WebLinksAddon } from '@xterm/addon-web-links'
import { ClipboardAddon } from '@xterm/addon-clipboard'
import { SerializeAddon } from '@xterm/addon-serialize'

export type XTermAddon = {
  fitAddon: FitAddon
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
    fontSize: 16,
    convertEol: true,
    cursorBlink: true,
    theme: xTermTheme,
    cursorStyle: 'bar',
    allowProposedApi: true,
    cursorInactiveStyle: 'bar',
    disableStdin: options.readonly,
    drawBoldTextInBrightColors: true,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace'
  })
  const fitAddon = new FitAddon()
  terminal.loadAddon(fitAddon)

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
      imageAddon,
      webLinksAddon,
      clipboardAddon,
      serializeAddon
    }
  }
}
