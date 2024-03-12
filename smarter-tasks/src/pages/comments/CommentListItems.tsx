import { useTranslation } from "react-i18next";
import React from "react";
import { useCommentsState } from "../../context/comment/context";
import { CommentState } from "../../context/comment/types";
import { MembersState } from "../../context/members/reducer";
import { useMembersState } from "../../context/members/context";

export const CommentListItems = () => {
  const {t}=useTranslation();
  const state: CommentState = useCommentsState();
  const memberState: MembersState | undefined = useMembersState();
  const { members }: any = memberState;
  const { comments, isLoading, isError, errorMessage } = state;
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const findOwner = (id: number) => {
    const member = members.find((member: any) => member.id === id);
    if (member) return member.name;
    return "unknown";
  };

  return (
    <>
      <div></div>
      {comments.map((comment: any) => (
        <div
          key={comment.id}
          className="comment block p-6 bg-white border border-gray-200 rounded-xl shadow hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-900 dark:hover:bg-blue-700"
        >
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-600 dark:text-white">
            {t(comment.description)}
          </h5>
          by: {t(findOwner(comment.owner))} at{" "}
          {new Date(comment.createdAt).toLocaleString("en-IN")}
        </div>
      ))}
    </>
  );
};
