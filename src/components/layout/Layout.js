import React from 'react';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
