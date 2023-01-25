export const ConcordanceDefinition = (props: { concordanceData: any; openTab: number }) => {
  const data = props.concordanceData[props.openTab];
  return (
    <>
      <div className='pb-3'>
        <p className='text-center font-semibold text-xl'>{props.concordanceData[props.openTab]?.word}</p>
        <p className='text-center font-semibold text-sm'>{props.concordanceData[props.openTab]?.part_of_speech}</p>
      </div>
      {data?.definition ? (
        <div>
          <h2 className='uppercase font-extrabold text-sm text-blue-800'>Definition:</h2>
          <p>{data?.definition}</p>
        </div>
      ) : null}
      {data?.usage ? (
        <div>
          <h2 className='uppercase font-extrabold text-sm text-blue-800'>Usage:</h2>
          <p>{data?.usage}</p>
        </div>
      ) : null}
      {data?.origin ? (
        <div>
          <h2 className='uppercase font-extrabold text-sm text-blue-800'>Origin:</h2>
          <p>{data?.origin}</p>
        </div>
      ) : null}
    </>
  );
};
