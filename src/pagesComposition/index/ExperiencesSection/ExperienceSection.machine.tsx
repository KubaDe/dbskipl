import { Machine } from 'xstate';
import range from 'lodash/range';
import fromPairs from 'lodash/fromPairs';

export const thresholds: number[] = [0.4, 1]

export interface ProgressEvent {
  type: string
  progress: number
}

type ExperienceSectionMachineEvent = ProgressEvent

interface ExperienceSectionMachineStateSchema {
  states: {
    before: {}
    active: {
      states: {
        [key: string]: {}
      }
    }
    after: {}
  }
}

const checkThresholdUp = (
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

const checkThresholdDown = (
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

const getSubThresholds = (bubblesN: number): number[] => {
  const step = (thresholds[1] - thresholds[0]) / bubblesN
  return range(bubblesN).map(
    bubbleNo => thresholds[0] + (bubbleNo + 1) * step,
  )
}

const getActiveSubStates = (bubblesN: number) => {
  const subThresholds = getSubThresholds(bubblesN + 1)

  const primarySubStates = {
    '-1': {
      on: {
        THRESHOLD: [
          {
            target: '0',
            cond: {
              type: 'checkThresholdUp',
              threshold: subThresholds[0],
            },
          },
        ],
      },
    },
    [`${bubblesN + 1}`]: {
      on: {
        THRESHOLD: [
          {
            target: `${bubblesN - 1}`,
            cond: {
              type: 'checkThresholdUp',
              threshold: subThresholds[bubblesN],
            },
          },
        ],
      },
    },
  }

  const activeSubStates = fromPairs(
    subThresholds.map((subThreshold, i) => [
      `${i}`,
      {
        on: {
          THRESHOLD: [
            {
              target: `${i + 1}`,
              cond: {
                type: 'checkThresholdUp',
                threshold: subThresholds[i + 1],
              },
            },
            {
              target: `${i - 1}`,
              cond: {
                type: 'checkThresholdDown',
                threshold: subThresholds[i] || thresholds[0],
              },
            },
          ],
        },
      },
    ]),
  )
  return { ...primarySubStates, ...activeSubStates }
}

export const getExperienceSectionMachine = (bubblesN: number) => {
  const activeSubStates = getActiveSubStates(bubblesN)
  return Machine<
    {},
    ExperienceSectionMachineStateSchema,
    ExperienceSectionMachineEvent
  >(
    {
      id: 'experience-section',
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
          initial: '-1',
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
          states: activeSubStates,
        },
        after: {
          on: {
            THRESHOLD: {
              target: `active.${bubblesN}`,
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
