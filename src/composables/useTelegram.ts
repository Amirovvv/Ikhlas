import WebApp from '@twa-dev/sdk'

interface useTelegramType {
  ready: () => void
}

export default function useTelegram(): useTelegramType {
  function ready(): void {
    WebApp.ready()
  }

  return {
    ready,
  }
}
