import Icon from './Icon'

export default function ChatFab() {
  return (
    <button
      aria-label="Open chat"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-primary text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
    >
      <Icon name="chat_bubble" className="text-2xl" />
    </button>
  )
}
