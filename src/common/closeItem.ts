export const getItemCloser = (key: string, setItemList: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setItemList((itemList) => {
      const newItemList: JSX.Element[] = itemList.filter((item, index) => {
        return item.key !== key;
      });
      return newItemList;
    });
  };
};
