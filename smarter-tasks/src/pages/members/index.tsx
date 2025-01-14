import NewMember from "./NewMember";
// import MemberList from "./MemberList";
import { useTranslation } from "react-i18next";

import React, { Suspense } from "react";
const MemberList = React.lazy(() => import("./MemberList"));
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  const { t }= useTranslation();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">{t('Users')}</h2>
        <NewMember />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
