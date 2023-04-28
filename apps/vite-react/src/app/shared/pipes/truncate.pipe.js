export const truncate = (dataString, limit) => {
   return dataString.length > limit ? dataString.substr(0, limit) + "..." : dataString;
};
