import stocks from '../../data/stocks.js';

const state = {
  stocks: [],
  chart: [],
  day: 0
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
  'SET_CHART'(state, record) {
    state.chart = record;
  },
  'CHART_STOCKS'(state) {
    if (state.day == 0) {
      const arrName = ['Days'];
      state.stocks.forEach(stock => {
        arrName.push(stock.name);
      });
      state.chart.push(arrName);
    }
    const arrPrice = [];
      state.stocks.forEach(stock => {
      arrPrice.push(stock.price);
    });
    arrPrice.unshift('Day'+state.day);
    state.chart.push(arrPrice);
    state.day++;
  }
};

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  initStock: ({commit}) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  },
  chartStocks: ({commit}) => {
    commit('CHART_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  chartArr: state => {
    return state.chart;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
