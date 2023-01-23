export const CloseButton = (props: {
  closeAction: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  display?: 'scale-100';
}): JSX.Element => (
  <button onClick={props.closeAction} className={'close-button ' + props.display || ''}>
    &#x2715;
  </button>
);
