var CommentBox = React.createClass({
  render: function() {
    return (
      <div clasName="commentBox">
        Hello, world! I am a commentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
