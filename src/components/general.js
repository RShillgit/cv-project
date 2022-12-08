import Edit from './edits';

const General = (props) => {

    const editField = (e) => {
        e.preventDefault();

        e.target.parentElement.style.display = 'none';

        const editName = document.querySelector(`.editInput${e.target.id}`);
        editName.style.display = 'flex';
    }

    return (
        
        <div className='generalInfo'>
        
            <div className='infoName'>
                <label>Full Name: </label>
                <p>{props.fullName}</p>
                <button id='Name' onClick={editField}>Edit</button>
            </div>
            <Edit divClass="editInputName" inputID="Name" inputType="text" value={props.fullName} handleInputChange={props.handleInputChange}/> 
        
            <div className='infoEmail'>
                <label>Email: </label>
                <p>{props.Email}</p>
                <button id='Email' onClick={editField}>Edit</button>
            </div>
            <Edit divClass="editInputEmail" inputID="Email" inputType="email" value={props.Email} handleInputChange={props.handleInputChange}/> 

            <div className='infoPhone'>
                <label>Phone Number:</label>
                <p>{props.Phone}</p>
                <button id='Phone' onClick={editField}>Edit</button>
            </div>
            <Edit divClass="editInputPhone" inputID="Phone" inputType="text" value={props.Phone} handleInputChange={props.handleInputChange}/> 
        
        </div>
    )
}

export default General;