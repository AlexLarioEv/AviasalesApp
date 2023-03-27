export interface IFilterState {
  checkboxAll: { check: boolean }
  checkboxNoneTransfer: { check: boolean }
  checkboxOneTransfer: { check: boolean }
  checkboxTwoTransfer: { check: boolean }
  checkboxThreeTransfer: { check: boolean }
}

export enum EFilterActionTypes {
  TOGGLE_ALL = 'TOGGLE_ALL',
  TOGGLE_NONE_TRANSFER = 'TOGGLE_NONE_TRANSFER',
  TOGGLE_ONE_TRANSFER = 'TOGGLE_ONE_TRANSFER',
  TOGGLE_TWO_TRANSFER = 'TOGGLE_TWO_TRANSFER',
  TOGGLE_THREE_TRANSFER = 'TOGGLE_THREE_TRANSFER',
}

interface ICheckboxAllAction {
  type: EFilterActionTypes.TOGGLE_ALL
  payload: boolean
}

interface ICheckboxNoneTransferAction {
  type: EFilterActionTypes.TOGGLE_NONE_TRANSFER
  payload: boolean
}

interface ICheckboxOneTransferAction {
  type: EFilterActionTypes.TOGGLE_ONE_TRANSFER
  payload: boolean
}

interface ICheckboxTwoTransferAction {
  type: EFilterActionTypes.TOGGLE_TWO_TRANSFER
  payload: boolean
}

interface ICheckboxThreeTransferAction {
  type: EFilterActionTypes.TOGGLE_THREE_TRANSFER
  payload: boolean
}

export type TFilterAction =
  | ICheckboxAllAction
  | ICheckboxNoneTransferAction
  | ICheckboxOneTransferAction
  | ICheckboxTwoTransferAction
  | ICheckboxThreeTransferAction
