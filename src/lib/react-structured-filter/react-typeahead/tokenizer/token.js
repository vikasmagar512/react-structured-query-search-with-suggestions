import React, { Component } from "react";
import propTypes from "prop-types";

/**
 * Encapsulates the rendering of an option that has been "selected" in a
 * TypeaheadTokenizer
 */
export default class Token extends Component {
  static propTypes = {
    children: propTypes.object,
    onRemoveToken: propTypes.func
  };

  _makeCloseButton() {
    if (!this.props.onRemoveToken) {
      return "";
    }
    return (
      <a
        className="typeahead-token-close"
        href="javascript:void(0)"
        onClick={function(event) {
          this.props.onRemoveToken(this.props.children);
          event.preventDefault();
        }.bind(this)}
      >
        &#x00d7;
      </a>
    );
  }

  render() {
    return (
      <div className="typeahead-token">
        {this.props.children["category"]} {this.props.children["operator"]} "
        {this.props.children["value"]}"{this._makeCloseButton()}
      </div>
    );
  }
}