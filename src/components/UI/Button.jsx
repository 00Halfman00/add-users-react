import styles from './Button.module.css';

export default function Button(props) {
  const classes = styles['button'] + ' ' + props.className;

  return (
    <button
      type={props.type || 'button'}
      className={classes}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
