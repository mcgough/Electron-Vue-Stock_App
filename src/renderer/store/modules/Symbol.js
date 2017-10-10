import fetchData from '../../api/fetchApiData.js';
import utils from '../../utils/helpers.js';

const state = {
  symbol: null,
  timeSeries: null,
  indicators: null,
};

const getters = {};

const mutations = {
  SET_SYMBOL_TIME_SERIES(state, params) {
    const { type, response } = params;
    if (utils.hasOwnProp(response, 'Meta Data')) {
      if (!state.timeSeries) state.timeSeries = {};
      const { 'Meta Data': meta, [`Time Series (${type})`]: series } = response;
      const dataPoints = Object.keys(series).map(data => utils.cleanOrderedProps(series[data]));
      const title = meta['1. Information'];
      const recent = dataPoints[0];
      state.timeSeries[type] = { title, recent, dataPoints };
    } else {
      utils.setPropsToNull(state);
    }
  },
  SET_SYMBOL_INDICATOR(state, params) {
    const { type, response } = params;
    if (utils.hasOwnProp(response, 'Meta Data')) {
      if (!state.indicators) state.indicators = {};
      const { 'Meta Data': meta, [`Technical Analysis: ${type}`]: technical } = response;
      const dataPoints = Object.keys(technical).map(data => technical[data][type]);
      const title = meta['2: Indicator'];
      const recent = dataPoints[0];
      state.symbol = meta['1: Symbol'];
      state.indicators[type] = {
        title,
        recent,
        meta,
        technical,
        dataPoints,
      };
    } else {
      utils.setPropsToNull(state);
    }
  },
  RESET_SYMBOL_STATE(state) {
    return utils.setPropsToNull(state);
  },
};

const actions = {
  fetchSymbolData({ commit }, symbol) {
    commit('RESET_SYMBOL_STATE');
    (async () => {
      const daily = await fetchData('TIME_SERIES_DAILY', symbol);
      const MOM = await fetchData('MOM', symbol);
      const SMA = await fetchData('SMA', symbol);
      commit('SET_SYMBOL_TIME_SERIES', { type: 'Daily', response: daily });
      commit('SET_SYMBOL_INDICATOR', { type: 'MOM', response: MOM });
      commit('SET_SYMBOL_INDICATOR', { type: 'SMA', response: SMA });
    })();
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
