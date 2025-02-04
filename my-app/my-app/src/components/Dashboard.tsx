import React from 'react';
import Counter from './Counter';
import UserForm from './UserForm';
import RichTextEditor from './RichTextEditor';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Counter />
      <UserForm />
      <RichTextEditor />
    </div>
  );
};

export default Dashboard;