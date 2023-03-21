// eslint-disable-next-line import/named
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootState } from '../Store'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
