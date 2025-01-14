import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCommentsDispatch } from "../../context/comment/context";
import { addComment, fetchComments } from "../../context/comment/actions";
import { CommentListItems } from "./CommentListItems";
import { Comment } from "../../context/comment/types";
import { useTranslation } from "react-i18next";

export const Comments = () => {
  const { t}=useTranslation();
  const CommentsDispatch = useCommentsDispatch();
  const { projectID, taskID } = useParams();
  useEffect(() => {
    fetchComments(CommentsDispatch, projectID!, taskID!);
  }, [CommentsDispatch, projectID, taskID]);
  console.log(useParams());

  type Inputs = {
    description: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { description } = data;
    console.log("comment is: ", description);
    if (!description.trim()) {
      return;
    }
    const comment: Comment = {
      description: description,
    };
    try {
      console.log("project id: ", projectID, " taskID: ", taskID);
      addComment(CommentsDispatch, projectID!, taskID!, comment);
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            {t('Comment')}
          </label>
          <input
            type="text"
            id="commentBox"
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          id="addCommentBtn"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
         {t('Comment')}
        </button>
      </form>

      <CommentListItems />
    </>
  );
};
