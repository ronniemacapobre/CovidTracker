import http from '../utils/HttpCommon';
import { SocialInteraction } from '../store/social-interaction/types';

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
  return http.delete(`${socialInteractionEndpoint}/${id}`);
};

export default {
  getAll,
  get,
  add,
  update,
  remove,
};
