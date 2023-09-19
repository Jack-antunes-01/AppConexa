import React, {
  Dispatch, ReactNode, SetStateAction, createContext, useContext, useMemo, useState,
} from 'react';

import { InquiryModel } from '@app/models/inquiry';

type InquiryContextValue = {
  inquiryList : InquiryModel[],
  setInquiryList: Dispatch<SetStateAction<InquiryModel[]>>;
};

export const InquiryContext = createContext<InquiryContextValue | null>(null);

function InquiryContextProvider({ children }: { children: ReactNode }) {
  const [inquiryList, setInquiryList] = useState<InquiryModel[]>([]);

  const inquiryContextValue: InquiryContextValue = useMemo(() => ({
    inquiryList,
    setInquiryList,
  }), [inquiryList]);

  return <InquiryContext.Provider value={inquiryContextValue}>{children}</InquiryContext.Provider>;
}

const useInquiryContext = (): InquiryContextValue => {
  const inquiryContextState = useContext(InquiryContext);

  if (inquiryContextState === null) {
    throw new Error("Can't use useInquiryContext on a component not wrapped by InquiryContextProvider");
  }

  return inquiryContextState;
};

export { InquiryContextProvider, useInquiryContext };
