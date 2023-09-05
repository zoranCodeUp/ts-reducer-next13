'use client';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import Image from 'next/image';

const MyComponent = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log('state', state);

  const content = {
    createdBy: 'ddamajadev',
    createdAt: Date(),
    title: 'useReducer & ContextAPI',
    description: 'Context & useReducer with Typescript in Next13',
  };

  return (
    <main
      className={` ${
        state.theme === 'dark'
          ? 'bg-green-950 text-white'
          : 'bg-blue-50 text-black'
      }  flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <button
        className="fixed top-4 right-4 text-green-500"
        onClick={() => dispatch({ type: 'CHANGE_THEME' })}
      >
        {state.theme === 'dark' ? 'light' : 'dark'}
      </button>
      <h1 className="text-4xl font-black">{content.title}</h1>
      <p style={{ fontSize: state.fontSize + 'px' }}>
        {content.createdAt} - by {content.createdBy}
      </p>
      <hr />
      <p>{content.description}</p>
    </main>
  );
};

export default MyComponent;
