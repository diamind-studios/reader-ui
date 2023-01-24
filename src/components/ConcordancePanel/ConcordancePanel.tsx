import { useState } from 'react';
import { ConcordanceTab } from './ConcordanceTab';


export const ConcordancePanel = (props: { color: string; concordanceData: any[] }) => {
  const [openTab, setOpenTab] = useState(0);

  const tabs = props.concordanceData?.map((concordanceEntry: any, index: number) => {
    console.log(index, concordanceEntry);
    return (
      <ConcordanceTab
        tabId={index}
        openTab={openTab}
        setOpenTab={setOpenTab}
        concordanceName={concordanceEntry.concordance_name}
      ></ConcordanceTab>
    );
  });
  // console.log('concordance data:', props.concordanceData);
  return (
    <div className='flex flex-wrap'>
      {tabs}
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded'>
        <div className='px-4 py-5 flex-auto'>
          <p>{props.concordanceData ? props.concordanceData[openTab]?.definition : null}</p>
        </div>
      </div>
    </div>
  );
};

// export default function TabsRender() {
//   return (
//     <>
//       return <ConcordanceTab color='pink' />;
//     </>
//   );
// }
