

function ContactItem({ContactInfo}) {
  return (
    <div className='contact'>
        <img className='smallMaleUser' src="./assets/images/Small Male User.svg" alt="" />
        <p className='userName'>{ContactInfo.name}</p>
    </div>
  )
}

export default ContactItem