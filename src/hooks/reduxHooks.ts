import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../redux';

const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = (): AppDispatch => useDispatch();

export { useAppSelector, useAppDispatch };
