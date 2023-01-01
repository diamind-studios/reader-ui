export const getItemCloser = (
  id: string,
  itemList: JSX.Element[],
  setItemList: React.Dispatch<React.SetStateAction<JSX.Element[]>>
) => {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newItemList: JSX.Element[] = itemList.filter((item, index) => item.props.id !== id);
    setItemList(newItemList);
  };
};
