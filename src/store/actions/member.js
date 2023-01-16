export const addMember = (member) => {
  return {
    type: "ADDMEMBER",
    payload: member,
  };
};
export const updateMember = (member) => {
  return {
    type: "UPDATEMEMBER",
    payload: member,
  };
};
export const deleteMember = (member) => {
  return {
    type: "DELETEMEMBER",
    payload: member,
  };
};
