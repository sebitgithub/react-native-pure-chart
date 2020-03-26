import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

export default class ColumnChartItem extends Component {
  render() {
    let renders = [];
    let seriesCount = this.props.seriesArray.length;
    for (let seriesIndex = 0; seriesIndex < seriesCount; seriesIndex++) {
      let lastElementMarginRight = 0;
      if (seriesIndex === seriesCount - 1) {
        lastElementMarginRight = this.props.defaultMargin;
      }
      renders.push(
        <View
          key={seriesIndex}
          style={[
            styles.bar,
            {
              position: 'relative',
              width: this.props.defaultWidth / seriesCount,
              height: this.props.seriesArray[seriesIndex].data[
                this.props.dataIndex
              ]['ratioY'],
              marginRight: lastElementMarginRight,
              backgroundColor: this.props.seriesArray[seriesIndex].seriesColor,
              borderColor: this.props.isSelected
                ? this.props.highlightColor
                : '#FFFFFF',
              borderRadius: 10,
            },
          ]}>
          <Text
            style={{
              position: 'absolute',
              top: -20,
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily:'Montserrat-SemiBold',
              fontSize:13
            }}>
            {this.props.seriesArray[seriesIndex].data[this.props.dataIndex][
              'y'
            ] > 0
              ? this.props.seriesArray[seriesIndex].data[this.props.dataIndex][
                  'y'
                ]
              : ''}
          </Text>
        </View>,
      );
    }
    return (
      <TouchableWithoutFeedback onPressIn={evt => this.props.onClick(evt)}>
        <View style={{height: this.props.defaultHeight}}>
          <View style={styles.chartView}>{renders}</View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  chartView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    paddingTop: 20,
  },
  bar: {
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
});

ColumnChartItem.propTypes = {
  seriesArray: PropTypes.array,
  onClick: PropTypes.func,
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  defaultMargin: PropTypes.number,
  primaryColor: PropTypes.string,
  highlightColor: PropTypes.string,
};
