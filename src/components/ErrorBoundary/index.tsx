/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-06-15 10:38:48
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:54:56
 */
import { Component } from 'react';
import Exception500 from '@/pages/exception/500';

class ErrorBoundary extends Component<any, any> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('UI ERROR:', error);
    return { hasError: true };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return !nextProps.ignore;
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Exception500 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
