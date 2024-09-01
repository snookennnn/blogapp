import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from '../../hooks/usePagination';

test('pagination hook', () => {
  const { result } = renderHook(() => usePagination(30, 10));

  expect(result.current.currentPage).toBe(1);
  expect(result.current.totalPages).toBe(3);

  act(() => {
    result.current.nextPage();
  });

  expect(result.current.currentPage).toBe(2);

  act(() => {
    result.current.prevPage();
  });

  expect(result.current.currentPage).toBe(1);
});
