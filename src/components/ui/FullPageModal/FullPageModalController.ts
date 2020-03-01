import { TriggerPoint } from './useFullPageModalLogic'
export interface OpenEvent {
  triggerPoint: TriggerPoint
  value: boolean
}

export type OpenObserver = { (e: OpenEvent): void }
export type CloseObserver = { (): void }
type Observer = OpenObserver | CloseObserver

type Event = 'open' | 'close'

class FullPageModalController {
  constructor() {
    this.observers = {
      open: [],
      close: [],
    }
  }

  private readonly observers: {
    open: { (e: OpenEvent): void }[]
    close: { (): void }[]
  }

  public subscribe<T extends Observer>(event: Event, f: T) {
    const observerArr = this.observers[event] as T[]
    observerArr.push(f)
  }

  public unsubscribe<T extends Observer>(event: Event, f: T) {
    const observerArr = this.observers[event] as T[]
    const index = observerArr.indexOf(f)
    if (index !== -1) {
      observerArr.splice(index, 1)
    }
  }

  public open = (openEvent: OpenEvent) => {
    this.observers.open.forEach(observer => observer(openEvent))
  }

  public close = () => {
    this.observers.close.forEach(observer => observer())
  }
}

export default FullPageModalController
