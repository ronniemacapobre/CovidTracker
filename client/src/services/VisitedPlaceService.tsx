import http from '../utils/HttpCommon';

import { VisitedPlace } from '../store/visited-places/types';

const visitedPlaceEndpoint = '/visited-place';

const getAll = () => {
  return http.get(visitedPlaceEndpoint);
};

const get = (id: string) => {
  return http.get(`${visitedPlaceEndpoint}/${id}`);
};

const add = (data: VisitedPlace) => {
  return http.post(`${visitedPlaceEndpoint}`, data);
};

const update = (id: string, data: VisitedPlace) => {
  return http.put(`${visitedPlaceEndpoint}/${id}`, data);
};

const remove = (id: string) => {
  return http.delete(`${visitedPlaceEndpoint}/${id}`);
};

export default {
  getAll,
  get,
  add,
  update,
  remove,
};
