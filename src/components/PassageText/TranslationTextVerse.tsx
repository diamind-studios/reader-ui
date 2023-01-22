export const TranslationTextVerse = (props: { key: string; verse: any }): JSX.Element => {
  return (
    <div>
      <b>{`${props.verse.verse}. `}</b>
      {props.verse.text}
    </div>
  );
};
