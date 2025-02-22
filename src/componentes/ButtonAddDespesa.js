import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { choicedProduct, fetchObjectCurrenciesThunk } from '../actions/index';

class ButtonAddDespesa extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    event.preventDefault();
    const { requestCurrencies } = this.props;
    await requestCurrencies();
    const {
      sendProduct,
      numberProducts,
      currenciesObject,
      valor,
      descricao,
      moeda,
      metodo,
      categoria,
    } = this.props;

    const exchangeRates = { ...currenciesObject };
    const product = {
      id: numberProducts,
      valor,
      descricao,
      moeda,
      metodo,
      categoria,
      exchangeRates,
    };

    sendProduct(product);
  }

  render() {
    return (
      <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
    );
  }
}

const mapStateToProps = (state) => ({
  numberProducts: state.wallet.expenses.length,
  currenciesObject: state.wallet.objectOfCurrenciesDaitails,
});

const mapDispatchToProps = (dispatch) => ({
  sendProduct: (product) => dispatch(choicedProduct(product)),
  requestCurrencies: () => dispatch(fetchObjectCurrenciesThunk()),
});

ButtonAddDespesa.propTypes = {
  sendProduct: PropTypes.func.isRequired,
  requestCurrencies: PropTypes.func.isRequired,
  numberProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
  currenciesObject: PropTypes.func.isRequired,
  valor: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  moeda: PropTypes.string.isRequired,
  metodo: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddDespesa);
