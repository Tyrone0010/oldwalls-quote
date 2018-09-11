import * as React from 'react';

export const InputField = (props: any) => {
    const {input, type, label, className, disabled, meta: {touched, error}, ...rest} = props;
    const cssState = touched && error && !disabled ? "form-group has-error" : "form-group";
    const inputCssState = className ? className : "form-control";

    return (
        <div className={cssState}>
            {props.label && <label className="control-label" htmlFor="{props.name}">{label}</label>}
            <input {...input} type={type} className={inputCssState} disabled={disabled ? 'disabled' : ''} />
            {touched && error && !disabled && <span className="help-block">{error}</span>}
        </div>
    );
};