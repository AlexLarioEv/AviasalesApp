export interface FilterState {
  checkboxAll: { check: boolean }
  checkboxNoneTransfer: { check: boolean }
  checkboxOneTransfer: { check: boolean }
  checkboxTwoTransfer: { check: boolean }
  checkboxThreeTransfer: { check: boolean }
}

export enum FilterActionTypes {
  TOGGLE_ALL = 'TOGGLE_ALL',
  TOGGLE_NONE_TRANSFER = 'TOGGLE_NONE_TRANSFER',
  TOGGLE_ONE_TRANSFER = 'TOGGLE_ONE_TRANSFER',
  TOGGLE_TWO_TRANSFER = 'TOGGLE_TWO_TRANSFER',
  TOGGLE_THREE_TRANSFER = 'TOGGLE_THREE_TRANSFER',
}

interface CheckboxAllAction {
  type: FilterActionTypes.TOGGLE_ALL
  payload: boolean
}

interface CheckboxNoneTransferAction {
  type: FilterActionTypes.TOGGLE_NONE_TRANSFER
  payload: boolean
}

interface CheckboxOneTransferAction {
  type: FilterActionTypes.TOGGLE_ONE_TRANSFER
  payload: boolean
}

interface CheckboxTwoTransferAction {
  type: FilterActionTypes.TOGGLE_TWO_TRANSFER
  payload: boolean
}

interface CheckboxThreeTransferAction {
  type: FilterActionTypes.TOGGLE_THREE_TRANSFER
  payload: boolean
}

export type FilterAction =
  | CheckboxAllAction
  | CheckboxNoneTransferAction
  | CheckboxOneTransferAction
  | CheckboxTwoTransferAction
  | CheckboxThreeTransferAction
