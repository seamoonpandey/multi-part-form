import classes from './next.module.css';

export function Next({ onPress }) {
    return (
        <button type="button" onClick={onPress} className={classes.button}>
            Next &gt;
        </button>
    )
}

export function Previous({ onPress }) {
    return (
        <button type="button" onClick={onPress} className={classes.button}>
            &lt;  Previous
        </button>
    )
}
export function Submit({ onPress }) {
    return (
        <button type="button" onClick={onPress} className={classes.button}>
            Submit
        </button>
    )
}
