import { Machine } from 'xstate'

export const _thresholds: number[] = [0.2, 1.55]

export const eventFactory = (progress: number): ProgressEvent => ({
  type: 'THRESHOLD',
  progress,
})

export interface ProgressEvent {
  type: string
  progress: number
}

type ExperienceSectionMachineEvent = ProgressEvent

interface ExperienceSectionMachineStateSchema {
  states: {
    before: {}
    active: {}
    after: {}
  }
}

export const checkThresholdUp = (
  ctx: {},
  event: ProgressEvent,
  options: any,
): boolean => {
  if (options && options.cond.threshold) {
    const threshold = options.cond.threshold
    return event.progress >= threshold
  }
  return false
}

export const checkThresholdDown = (
  ctx: {},
  event: ProgressEvent,
  options: any,
): boolean => {
  if (options && options.cond.threshold) {
    const threshold = options.cond.threshold
    return event.progress < threshold
  }
  return false
}

interface GetExperienceSectionMachineProps {
  id: string
  thresholds?: number[]
}

export const getSectionMachine = ({ id, thresholds=_thresholds }: GetExperienceSectionMachineProps) => {
  return Machine<
    {},
    ExperienceSectionMachineStateSchema,
    ExperienceSectionMachineEvent
  >(
    {
      id,
      initial: 'before',
      states: {
        before: {
          on: {
            THRESHOLD: {
              target: 'active',
              cond: { type: 'checkThresholdUp', threshold: thresholds[0] },
            },
          },
        },
        active: {
          on: {
            THRESHOLD: [
              {
                target: 'after',
                cond: { type: 'checkThresholdUp', threshold: thresholds[1] },
              },
              {
                target: 'before',
                cond: { type: 'checkThresholdDown', threshold: thresholds[0] },
              },
            ],
          },
        },
        after: {
          on: {
            THRESHOLD: {
              target: 'active',
              cond: { type: 'checkThresholdDown', threshold: thresholds[1] },
            },
          },
        },
      },
    },
    {
      guards: {
        checkThresholdUp,
        checkThresholdDown,
      },
    },
  )
}
