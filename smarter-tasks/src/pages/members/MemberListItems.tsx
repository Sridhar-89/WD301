// import React from "react";
// import { Icon } from "@iconify/react";
// import {
//   useMembersState,
//   useMembersDispatch,
// } from "../../context/members/context";
// import { deleteUser } from "../../context/members/actions";

// export default function MemberListItems() {
//   let state: any = useMembersState();
//   const dispatchMembers = useMembersDispatch();

//   const { members, isLoading, isError, errorMessage } = state;
//   //console.log(members);
//   //for loading all users
//   if (members.length === 0 && isLoading) {
//     return <span>Loading...</span>;
//   }
//   if (isError) {
//     return <span>{errorMessage}</span>;
//   }

//   //for deleting the  user with id
//   const deleteHandler = async (id: number) => {
//     console.log(id);
//     const response = await deleteUser(dispatchMembers, id);
//     console.log(response);
//   };

//   return (
//     <>
//       {members.map((member: any) => (
//         <div
//           key={member.id}
//           className="member p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//         >
//           <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
//             {member.name}
//           </h5>
//           <button
//             onClick={() => {
//               deleteHandler(member.id);
//             }}
//           >
//             <Icon icon="heroicons-outline:trash" />
//           </button>
//           <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
//             {member.email}
//           </h5>
//         </div>
//       ))}
//     </>
//   );
// }
import { useTranslation } from "react-i18next";
import React from "react";
import {
  useMembersDispatch,
  useMembersState,
} from "../../context/members/context";
import trash from "../../assets/images/trash.png";
import { deleteUser } from "../../context/members/actions";
export default function MemberListItems() {
  const{t}=useTranslation();
  let state: any = useMembersState();
  console.log("mmm", state);
  const { members, isLoading, isError, errorMessage } = state;
  console.log("m", members);
  const dispatchMembers = useMembersDispatch();
  console.log("........" + members);

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const handleOnClick = async (id: number) => {
    // console.log('deleting member with id: ', id);
    // const response =
    await deleteUser(dispatchMembers, id);
    // console.log(response);
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {t(member.name)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {t(member.email)}
          </h5>
          <button
            onClick={() => {
              handleOnClick(member.id);
            }}
          >
            <img
              src={trash}
              style={{
                width: "75%",
                height: "auto",
              }}
              alt="Delete"
              className="trash"
            />
          </button>
        </div>
      ))}
    </>
  );
}
