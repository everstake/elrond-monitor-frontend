import Vue from 'vue';
import moment from 'moment';

const MS = 1000;

const formatMsToDate = (val) => moment(val * MS).format('lll');

const formatTime = (val) => {
  const time = val * MS;
  const seconds = moment.duration(moment().diff(time)).seconds();
  const minutes = moment.duration(moment().diff(time)).minutes();
  const hours = moment.duration(moment().diff(time)).hours();
  const days = moment.duration(moment().diff(time)).days();

  if (days !== 0 && hours !== 0) {
    return `${days} d ${hours} hr`;
  }
  if (hours !== 0 && minutes !== 0) {
    return `${hours} hr ${minutes} min`;
  }
  if (minutes !== 0) {
    return `${minutes} min ${seconds} sec`;
  }

  return `${seconds} sec`;
};

const formatDuration = (val) => {
  const time = val * MS;

  const sec = moment.duration(time).seconds();
  const min = moment.duration(time).minutes();
  const hr = moment.duration(time).hours();
  const d = moment.duration(time).days();

  if (d !== 0 && hr !== 0 && min !== 0) {
    return `${d}d ${hr}h`;
  }
  if (hr !== 0 && min !== 0) {
    return `${hr}h ${min}m`;
  }
  if (min !== 0) {
    return `${min}m ${sec}s`;
  }

  return `${sec}s`;
};

Vue.filter('formatMsToDate', formatMsToDate);
Vue.filter('formatTime', formatTime);
Vue.filter('formatDuration', formatDuration);

export { formatMsToDate, formatTime, formatDuration };
