import { StateSetter } from "../../types/types";

export const ConcordanceTab = (props: {
    tabId: number;
    openTab: number;
    setOpenTab: StateSetter<number>;
    concordanceName: string;
  }) => {
    return (
      <a
        className={'tab ' + (props.openTab === props.tabId ? ' text-white bg-blue-700' : ' text-blue-700 bg-white')}
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