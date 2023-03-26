import React, { Component } from 'react';

import { Element, HistoryBox, Title } from '@/assets/commonStyles/history';
import { ILocalStorageData } from '@/store/interfaces';
import { getOperationsHistory } from '@/utils/localStorage/getOperationsHistory';

export class HistoryComponentCC extends Component<
  {},
  { operationsHistory: ILocalStorageData[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      operationsHistory: [],
    };
  }

  componentDidMount() {
    const dataFromLocalStorage = getOperationsHistory('operationsHistoryClass');

    this.setState({
      operationsHistory: dataFromLocalStorage,
    });
  }

  shouldComponentUpdate(
    nextProps: {},
    nextState: { operationsHistory: ILocalStorageData[] },
  ) {
    const dataFromLocalStorage = getOperationsHistory('operationsHistoryClass');
    const { operationsHistory } = this.state;

    if (operationsHistory.length !== dataFromLocalStorage.length) {
      this.setState({
        operationsHistory: dataFromLocalStorage,
      });
    }

    return nextState.operationsHistory.length !== operationsHistory.length;
  }

  render() {
    const { operationsHistory } = this.state;

    return (
      <HistoryBox data-cy="history">
        <Title>History</Title>
        {operationsHistory.map(({ expression, id }) => (
          <Element data-cy="historyElement" key={id}>
            {expression}
          </Element>
        ))}
      </HistoryBox>
    );
  }
}
