import { ReaderMeta } from '../types/types';

export const getReaderCloser = (key: string, setReaderList: React.Dispatch<React.SetStateAction<ReaderMeta[]>>) => {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setReaderList((itemList) => {
      const newItemList: ReaderMeta[] = itemList.filter((item, index) => {
        return item.key !== key;
      });
      return newItemList;
    });
  };
};
