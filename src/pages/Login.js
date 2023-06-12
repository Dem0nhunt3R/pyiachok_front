const Login = () => {
    const login = () => {

    }

    return (
        <div className={'w-50 m-auto mt-5'}>
            <form className={'bg-dark-subtle mx-auto d-flex justify-content-center align-items-center rounded-4 py-4'}>
                <div className={'w-50'}>
                    <div className='mb-3'>
                        <label htmlFor='inputEmail' className='form-label'>Email</label>
                        <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp'/>
                        <div id='emailHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputPassword' className='form-label'>Password</label>
                        <input type='password' className='form-control' id='inputPassword'
                               aria-describedby='passwordHelp'/>
                        <div id='passwordHelp' className='form-text'></div>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type="button" className={'btn btn-success'} onClick={login()}>Sign in</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export {Login};