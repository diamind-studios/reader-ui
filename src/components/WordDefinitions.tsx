export const WordDefinitions = (props: { data: any }): JSX.Element => {
  const definitions = props.data.map((definition: any) => {
    return (
      <div>
        <h2 className=" font-bold">{definition.concordance_name}</h2>
        Word: {definition.word}
        <br />
        Definition: {definition.definition}
      </div>
    );
  });
  return definitions;
};
