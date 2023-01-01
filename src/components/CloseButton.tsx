export const CloseButton = (props: {
  closeAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => (
  <button
    onClick={props.closeAction}
    className='absolute text-white scale-0 w-5 leading-none group-hover:scale-100 
bg-black rounded-full border-white border -mx-2 -right-1 top-1 select-none'
  >
    &#x2715;
  </button>
);
