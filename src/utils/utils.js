import { Requests } from "../api/apiRequests";

export const responseHandler = async (type, data, dispatch, action, error) => {

  if (type === "signup") {
  return  await Requests.Register(data)
  }
  if (type === "signin") {
  return  await Requests.Login(data)
  }
};

// .then((res) => {
//   if (!res.payload.access) {
//     dispatch(error(res.payload.message));
//   }
//   if (res.payload.access) {
//    // dispatch(error(null));
//     // localStorage.setItem("token", res.payload.token);
//   //  window.location.href = '/'
//   }
// });


// .then((res) => {
//   if (!res.payload.access) {
//     dispatch(error(res.payload.message));
//   }
//   if (res.payload.access) {
//    // dispatch(error(null));
//     // localStorage.setItem('token',res.payload.token)
//    // window.location.href = '/'
//   }
// });