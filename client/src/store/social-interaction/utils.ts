import { Dispatch } from 'react';
import { Action } from 'redux';

import { SocialInteraction } from './types';
import {
  startRequestAction,
  addSIAction,
  failedRequestAction,
  setSIsAction,
  editSIAction,
} from './action';
import SocialInteractionService from '../../services/SocialInteractionService';

export const addSI = (si: SocialInteraction) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.add(si)
      .then((response) => {
        dispatch(addSIAction(new SocialInteraction(response.data)));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedRequestAction());
      });
  };
};

export const editSI = (id: string, updatedSI: SocialInteraction) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.update(id, updatedSI)
      .then((response) => {
        console.log(response.data);
        dispatch(editSIAction(id, response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedRequestAction());
      });
  };
};

// export const fetchAll = () => {
//   return function (dispatch: Dispatch<Action>) {
//     dispatch(startRequestAction());
//     SocialInteractionService.getAll()
//       .then((response) => {
//         var data = response.data.map((si: any) => new SocialInteraction(si));
//         dispatch(setSIsAction(data));
//       })
//       .catch((error) => {
//         dispatch(failedRequestAction());
//         console.log(error);
//       });
//   };
// };

export const fetchAll = (cutOffDays?: number, isDateAsc: boolean = false) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.getAll()
      .then((response) => {
        // Check if there is a cutoff date
        const cutOffDate = new Date();
        if (cutOffDays) {
          cutOffDate.setDate(cutOffDate.getDate() - cutOffDays);
        }

        var data = response.data
          .map(
            (socialInteraction: any) => new SocialInteraction(socialInteraction)
          )
          .filter((socialInteraction: SocialInteraction) => {
            // Return all if there's no cutoff
            if (!cutOffDays) return true;

            // Include data within the cutoff date range
            return (
              socialInteraction.date >= cutOffDate &&
              socialInteraction.date <= new Date()
            );
          })
          .sort((a: SocialInteraction, b: SocialInteraction) => {
            if (isDateAsc) {
              return a.date > b.date ? 1 : -1;
            } else {
              return a.date > b.date ? -1 : 1;
            }
          });
        dispatch(setSIsAction(data));
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};
export const deleteSI = (id: string) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.remove(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};
