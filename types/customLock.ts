export enum LockStatus {
  Wait = 'wait',
  Resolve = 'Resolve',
  Reject = 'Reject',
  Created = 'Created'
}

export interface ICustomLock {
  name: string
  readonly status: LockStatus
  readonly createdAt: number
  wait(): Promise<unknown> | undefined
}
