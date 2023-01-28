import { useState } from 'react';
import { ConcordanceDefinition } from './ConcordanceDefinition';
import { ConcordanceTab } from './ConcordanceTab';

export const ConcordancePanel = (props: { concordanceData: any[] }) => {
  const [openTab, setOpenTab] = useState(0);

  const tabs = props.concordanceData?.map((concordanceEntry: any, index: number) => {
    return (
      <ConcordanceTab
        key={index}
        tabId={index}
        openTab={openTab}
        setOpenTab={setOpenTab}
        concordanceName={concordanceEntry.concordance_name}
      ></ConcordanceTab>
    );
  });
  return (
    <div className='flex flex-wrap'>
      {tabs}
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded'>
        <div className='px-4 py-5 flex-auto'>
          {props.concordanceData ? (
            <ConcordanceDefinition openTab={openTab} concordanceData={props.concordanceData}></ConcordanceDefinition>
          ) : null}
        </div>
      </div>
    </div>
  );
};
