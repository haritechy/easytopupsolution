'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { goBack } from '@/redux/actions/navigationAction';
import { Backpack, SkipBack, StepBack } from 'lucide-react';

const BackButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const back = useSelector((state: RootState) => state.navigation.back);
  const handleClick = () => {
    dispatch(goBack());
  if (back) {
      router.back();
    }
  };

  return <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<StepBack /> go back

  </button>;
};

export default BackButton;
