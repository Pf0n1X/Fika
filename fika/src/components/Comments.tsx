import React from 'react';
import '../styles/Comments.css';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

const Comments = () => (
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <Comment className='comment'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author>
            <div className='author'>Matt</div>
        </Comment.Author>
        <Comment.Metadata>
          <div className='last-seen'>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>
            <div className='comment-text'>How artistic!</div>
        </Comment.Text>
      </Comment.Content>
    </Comment>

    <Comment className='comment'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author>
            <div className='author'>Not Matt</div>
        </Comment.Author>
        <Comment.Metadata>
          <div className='last-seen'>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>
            <div className='comment-text'>How artistic! omg hey i am trying long text How artistic! omg hey i am trying long text How artistic! omg hey i am trying long text</div>
        </Comment.Text>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea className='new-comment'/>
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default Comments;
