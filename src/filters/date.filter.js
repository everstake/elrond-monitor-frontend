import Vue from 'vue';
import moment from 'moment';

const MS = 1000;

const formatMsToDate = (val) => moment(val * 1000).format('lll');

const formatMsToSeconds = (val) => {
  const seconds = moment.duration(moment().diff(val * MS)).seconds();
  const hours = moment.duration(moment().diff(val * MS)).hours();

  return hours === 0 ? `${seconds} sec` : '';
};

const formatMsToMinutes = (val) => {
  const minutes = moment.duration(moment().diff(val * MS)).minutes();
  const days = moment.duration(moment().diff(val * MS)).days();

  return minutes === 0 || days !== 0 ? '' : `${minutes} min`;
};

const formatMsToHours = (val) => {
  const hours = moment.duration(moment().diff(val * MS)).hours();
  const days = moment.duration(moment().diff(val * MS)).days();

  return hours === 0 || days !== 0 ? '' : `${hours} hr`;
};

const formatMsToDays = (val) => {
  const days = moment.duration(moment().diff(val * MS)).days();

  return days === 0 ? '' : `${days} d`;
};

Vue.filter('formatMsToDate', formatMsToDate)
Vue.filter('formatMsToSeconds', formatMsToSeconds);
Vue.filter('formatMsToMinutes', formatMsToMinutes);
Vue.filter('formatMsToHours', formatMsToHours);
Vue.filter('formatMsToDays', formatMsToDays);

export {
  formatMsToSeconds,
  formatMsToMinutes,
  formatMsToHours,
  formatMsToDays,
  formatMsToDate,
};
