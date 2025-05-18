import terminal from '../../assets/svg/terminal.svg'
import { copyToClip } from '../../utils'

type CardTerminalProps = {
  children?: React.ReactNode
  title?: string
  copyId?: string
}

export default function CardTerminal({ children, title = 'bash', copyId }: CardTerminalProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg w-full max-w-3xl mx-auto font-mono text-sm mt-5">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-gray-800">
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-gray-400 text-xs">{title}</span>
        <span className="w-8" /> 

        {copyId && (
          <button onClick={() => copyToClip(copyId)}>
            <img src={terminal} alt="terminal icon" className='w-5 cursor-pointer'  />
          </button>
        )}
      </div>

      <div className="px-4 py-3 text-gray-200 whitespace-pre-wrap">
        {children}
      </div>
    </div>
  )
}
