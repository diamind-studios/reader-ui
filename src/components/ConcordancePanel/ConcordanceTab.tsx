import { StateSetter } from "../../types/types";

export const ConcordanceTab = (props: {
    tabId: number;
    openTab: number;
    setOpenTab: StateSetter<number>;
    concordanceName: string;
  }) => {
    return (
      <a
        className={'tab ' + (props.openTab === props.tabId ? ' text-white bg-blue-600' : ' text-blue-600 bg-white hover:bg-blue-100')}
        onClick={(e) => {
          e.preventDefault();
          props.setOpenTab(props.tabId);
        }}
        data-toggle='tab'
        href='#link1'
        role='tablist'
      >
        {props.concordanceName}
      </a>
    );
  };