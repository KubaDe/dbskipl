import { TriggerPoint } from './useFullPageModalLogic'
export interface OpenEvent {
  triggerPoint: TriggerPoint
}

export type OpenObserver = { (e: OpenEvent): void }
export type CloseObserver = { (): void }
export type OpenEndObserver = { (): void }
export type CloseEndObserver = { (): void }

type Observer = OpenObserver | CloseObserver | OpenEndObserver | CloseEndObserver

type Event = 'open' | 'close' | 'openEnd' | 'closeEnd'

class FullPageModalController {
  constructor() {
    this.observers = {
      open: [],
      close: [],
      openEnd: [],
      closeEnd: [],
    }
  }

  private readonly observers: {
    open: { (e: OpenEvent): void }[]
    close: { (): void }[]
    openEnd: { (): void }[]
    closeEnd: { (): void }[]
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

  public openEnd = () => {
    this.observers.openEnd.forEach(observer => observer())
  }

  public close = () => {
    this.observers.close.forEach(observer => observer())
  }

  public closeEnd = () => {
    this.observers.closeEnd.forEach(observer => observer())
  }


}

export default FullPageModalController
