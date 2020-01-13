import React from 'react';

const CreateUser = () => {


    //handleInputChanges


    //handleOnSubmitAddUser

    return ( 
        <div>
            <form>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    //value={}
                    //onChange={}
                />
                <input 
                    type='text'
                    name='bio'
                    placeholder='Bio'
                    //value={}
                    //onChange={}
                />
                <button>Add user</button>
            </form>
        </div>
     );
}
 
export default CreateUser;