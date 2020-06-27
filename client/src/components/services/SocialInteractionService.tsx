import http from '../utils/HttpCommon';

import SocialInteraction from '../../assets/models/SocialInteraction';

const socialInteractionEndpoint = '/social-interactions';

const getAll = () => {
  return http.get(socialInteractionEndpoint);
};

const get = (id: string) => {
  return http.get(`${socialInteractionEndpoint}/${id}`);
};

const add = (data: SocialInteraction) => {
  return http.post(`${socialInteractionEndpoint}`, data);
};

const update = (id: string, data: SocialInteraction) => {
  return http.put(`${socialInteractionEndpoint}/${id}`, data);
};

const remove = (id: string) => {
  return http.delete(id);
};

export default {
  getAll,
  get,
  add,
  update,
  remove,
};
