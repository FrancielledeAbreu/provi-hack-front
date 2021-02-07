import api from "../../services";

export const CHALLENGESLIST = "CHALLENGESLIST";

const challengesList = (data) => {
  return { type: CHALLENGESLIST, data };
};

export const challengesRequest = () => (dispatch) => {
  api
    .get(`api/v1/challenges`)
    .then(({ data }) => {
      dispatch(challengesList(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const challengesRequestTeam = () => (dispatch) => {
  api
    .get(`api/v1/challenges?filter[type]=team`)
    .then(({ data }) => {
      dispatch(challengesList(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const challengesRequestSingle = () => (dispatch) => {
  api
    .get(`api/v1/challenges?filter[type]=single`)
    .then(({ data }) => {
      dispatch(challengesList(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

export const challengesRequestFilterName = (value) => (dispatch) => {
  api
    .get(`api/v1/challenges?filter[name]=${value}`)
    .then(({ data }) => {
      dispatch(challengesList(data));
    })
    .catch(({ response }) => {
      console.log(response);
    });
};
