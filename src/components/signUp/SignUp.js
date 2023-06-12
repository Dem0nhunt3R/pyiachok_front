const SignUp = () => {

    return (
        <div className={'w-25 m-auto my-5'}>
            <form className={'bg-light mx-auto d-flex justify-content-center align-items-center rounded-4 py-4'}>
                <div>
                    <div className='mb-3'>
                        <label htmlFor='inputFirstname' className='form-label'>First name*</label>
                        <input type='text' className='form-control' id='inputFirstname'
                               aria-describedby='firstnameHelp'/>
                        <div id='firstnameHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputLastname' className='form-label'>Last name*</label>
                        <input type='text' className='form-control' id='inputLastname'
                               aria-describedby='lastnameHelp'/>
                        <div id='lastnameHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputEmail' className='form-label'>Email*</label>
                        <input type='email' className='form-control' id='inputEmail'
                               aria-describedby='emailHelp'/>
                        <div id='emailHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputCountry' className='form-label'>Country</label>
                        <input type='text' className='form-control' id='inputCountry' aria-describedby='countryHelp'/>
                        <div id='countryHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputCity' className='form-label'>City</label>
                        <input type='text' className='form-control' id='inputCity'
                               aria-describedby='cityHelp'/>
                        <div id='cityHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputPhone' className='form-label'>Phone</label>
                        <input type='text' className='form-control' id='inputPhone' aria-describedby='phoneHelp'/>
                        <div id='phoneHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputAge' className='form-label'>Age</label>
                        <input type='number' className='form-control' id='inputAge' aria-describedby='ageHelp'/>
                        <div id='ageHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputPassword' className='form-label'>Password*</label>
                        <input type='password' className='form-control' id='inputPassword'
                               aria-describedby='passwordHelp'/>
                        <div id='passwordHelp' className='form-text'></div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='inputConfirmPassword' className='form-label'>Confirm password*</label>
                        <input type='password' className='form-control' id='inputConfirmPassword'
                               aria-describedby='confirmPasswordHelp'/>
                        <div id='confirmPasswordHelp' className='form-text'></div>
                    </div>
                    <div className={'d-flex justify-content-end'}>
                        <button type="button" className={'btn btn-success'}>Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export {SignUp};