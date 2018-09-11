interface IClientError{
    errorMessage: string,
    errorNumber: string,
    errors: IClientError
}

export {IClientError}
