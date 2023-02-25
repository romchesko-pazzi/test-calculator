import React from 'react';

import { BorderLeft, Element, History, Title } from 'components/history/styled';
import { ILocalStorageData } from 'store/interfaces';
import { getDataFromLocalStorage } from 'utils/getDataFromLocalStorage';

interface IHistory {
  operationsHistory: ILocalStorageData[];
}

export class HistoryComponentCC extends React.Component<{}, IHistory> {
  constructor(props: {}) {
    super(props);
    this.state = {
      operationsHistory: [],
    };
  }

  componentDidMount() {
    const { operationsHistory } = this.state;
    const dataFromLocalStorage = getDataFromLocalStorage();

    this.setState({
      operationsHistory: [...operationsHistory, ...(dataFromLocalStorage as any)],
    });
  }

  componentDidUpdate() {
    const { operationsHistory } = this.state;
    const dataFromLocalStorage = getDataFromLocalStorage();

    if (operationsHistory.length !== dataFromLocalStorage.length) {
      this.setState({
        operationsHistory: dataFromLocalStorage,
      });
    }
  }

  render() {
    const { operationsHistory } = this.state;

    return (
      <History data-cy="history">
        <Title>History</Title>
        {operationsHistory.map(({ expression, id }) => (
          <Element data-cy="historyElement" key={id}>
            {expression}
          </Element>
        ))}
        <BorderLeft />
      </History>
    );
  }
}
