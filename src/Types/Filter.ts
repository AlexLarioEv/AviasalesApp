export interface IFilterState {
  checkboxs: Array<boolean>
}

export enum EFilterActionTypes {
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

interface ICheckboxFilter {
  type: EFilterActionTypes.TOGGLE_FILTER
  payload: Array<boolean>
}

export type TFilterAction = ICheckboxFilter
