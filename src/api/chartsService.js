import { APIService } from "./service";

export const getInfoCards = async () => {
  return APIService.get('/list');
};

export const getInfoCardsCharts = async () => {
  return APIService.get();
}
