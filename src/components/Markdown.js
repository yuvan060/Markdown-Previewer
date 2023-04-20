import React from "react";
import { marked } from "marked";
import "./style.css";
import Loader from "./Loader";
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "# Markdown Text goes here\n## You can also make subheadings\n",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    return <Loader />;
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getMarkdownText() {
    var rawMarkup = marked(this.state.value);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="container">
        <h2 className="header">Markdown previewer</h2>
        <div className="columns">
          <div className="column">
            <textarea
              id="editor"
              className="editor"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="column">
            <div
              id="preview"
              className="previewer "
              dangerouslySetInnerHTML={this.getMarkdownText()}
            />
          </div>
        </div>
        <footer>
          <small></small>
        </footer>
      </div>
    );
  }
}
export default Markdown;
